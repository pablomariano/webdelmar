"use client";

import { useEffect, useState } from "react";
import { fetchAllPosts, type WPPost } from "@/lib/wp-client";
import PostCard from "@/components/ui/PostCard";

const POSTS_PER_PAGE = 12;

export default function WPNewsList() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchAllPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <p className="text-center text-gray-500 py-12">
        No se encontraron noticias.
      </p>
    );
  }

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);

  function goToPage(page: number) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Page number list with ellipsis
  const pageNums: (number | "...")[] = [];
  pageNums.push(1);
  if (currentPage > 3) pageNums.push("...");
  for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
    pageNums.push(i);
  }
  if (currentPage < totalPages - 2) pageNums.push("...");
  if (totalPages > 1) pageNums.push(totalPages);

  return (
    <>
      <p className="text-center text-gray-500 mb-8 text-sm">
        Mostrando {start + 1}–{Math.min(start + POSTS_PER_PAGE, posts.length)} de{" "}
        {posts.length} noticias
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pagePosts.map((post) => (
          <PostCard key={post.slug} post={post as any} />
        ))}
      </div>

      {totalPages > 1 && (
        <nav aria-label="Paginación" className="flex items-center justify-center gap-2 mt-12 flex-wrap">
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

          {pageNums.map((p, i) =>
            p === "..." ? (
              <span key={`dots-${i}`} className="px-2 text-gray-400">…</span>
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
