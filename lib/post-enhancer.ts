import { Post, EnhancedPost, Category, User } from '@/types/blog';

export const categories: Record<string, Category> = {
  technology: {
    name: 'Technology',
    color: 'text-blue-700',
    bgColor: 'bg-blue-100'
  },
  business: {
    name: 'Business',
    color: 'text-green-700',
    bgColor: 'bg-green-100'
  },
  lifestyle: {
    name: 'Lifestyle',
    color: 'text-purple-700',
    bgColor: 'bg-purple-100'
  },
  travel: {
    name: 'Travel',
    color: 'text-orange-700',
    bgColor: 'bg-orange-100'
  },
  health: {
    name: 'Health',
    color: 'text-red-700',
    bgColor: 'bg-red-100'
  },
  education: {
    name: 'Education',
    color: 'text-indigo-700',
    bgColor: 'bg-indigo-100'
  },
  finance: {
    name: 'Finance',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-100'
  },
  food: {
    name: 'Food',
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-100'
  },
  science: {
    name: 'Science',
    color: 'text-cyan-700',
    bgColor: 'bg-cyan-100'
  },
  entertainment: {
    name: 'Entertainment',
    color: 'text-pink-700',
    bgColor: 'bg-pink-100'
  }
};

const categoryKeywords: Record<string, string[]> = {
  technology: ['tech', 'digital', 'software', 'computer', 'internet', 'app', 'code', 'data', 'system', 'online'],
  business: ['business', 'company', 'market', 'profit', 'strategy', 'management', 'corporate', 'entrepreneur', 'startup', 'sales'],
  lifestyle: ['life', 'personal', 'home', 'family', 'relationship', 'happiness', 'wellness', 'balance', 'style', 'living'],
  travel: ['travel', 'journey', 'destination', 'adventure', 'explore', 'vacation', 'trip', 'world', 'culture', 'place'],
  health: ['health', 'medical', 'fitness', 'exercise', 'nutrition', 'wellness', 'body', 'mind', 'care', 'treatment'],
  education: ['education', 'learn', 'study', 'school', 'knowledge', 'skill', 'training', 'course', 'academic', 'research'],
  finance: ['money', 'finance', 'investment', 'bank', 'economy', 'budget', 'savings', 'financial', 'wealth', 'income'],
  food: ['food', 'recipe', 'cooking', 'restaurant', 'meal', 'cuisine', 'dish', 'ingredient', 'taste', 'kitchen'],
  science: ['science', 'research', 'discovery', 'experiment', 'theory', 'study', 'analysis', 'innovation', 'scientific', 'lab'],
  entertainment: ['entertainment', 'movie', 'music', 'game', 'fun', 'show', 'celebrity', 'art', 'culture', 'media']
};

const categoryImages: Record<string, string[]> = {
  technology: [
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop'
  ],
  business: [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop'
  ],
  lifestyle: [
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop'
  ],
  travel: [
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop'
  ],
  health: [
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop'
  ],
  education: [
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop'
  ],
  finance: [
    'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop'
  ],
  food: [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=400&fit=crop'
  ],
  science: [
    'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop'
  ],
  entertainment: [
    'https://images.unsplash.com/photo-1489599904472-84978f312f2e?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=400&fit=crop'
  ]
};

function determineCategory(title: string, body: string): string {
  const content = (title + ' ' + body).toLowerCase();
  
  let bestMatch = 'lifestyle';
  let maxMatches = 0;
  
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    const matches = keywords.filter(keyword => content.includes(keyword)).length;
    if (matches > maxMatches) {
      maxMatches = matches;
      bestMatch = category;
    }
  }

  const categoryKeys = Object.keys(categories);
  if (maxMatches === 0) {
    bestMatch = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
  }

  return bestMatch;
}

function getImageForPost(postId: number, category: string): string {
  const images = categoryImages[category] || categoryImages.lifestyle;
  return images[postId % images.length];
}

function calculateReadTime(body: string): number {
  const wordsPerMinute = 200;
  const wordCount = body.split(' ').length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export async function enhancePost(post: Post): Promise<EnhancedPost> {
  const category = determineCategory(post.title, post.body);
  const image = getImageForPost(post.id, category);
  const readTime = calculateReadTime(post.body);

  const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
  const user: User = await userRes.json();

  const randomDate = new Date(
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365)
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return {
    ...post,
    image,
    category,
    readTime,
    authorName: user?.name ?? 'Unknown Author',
    date: randomDate,
  };
}

export async function enhancePosts(posts: Post[]): Promise<EnhancedPost[]> {
  const usersRes = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await usersRes.json();

  return posts.map(post => {
    const category = determineCategory(post.title, post.body);
    const image = getImageForPost(post.id, category);
    const readTime = calculateReadTime(post.body);
    const user = users.find(u => u.id === post.userId);

    const randomDate = new Date(
      Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365)
    ).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    return {
      ...post,
      image,
      category,
      readTime,
      authorName: user?.name ?? 'Unknown Author',
      date: randomDate,
    };
  });
}


export { categoryImages, categoryKeywords };
