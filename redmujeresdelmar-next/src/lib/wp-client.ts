/**
 * Client-side WordPress REST API fetcher.
 * Runs in the BROWSER so content is always fresh from WordPress.
 * Uses NEXT_PUBLIC_ prefix so the URL is available client-side.
 */

const API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  "https://redmujeresdelmar.cl/wp-json/wp/v2";

// ---------------------------------------------------------------------------
// Types
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

export interface WPPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  categories: string[];
  tags: string[];
  thumbnailUrl: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function mapPost(api: WPApiPost): WPPost {
  return {
    id: api.id,
    slug: api.slug,
    title: api.title.rendered,
    excerpt: stripHtml(api.excerpt.rendered),
    content: api.content.rendered,
    date: api.date,
    categories: api._embedded?.["wp:term"]?.[0]?.map((t) => t.name) ?? [],
    tags: api._embedded?.["wp:term"]?.[1]?.map((t) => t.name) ?? [],
    thumbnailUrl:
      api._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
      "/images/placeholder.jpg",
  };
}

async function fetchWP<T>(endpoint: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${endpoint}`);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Public API – Posts (client-side)
// ---------------------------------------------------------------------------

export async function fetchAllPosts(): Promise<WPPost[]> {
  const all: WPPost[] = [];
  let page = 1;
  while (true) {
    const posts = await fetchWP<WPApiPost[]>(
      `/posts?per_page=100&page=${page}&_embed`
    );
    if (!posts || posts.length === 0) break;
    all.push(...posts.map(mapPost));
    if (posts.length < 100) break;
    page++;
  }
  return all;
}

export async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await fetchWP<WPApiPost[]>(`/posts?slug=${slug}&_embed`);
  if (posts && posts.length > 0) return mapPost(posts[0]);
  return null;
}

// ---------------------------------------------------------------------------
// Public API – Pages (client-side)
// ---------------------------------------------------------------------------

export async function fetchPageContent(
  slug: string
): Promise<{ title: string; content: string } | null> {
  const pages = await fetchWP<WPApiPage[]>(`/pages?slug=${slug}`);
  if (!pages || pages.length === 0) return null;
  return {
    title: pages[0].title.rendered,
    content: pages[0].content.rendered,
  };
}

export async function fetchChildPages(
  parentId: number
): Promise<WPApiPage[] | null> {
  return fetchWP<WPApiPage[]>(`/pages?parent=${parentId}&per_page=50`);
}
