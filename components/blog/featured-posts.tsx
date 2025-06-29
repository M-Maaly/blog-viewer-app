"use client";

import Link from "next/link";
import Image from "next/image";
import { EnhancedPost } from "@/types/blog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/post-enhancer";

interface FeaturedPostsProps {
  posts: EnhancedPost[];
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (posts.length < 3) return null;

  const [mainPost, ...sidePosts] = posts.slice(0, 4);

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Recent blog posts
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Featured Post - Left Side */}
        <div className="lg:col-span-1">
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500  border-border/50 hover:border-border bg-card h-full">
            <Link href={`/posts/${mainPost.id}`} className="block h-full">
              <div className="flex flex-col h-full">
                {/* Image Section */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <Image
                    src={mainPost.image}
                    alt={mainPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center text-purple-700 gap-2 text-sm text-muted-foreground">
                      <span className="font-normal">{mainPost.authorName}</span>
                      <span className="font-black">•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 " />
                        <span>{mainPost.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 mt-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                        {mainPost.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all duration-300">
                        <ArrowUpRight
                          viewBox="0 0 0 -10"
                          className="h-4 w-6 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {mainPost.body.length > 200
                        ? `${mainPost.body.substring(0, 200)}...`
                        : mainPost.body}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Badge
                      variant="outline"
                      className={`${
                        categories[mainPost.category]?.bgColor || "bg-gray-100"
                      } ${
                        categories[mainPost.category]?.color || "text-gray-700"
                      } border-0 font-medium backdrop-blur-sm`}
                    >
                      {categories[mainPost.category]?.name || "General"}
                    </Badge>
                  </div>
                </div>
              </div>
            </Link>
          </Card>
        </div>

        {/* Side Posts - Right Side */}
        <div className="lg:col-span-1 space-y-6 flex flex-col justify-between">
          {sidePosts.map((post, index) => {
            return (
              <Card
                key={post.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-border/50 hover:border-border bg-card"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <Link href={`/posts/${post.id}`} className="block">
                  <div className="flex gap-2 ">
                    {/* Image */}
                    <div className="relative w-1/2 flex-shrink-0 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="96px"
                      />
                    </div>

                    {/* Content */}
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
                        {post.body.length > 80
                          ? `${post.body.substring(0, 80)}...`
                          : post.body}
                      </p>

                      <div className="flex gap-2">
                        <Badge
                          variant="outline"
                          className={`${
                            categories[post.category]?.bgColor || "bg-gray-100"
                          } ${
                            categories[post.category]?.color || "text-gray-700"
                          } border-0 font-medium backdrop-blur-sm`}
                        >
                          {categories[post.category]?.name || "General"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Bottom Featured Post - Full Width */}
      {posts.length > 4 && (
        <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-border bg-card mt-8">
          <Link href={`/posts/${posts[4].id}`} className="block">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Image Section */}
              <div className="relative lg:w-1/2  overflow-hidden">
                <Image
                  src={posts[4].image}
                  alt={posts[4].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-card to-card/80">
                <div className="space-y-4">
                  <div className="flex items-center text-purple-700 gap-2 text-sm text-muted-foreground">
                    <span className="font-normal">{posts[4].authorName}</span>
                    <span className="font-black">•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 " />
                      <span>{posts[4].date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {posts[4].title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all duration-300">
                      <ArrowUpRight
                        viewBox="0 0 0 -10"
                        className="h-4 w-6 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {posts[4].body.length > 200
                      ? `${posts[4].body.substring(0, 200)}...`
                      : posts[4].body}
                  </p>

                  <div className="flex gap-2">
                    <Badge
                      variant="outline"
                      className={`${
                        categories[posts[4].category]?.bgColor || "bg-gray-100"
                      } ${
                        categories[posts[4].category]?.color || "text-gray-700"
                      } border-0 font-medium backdrop-blur-sm`}
                    >
                      {categories[posts[4].category]?.name || "General"}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Card>
      )}
    </div>
  );
}
