import { getAllPosts } from "@/lib/wordpress";
import WPPostDetail from "@/components/wp/WPPostDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function NoticiaPage({ params }: PageProps) {
  const { slug } = await params;
  return <WPPostDetail slug={slug} />;
}
