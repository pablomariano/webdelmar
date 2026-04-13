import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "@/lib/wordpress";

interface WPPostDetailProps {
  slug: string;
}

export default async function WPPostDetail({ slug }: WPPostDetailProps) {
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-end overflow-hidden">
        {post.thumbnailUrl && post.thumbnailUrl !== "/images/placeholder.jpg" ? (
          <Image
            src={post.thumbnailUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 wave-bg" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Noticias
          </Link>
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.map((cat) => (
              <span key={cat} className="px-3 py-1 bg-primary/90 text-white rounded-full text-xs font-semibold">
                {cat}
              </span>
            ))}
          </div>
          <h1 className="font-sansita text-3xl sm:text-4xl md:text-5xl font-bold text-white text-shadow-strong">
            {post.title}
          </h1>
          <time className="block text-white/70 mt-3">
            {new Date(post.date).toLocaleDateString("es-CL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>
    </>
  );
}
