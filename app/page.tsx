"use client";

import { Suspense, useState, useEffect } from "react";
import { fetchPosts } from "@/lib/api";
import { FeaturedPosts } from "@/components/blog/featured-posts";
import { PostCard } from "@/components/blog/post-card";
import { PaginationControls } from "@/components/blog/pagination-controls";
import {
  PostCardSkeleton,
  FeaturedPostsSkeleton,
} from "@/components/ui/loading-skeleton";
import { ErrorMessage } from "@/components/ui/error-message";
import { EnhancedPost } from "@/types/blog";
import { Footer } from "@/components/layout/footer";

const POSTS_PER_PAGE = 6;

function PostsContent() {
  const [posts, setPosts] = useState<EnhancedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        setError("Failed to load posts");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="space-y-20">
        <div className="animate-fade-in">
          <FeaturedPostsSkeleton />
        </div>

        <div className="animate-slide-up animate-delay-200">
          <div className="mb-12">
            <div className="h-10 bg-muted rounded w-64 mb-4"></div>
            <div className="h-6 bg-muted rounded w-96"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`animate-fade-in animate-delay-${(i + 1) * 100}`}
              >
                <PostCardSkeleton />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !posts || posts.length === 0) {
    return (
      <div className="animate-fade-in">
        <ErrorMessage
          title="No posts found"
          message="There are no blog posts available at the moment. Please check back later."
        />
      </div>
    );
  }

  // Get posts for featured section
  const shuffled = [...posts].sort(() => 0.5 - Math.random());
  const featuredPosts = shuffled.slice(0, 5);

  // Calculate pagination for remaining posts
  const remainingPosts = posts.slice(5);
  const totalPages = Math.ceil(remainingPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = remainingPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of posts section
    document.getElementById("all-posts")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="space-y-20">
      {/* Featured Posts Section */}
      <section className="animate-slide-in-left">
        <FeaturedPosts posts={featuredPosts} />
      </section>

      {/* All Posts Section */}
      <section id="all-posts" className="animate-slide-up animate-delay-300">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            All blog posts
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our complete collection of articles and stories • Page{" "}
            {currentPage} of {totalPages}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <div
              key={post.id}
              className={`animate-fade-in animate-delay-${(index + 1) * 100}`}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="animate-fade-in animate-delay-400">
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen min-w-full bg-background">
      <section className="py-8 lg:py-8 border-b border-border/40">
        <div className="container mx-auto px-4 border-y border-black dark:border-white">
          <h1 className="mx-auto text-center text-5xl lg:text-[13rem] font-black text-foreground leading-tight tracking-widest">
            THE BLOG
          </h1>
        </div>
      </section>

      {/* Posts Content */}
      <section className="pt-16 lg:pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <PostsContent />
          </div>
        </div>
      </section>
    </div>
  );
}
