"use client";

import { useEffect, useState } from "react";
import { fetchAllPosts, type WPPost } from "@/lib/wp-client";
import PostCard from "@/components/ui/PostCard";

interface WPLatestPostsProps {
  count?: number;
}

export default function WPLatestPosts({ count = 6 }: WPLatestPostsProps) {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllPosts().then((data) => {
      setPosts(data.slice(0, count));
      setLoading(false);
    });
  }, [count]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-2xl h-72 animate-pulse" />
        ))}
      </div>
    );
  }

  if (posts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post as any} />
      ))}
    </div>
  );
}
