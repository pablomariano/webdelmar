"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/ui/HeroSection";
import WPNewsList from "./WPNewsList";
import WPPostDetail from "./WPPostDetail";

/**
 * Smart router for the /noticias/ page.
 * - If URL is /noticias/ → shows the hero + news list
 * - If URL is /noticias/some-slug/ → shows the post detail (with its own hero)
 *   (this happens when .htaccess serves noticias/index.html for new posts)
 */
export default function WPNoticiasRouter() {
  const [slug, setSlug] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, "");
    const parts = path.split("/").filter(Boolean);
    // /noticias/some-slug → parts = ["noticias", "some-slug"]
    if (parts.length >= 2 && parts[0] === "noticias") {
      setSlug(parts[1]);
    }
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div className="flex justify-center py-16">
        <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  // Post detail — WPPostDetail renders its own hero
  if (slug) {
    return <WPPostDetail slug={slug} />;
  }

  // News list — show HeroSection + list
  return (
    <>
      <HeroSection
        title="Noticias"
        subtitle="Últimas novedades de la Red de Mujeres del Mar"
        height="h-[40vh]"
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WPNewsList />
        </div>
      </section>
    </>
  );
}
