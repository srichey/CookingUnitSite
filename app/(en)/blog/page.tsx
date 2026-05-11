import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";
import { sanitiseJsonLd, breadcrumbSchema } from "@/lib/schema";

const PATH = "/blog";
const ALT_PATH = "/es/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog: Cooking, Baking, and Conversions",
  description:
    "Plain-language guides on cooking conversions, baking measurements, ingredient weights, and recipe scaling. New posts each week.",
  path: PATH,
  alternatePath: ALT_PATH,
  locale: "en",
});

export default function BlogIndexPage() {
  const posts = getAllPosts("en");
  const ldBreadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: PATH },
  ]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-[color:var(--color-ink-muted)]">
        <Link href="/" className="hover:text-[color:var(--color-ink)] hover:underline">
          Home
        </Link>{" "}
        / <span className="text-[color:var(--color-ink)]">Blog</span>
      </nav>

      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">Blog</h1>
      <p className="mt-3 max-w-prose text-base text-[color:var(--color-ink-muted)] sm:text-lg">
        Plain-language guides on cooking conversions, baking measurements,
        ingredient weights, and recipe scaling. One post a week, no filler.
      </p>

      <ul className="mt-10 space-y-8">
        {posts.length === 0 && (
          <li className="rounded-md border border-dashed border-[color:var(--color-line-strong)] p-6 text-sm text-[color:var(--color-ink-muted)]">
            First posts are publishing soon. Bookmark this page or check back next week.
          </li>
        )}
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-[color:var(--color-line)] pb-8 last:border-0">
            <article>
              <p className="text-xs uppercase tracking-wider text-[color:var(--color-ink-muted)]">
                {formatDate(post.publishedAt)} · {post.readingMinutes} min read
              </p>
              <h2 className="mt-1 font-serif text-2xl font-semibold">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-[color:var(--color-accent-strong)]"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 max-w-prose text-base text-[color:var(--color-ink)]">
                {post.description}
              </p>
            </article>
          </li>
        ))}
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldBreadcrumb) }}
      />
    </div>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
