import fs from 'fs';
import path from 'path';
import { BlogPost, pillarPosts } from '@/data/blogs';

// Server-only helper to read complete 1,000-1,500 word post from disk
export function getBlogPostBySlug(slug: string): BlogPost | null {
  // Check pillar posts first
  const pillar = pillarPosts.find((p) => p.slug === slug);
  if (pillar) return pillar;

  // Read generated post JSON from disk
  try {
    const postFilePath = path.join(process.cwd(), 'src/data/posts', `${slug}.json`);
    if (fs.existsSync(postFilePath)) {
      const fileData = fs.readFileSync(postFilePath, 'utf8');
      return JSON.parse(fileData) as BlogPost;
    }
  } catch (err) {
    console.error(`Error loading blog post ${slug}:`, err);
  }

  return null;
}
