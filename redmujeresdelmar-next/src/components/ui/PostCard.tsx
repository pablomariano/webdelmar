import Image from "next/image";
import Link from "next/link";
import type { WPPost } from "@/lib/types";

interface PostCardProps {
  post: WPPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/noticias/${post.slug}`} className="group block">
      <article className="smooth-hover bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl">
        <div className="relative h-48 overflow-hidden">
          {post.thumbnailUrl && post.thumbnailUrl !== "/images/placeholder.jpg" ? (
            <Image
              src={post.thumbnailUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 wave-bg" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="inline-block px-2 py-0.5 text-xs font-medium bg-ocean-light/50 text-ocean-dark rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
          <h3 className="font-sansita text-lg font-bold text-ocean-dark group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {post.excerpt}
          </p>
          <time className="block text-xs text-gray-400 mt-3">
            {new Date(post.date).toLocaleDateString("es-CL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </article>
    </Link>
  );
}
