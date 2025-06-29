import { Post, User, EnhancedPost } from '@/types/blog';
import { enhancePost, enhancePosts } from './post-enhancer';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts(): Promise<EnhancedPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      next: { revalidate: 3600 },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    const posts: Post[] = await response.json();
    return enhancePosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export async function fetchPost(id: string): Promise<EnhancedPost> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      next: { revalidate: 3600 },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    
    const post: Post = await response.json();
    return enhancePost(post);
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    throw error;
  }
}

export async function fetchUser(userId: number): Promise<User> {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      next: { revalidate: 3600 },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching user ${userId}:`, error);
    throw error;
  }
}