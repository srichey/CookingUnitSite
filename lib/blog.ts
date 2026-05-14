// Lightweight blog. Posts live as TypeScript exports in content/<locale>/blog/.
// The advantage over MDX at this scale: type-safe, fast, no extra dependencies.
// When the post count grows large enough to feel painful, switch to MDX or a CMS.

import type { Locale } from "./site";

export interface BlogPost {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  // ISO date string, e.g. "2026-04-15".
  publishedAt: string;
  updatedAt?: string;
  // Estimated reading minutes.
  readingMinutes: number;
  // Author byline. Pen name. Single name keeps the author page simple.
  author?: string;
  // Slug of the counterpart in the other locale, if it exists.
  alternateSlug?: string;
  // Tag IDs for filtering. Loose; no required vocabulary yet.
  tags: string[];
  // Optional citation list, rendered at the bottom of the post. Use the
  // highest-quality source available: peer-reviewed science, government
  // standards bodies (NIST, USDA, FDA), authoritative cooking institutions
  // (King Arthur Baking, America's Test Kitchen).
  sources?: { label: string; url: string }[];
  // Post body as ordered blocks. Keep blocks small and explicit so the template
  // stays a server component with no markdown parser dependency.
  body: PostBlock[];
}

export type PostBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "callout"; text: string }
  | { kind: "link"; text: string; href: string; description?: string }
  // Image block. If src is provided, render the real image. If only placeholder
  // is provided, render a styled placeholder box describing what the image
  // should be. Always include alt text so when src is added, no other edits
  // are needed.
  | {
      kind: "image";
      src?: string;
      alt: string;
      caption?: string;
      placeholder?: string;
    };

import { postsEn } from "@/content/en/blog/posts";
import { postsEs } from "@/content/es/blog/posts";

const ALL_POSTS: BlogPost[] = [...postsEn, ...postsEs];

export function getAllPosts(locale: Locale): BlogPost[] {
  return ALL_POSTS
    .filter((p) => p.locale === locale)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPost(locale: Locale, slug: string): BlogPost | undefined {
  return ALL_POSTS.find((p) => p.locale === locale && p.slug === slug);
}

/**
 * Returns posts in the same locale ranked by tag overlap with the given post,
 * with the most-recent posts breaking ties. The current post is always
 * excluded. Used to build the "Related posts" block on each blog page so
 * topic clusters form automatically as new posts are added.
 *
 * If a post has zero tag overlap with anything, the function falls back to
 * the most recent posts in the same locale so the block never renders empty.
 */
export function getRelatedPosts(
  post: BlogPost,
  limit: number = 4,
): BlogPost[] {
  const candidates = ALL_POSTS.filter(
    (p) => p.locale === post.locale && p.slug !== post.slug,
  );
  const tagSet = new Set(post.tags);
  const scored = candidates.map((p) => {
    const overlap = p.tags.filter((t) => tagSet.has(t)).length;
    return { post: p, overlap };
  });
  scored.sort((a, b) => {
    if (b.overlap !== a.overlap) return b.overlap - a.overlap;
    return b.post.publishedAt.localeCompare(a.post.publishedAt);
  });
  return scored.slice(0, limit).map((s) => s.post);
}
