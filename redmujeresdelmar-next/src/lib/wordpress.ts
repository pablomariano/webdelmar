import type { WPPost } from "./types";
import fallbackPosts from "@/data/posts.json";

const API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  process.env.WORDPRESS_API_URL ||
  "https://redmujeresdelmar.cl/wp-json/wp/v2";

// ---------------------------------------------------------------------------
// WP REST API response shapes
// ---------------------------------------------------------------------------

export interface WPApiPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  categories: number[];
  tags: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
    "wp:term"?: Array<Array<{ name: string; slug: string }>>;
  };
}

export interface WPApiPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
}

// ---------------------------------------------------------------------------
// Generic fetcher with revalidation
// ---------------------------------------------------------------------------

async function fetchAPI<T>(endpoint: string): Promise<T | null> {
  const url = `${API_URL}${endpoint}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      console.warn(`[WP API] ${res.status} ${res.statusText} → ${url}`);
      return null;
    }
    return res.json();
  } catch (err) {
    console.warn(`[WP API] Error fetching ${url}:`, err instanceof Error ? err.message : err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Mappers: WP API shape → internal types
// ---------------------------------------------------------------------------

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function mapApiPostToWPPost(api: WPApiPost): WPPost {
  const categories =
    api._embedded?.["wp:term"]?.[0]?.map((t) => t.name) ?? [];
  const tags =
    api._embedded?.["wp:term"]?.[1]?.map((t) => t.name) ?? [];
  const thumbnailUrl =
    api._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
    "/images/placeholder.jpg";

  return {
    id: api.id,
    slug: api.slug,
    title: api.title.rendered,
    excerpt: stripHtml(api.excerpt.rendered),
    content: api.content.rendered,
    date: api.date,
    categories,
    tags,
    thumbnailUrl,
  };
}

// ---------------------------------------------------------------------------
// Public API – posts
// ---------------------------------------------------------------------------

export async function getPosts(perPage = 10): Promise<WPPost[]> {
  const apiPosts = await fetchAPI<WPApiPost[]>(
    `/posts?per_page=${perPage}&_embed`
  );
  if (apiPosts) return apiPosts.map(mapApiPostToWPPost);
  // Fallback to static JSON
  return (fallbackPosts as WPPost[]).slice(0, perPage);
}

export async function getAllPosts(): Promise<WPPost[]> {
  const all: WPPost[] = [];
  let page = 1;
  const perPage = 100;
  while (true) {
    const apiPosts = await fetchAPI<WPApiPost[]>(
      `/posts?per_page=${perPage}&page=${page}&_embed`
    );
    if (!apiPosts || apiPosts.length === 0) break;
    all.push(...apiPosts.map(mapApiPostToWPPost));
    if (apiPosts.length < perPage) break;
    page++;
  }
  if (all.length === 0) return fallbackPosts as WPPost[];
  return all;
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const apiPosts = await fetchAPI<WPApiPost[]>(
    `/posts?slug=${slug}&_embed`
  );
  if (apiPosts && apiPosts.length > 0) return mapApiPostToWPPost(apiPosts[0]);
  // Fallback
  const fallback = (fallbackPosts as WPPost[]).find((p) => p.slug === slug);
  return fallback ?? null;
}

export async function getPostsByCategory(
  categorySlug: string,
  perPage = 10
): Promise<WPPost[]> {
  // First resolve category ID
  const cats = await fetchAPI<Array<{ id: number; slug: string }>>(
    `/categories?slug=${categorySlug}`
  );
  if (!cats || cats.length === 0) return [];
  const catId = cats[0].id;
  const apiPosts = await fetchAPI<WPApiPost[]>(
    `/posts?categories=${catId}&per_page=${perPage}&_embed`
  );
  if (apiPosts) return apiPosts.map(mapApiPostToWPPost);
  return [];
}

// ---------------------------------------------------------------------------
// Public API – pages
// ---------------------------------------------------------------------------

export async function getPages() {
  return fetchAPI<WPApiPage[]>("/pages?per_page=50");
}

export async function getPageBySlug(slug: string) {
  const pages = await fetchAPI<WPApiPage[]>(`/pages?slug=${slug}`);
  return pages?.[0] ?? null;
}

export async function getPageContent(slug: string): Promise<{
  title: string;
  content: string;
} | null> {
  const page = await getPageBySlug(slug);
  if (!page) return null;
  return {
    title: page.title.rendered,
    content: page.content.rendered,
  };
}

export async function getChildPages(parentId: number) {
  return fetchAPI<WPApiPage[]>(`/pages?parent=${parentId}&per_page=50`);
}

// ---------------------------------------------------------------------------
// Public API – taxonomies & media
// ---------------------------------------------------------------------------

export async function getCategories() {
  return fetchAPI<Array<{ id: number; name: string; slug: string }>>(
    "/categories?per_page=50"
  );
}

export async function getMedia(id: number) {
  return fetchAPI<{ source_url: string }>(`/media/${id}`);
}
