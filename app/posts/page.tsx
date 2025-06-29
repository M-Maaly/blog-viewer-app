import { Suspense } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { fetchPosts } from '@/lib/api';
import { PostCard } from '@/components/blog/post-card';
import { PostCardSkeleton } from '@/components/ui/loading-skeleton';
import { ErrorMessage } from '@/components/ui/error-message';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Posts | The Blog',
  description: 'Discover amazing stories and insights from our community of writers. Browse through our collection of blog posts covering various topics.',
  openGraph: {
    title: 'All Posts | The Blog',
    description: 'Discover amazing stories and insights from our community of writers.',
    type: 'website',
  },
};

async function PostsList() {
  try {
    const posts = await fetchPosts();

    if (!posts || posts.length === 0) {
      return (
        <ErrorMessage 
          title="No posts found"
          message="There are no blog posts available at the moment. Please check back later."
        />
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    );
  } catch (error) {
    return (
      <ErrorMessage 
        title="Failed to load posts"
        message="We couldn't fetch the blog posts. Please try refreshing the page."
        onRetry={() => window.location.reload()}
      />
    );
  }
}

function PostsListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <PostCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6 gap-2 hover:gap-3 transition-all duration-200">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Blog Posts</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Discover Amazing Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our collection of insightful articles, tutorials, and stories from our community of writers.
            </p>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="max-w-7xl mx-auto">
          <Suspense fallback={<PostsListSkeleton />}>
            <PostsList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}