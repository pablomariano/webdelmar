import { getPostBySlug } from "@/lib/wordpress";
import WPPostDetail from "@/components/wp/WPPostDetail";

export const revalidate = 3600; // revalida cada hora

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Noticia no encontrada" };
  return {
    title: `${post.title} — Red Mujeres del Mar`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.thumbnailUrl !== "/images/placeholder.jpg"
        ? [{ url: post.thumbnailUrl }]
        : [],
    },
  };
}

export default async function NoticiaPage({ params }: PageProps) {
  const { slug } = await params;
  return <WPPostDetail slug={slug} />;
}
