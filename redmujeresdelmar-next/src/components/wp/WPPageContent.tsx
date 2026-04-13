"use client";

import { useEffect, useState } from "react";
import { fetchPageContent } from "@/lib/wp-client";

interface WPPageContentProps {
  slug: string;
  fallbackMessage?: string;
}

export default function WPPageContent({
  slug,
  fallbackMessage = "No se pudo cargar el contenido.",
}: WPPageContentProps) {
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPageContent(slug).then((page) => {
      setContent(page?.content ?? null);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!content) {
    return <p className="text-center text-gray-500 py-12">{fallbackMessage}</p>;
  }

  return (
    <div
      className="wp-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
