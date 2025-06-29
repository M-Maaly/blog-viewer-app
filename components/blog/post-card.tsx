import Link from "next/link";
import Image from "next/image";
import { EnhancedPost } from "@/types/blog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { categories } from "@/lib/post-enhancer";

interface PostCardProps {
  post: EnhancedPost;
}

export function PostCard({ post }: PostCardProps) {
  const excerpt =
    post.body.length > 120 ? `${post.body.substring(0, 120)}...` : post.body;
  const categoryInfo = categories[post.category] || categories.lifestyle;

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-border bg-card">
      <Link href={`/posts/${post.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="flex-1 min-w-0 space-y-2 p-4">
          <div className="flex items-center text-purple-700 gap-2 text-xs text-muted-foreground">
            <span className="font-normal ">{post.authorName}</span>
            <span className="font-black">•</span>
            <span>{post.date}</span>
          </div>

          <div className="flex items-center justify-between pt-4 mt-4">
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
              {post.title}
            </h4>
            <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all duration-300">
              <ArrowUpRight className="h-4 w-6 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {excerpt}
          </p>

          <div className="flex gap-2">
            <Badge
              variant="outline"
              className={`${categoryInfo?.bgColor || "bg-gray-100"} ${
                categoryInfo?.color || "text-gray-700"
              } border-0 font-medium backdrop-blur-sm`}
            >
              {categoryInfo?.name || "General"}
            </Badge>
          </div>
        </div>
      </Link>
    </Card>
  );
}
