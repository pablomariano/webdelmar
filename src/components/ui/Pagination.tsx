import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];

  // Always show first page
  pages.push(1);

  if (currentPage > 3) pages.push("...");

  // Pages around current
  for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
    pages.push(i);
  }

  if (currentPage < totalPages - 2) pages.push("...");

  // Always show last page
  if (totalPages > 1) pages.push(totalPages);

  function href(page: number) {
    return page === 1 ? basePath : `${basePath}?page=${page}`;
  }

  return (
    <nav aria-label="Paginación" className="flex items-center justify-center gap-2 mt-12">
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={href(currentPage - 1)}
          className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all text-sm font-semibold"
        >
          ← Anterior
        </Link>
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
          <Link
            key={p}
            href={href(p)}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all ${
              p === currentPage
                ? "bg-primary text-white shadow-md"
                : "border border-gray-200 text-gray-600 hover:bg-primary/10 hover:border-primary/30"
            }`}
          >
            {p}
          </Link>
        )
      )}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={href(currentPage + 1)}
          className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all text-sm font-semibold"
        >
          Siguiente →
        </Link>
      ) : (
        <span className="px-4 py-2 rounded-full border border-gray-100 text-gray-300 text-sm font-semibold cursor-not-allowed">
          Siguiente →
        </span>
      )}
    </nav>
  );
}
