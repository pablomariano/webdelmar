"use client";

import { useEffect, useState } from "react";
import { fetchPageContent, fetchChildPages, type WPApiPage } from "@/lib/wp-client";

export default function WPGalleryContent() {
  const [mainContent, setMainContent] = useState<string | null>(null);
  const [children, setChildren] = useState<WPApiPage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetchPageContent("galeria"),
      fetchChildPages(19),
    ]).then(([page, childPages]) => {
      setMainContent(page?.content ?? null);
      setChildren(
        (childPages ?? []).filter((c) => c.slug !== "despensadelmar")
      );
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

  if (!mainContent && children.length === 0) {
    return (
      <p className="text-center text-gray-500 py-12">
        No se pudo cargar la galería.
      </p>
    );
  }

  return (
    <>
      {mainContent && (
        <div
          className="wp-content mb-16"
          dangerouslySetInnerHTML={{ __html: mainContent }}
        />
      )}

      {children.length > 0 && (
        <div className="space-y-16">
          {children.map((child) => (
            <div key={child.id}>
              <h2 className="font-sansita text-3xl font-bold text-ocean-dark mb-6">
                {child.title.rendered}
              </h2>
              <div
                className="wp-content"
                dangerouslySetInnerHTML={{ __html: child.content.rendered }}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
