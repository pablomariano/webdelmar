"use client";

import { useState } from "react";
import Link from "next/link";
import type { WPPost } from "@/lib/types";
import PostCard from "./PostCard";

const POSTS_PER_PAGE = 12;

interface PaginatedPostsProps {
  posts: WPPost[];
}

export default function PaginatedPosts({ posts }: PaginatedPostsProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(start, start + POSTS_PER_PAGE);

  function goToPage(page: number) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Build page numbers with ellipsis
  const pages: (number | "...")[] = [];
  pages.push(1);
  if (currentPage > 3) pages.push("...");
  for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
    pages.push(i);
  }
  if (currentPage < totalPages - 2) pages.push("...");
  if (totalPages > 1) pages.push(totalPages);

  if (posts.length === 0) {
    return (
      <p className="text-center text-gray-500 py-12">
        No se encontraron noticias.
      </p>
    );
  }

  return (
    <>
      <p className="text-center text-gray-500 mb-8 text-sm">
        Mostrando {start + 1}–{Math.min(start + POSTS_PER_PAGE, posts.length)} de {posts.length} noticias
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav aria-label="Paginación" className="flex items-center justify-center gap-2 mt-12">
          {/* Previous */}
          {currentPage > 1 ? (
            <button
              onClick={() => goToPage(currentPage - 1)}
              className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all text-sm font-semibold"
            >
              ← Anterior
            </button>
          ) : (
            <span className="px-4 py-2 rounded-full border border-gray-100 text-gray-300 text-sm font-semibold cursor-not-allowed">
              ← Anterior
            </span>
          )}

          {/* Page numbers */}
          {pages.map((p, i) =>
            p === "..." ? (
              <span key={`dots-${i}`} className="px-2 text-gray-400">
                …
              </span>
            ) : (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all ${
                  p === currentPage
                    ? "bg-primary text-white shadow-md"
                    : "border border-gray-200 text-gray-600 hover:bg-primary/10 hover:border-primary/30"
                }`}
              >
                {p}
              </button>
            )
          )}

          {/* Next */}
          {currentPage < totalPages ? (
            <button
              onClick={() => goToPage(currentPage + 1)}
              className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all text-sm font-semibold"
            >
              Siguiente →
            </button>
          ) : (
            <span className="px-4 py-2 rounded-full border border-gray-100 text-gray-300 text-sm font-semibold cursor-not-allowed">
              Siguiente →
            </span>
          )}
        </nav>
      )}
    </>
  );
}
