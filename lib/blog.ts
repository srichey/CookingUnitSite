// Lightweight blog. Posts live as TypeScript exports in content/<locale>/blog/.
// The advantage over MDX at this scale: type-safe, fast, no extra dependencies.
// When the post count grows large enough to feel painful, switch to MDX or a CMS.

import type { Locale } from "./site";

export interface BlogPost {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  // ISO date string, e.g. "2026-05-11".
  publishedAt: string;
  updatedAt?: string;
  // Estimated reading minutes.
  readingMinutes: number;
  // Slug of the counterpart in the other locale, if it exists.
  alternateSlug?: string;
  // Tag IDs for filtering. Loose; no required vocabulary yet.
  tags: string[];
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
  | { kind: "link"; text: string; href: string; description?: string };

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
