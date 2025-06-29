import { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { fetchPost, fetchUser } from '@/lib/api';
import { AuthorInfo } from '@/components/blog/author-info';
import { PostDetailSkeleton } from '@/components/ui/loading-skeleton';
import { ErrorMessage } from '@/components/ui/error-message';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Clock, Share, Bookmark } from 'lucide-react';
import { categories } from '@/lib/post-enhancer';

interface PostPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  try {
    const post = await fetchPost(params.id);
    
    return {
      title: `${post.title} | The Blog`,
      description: post.body.substring(0, 160),
      openGraph: {
        title: post.title,
        description: post.body.substring(0, 160),
        type: 'article',
        images: [post.image],
      },
    };
  } catch (error) {
    return {
      title: 'Post Not Found | The Blog',
      description: 'The requested blog post could not be found.',
    };
  }
}

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return posts.map((post: any) => ({
    id: post.id.toString(),
  }));
}

async function PostContent({ id }: { id: string }) {
  try {
    const [post, user] = await Promise.all([
      fetchPost(id),
      fetchPost(id).then(p => fetchUser(p.userId))
    ]);

    if (!post) {
      notFound();
    }

    const categoryInfo = categories[post.category] || categories.lifestyle;

    return (
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/posts">
            <Button variant="ghost" className="gap-2 hover:gap-3 transition-all duration-200">
              <ArrowLeft className="h-4 w-4" />
              Back to Posts
            </Button>
          </Link>
        </nav>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <Badge 
              className={`${categoryInfo.bgColor} ${categoryInfo.color} border-0 font-medium text-sm`}
            >
              {categoryInfo.name}
            </Badge>
          </div>
        </div>

        {/* Post Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span>Post #{post.id}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Published Today</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <User className="h-4 w-4" />
              <span className="text-sm">Written by {user.name}</span>
            </div>
          </div>
        </header>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-border/50 shadow-sm">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">
                  {post.body}
                </p>
              </div>
              
              {/* Post Footer */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Thanks for reading!
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Share className="h-4 w-4" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Bookmark className="h-4 w-4" />
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <AuthorInfo user={user} />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <ErrorMessage 
        title="Failed to load post"
        message="We couldn't fetch this blog post. It might not exist or there was a network error."
        onRetry={() => window.location.reload()}
      />
    );
  }
}

export default function PostPage({ params }: PostPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<PostDetailSkeleton />}>
          <PostContent id={params.id} />
        </Suspense>
      </div>
    </div>
  );
}
