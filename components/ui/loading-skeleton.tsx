import { Card } from '@/components/ui/card';

export function PostCardSkeleton() {
  return (
    <Card className="overflow-hidden border-border/50 bg-card">
      <div className="relative h-48 bg-muted animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-muted rounded animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded animate-pulse" />
          <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="h-4 bg-muted rounded w-24 animate-pulse" />
          <div className="h-4 bg-muted rounded w-20 animate-pulse" />
        </div>
      </div>
    </Card>
  );
}

export function PostDetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="h-10 bg-muted rounded w-32 animate-pulse" />
      </div>
      
      <div className="relative h-64 md:h-80 rounded-xl bg-muted animate-pulse mb-8" />
      
      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm mb-4">
          <div className="h-4 bg-muted rounded w-20 animate-pulse" />
          <div className="h-4 bg-muted rounded w-24 animate-pulse" />
        </div>
        
        <div className="h-12 bg-muted rounded mb-6 animate-pulse" />
        
        <div className="flex items-center gap-4">
          <div className="h-4 bg-muted rounded w-32 animate-pulse" />
        </div>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-8 border-border/50">
            <div className="space-y-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-4 bg-muted rounded animate-pulse" />
              ))}
            </div>
          </Card>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl p-6 border border-border/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 bg-muted rounded-full animate-pulse" />
              <div className="space-y-2">
                <div className="h-5 bg-muted rounded w-24 animate-pulse" />
                <div className="h-4 bg-muted rounded w-20 animate-pulse" />
              </div>
            </div>
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-4 bg-muted rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedPostsSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* First Featured Post Skeleton */}
      <Card className="overflow-hidden border-border/50 bg-card">
        <div className="flex flex-col md:flex-row h-full">
          <div className="relative md:w-1/2 h-64 md:h-auto bg-muted animate-pulse" />
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-6 bg-muted rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded animate-pulse" />
                <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
              </div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div className="h-4 bg-muted rounded w-24 animate-pulse" />
              <div className="h-4 bg-muted rounded w-20 animate-pulse" />
            </div>
          </div>
        </div>
      </Card>

      {/* Second Featured Post Skeleton */}
      <Card className="overflow-hidden border-border/50 bg-card">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 p-6 flex flex-col justify-between order-2 md:order-1">
            <div className="space-y-4">
              <div className="h-5 bg-muted rounded w-20 animate-pulse" />
              <div className="h-6 bg-muted rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded animate-pulse" />
                <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
              </div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div className="h-4 bg-muted rounded w-24 animate-pulse" />
              <div className="h-4 bg-muted rounded w-20 animate-pulse" />
            </div>
          </div>
          <div className="relative md:w-1/2 h-64 md:h-auto bg-muted animate-pulse order-1 md:order-2" />
        </div>
      </Card>
    </div>
  );
}