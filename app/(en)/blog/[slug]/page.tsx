import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts, getPost } from "@/lib/blog";
import { sanitiseJsonLd, breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { BlogPostBody } from "@/components/BlogPostBody";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts("en").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("en", slug);
  if (!post) return { title: "Not found" };
  const altPath = post.alternateSlug ? `/es/blog/${post.alternateSlug}` : undefined;
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    alternatePath: altPath,
    locale: "en",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost("en", slug);
  if (!post) notFound();

  const ldBreadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const ldArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    inLanguage: "en-US",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: post.author
      ? {
          "@type": "Person",
          "@id": `${SITE_URL}/about#scott-richey`,
          name: post.author,
          url: `${SITE_URL}/about`,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "Kitchen Converts",
      url: SITE_URL,
    },
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    ...(post.sources && post.sources.length > 0
      ? { citation: post.sources.map((s) => ({ "@type": "CreativeWork", name: s.label, url: s.url })) }
      : {}),
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-[color:var(--color-ink-muted)]">
        <Link href="/" className="hover:text-[color:var(--color-ink)] hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-[color:var(--color-ink)] hover:underline">
          Blog
        </Link>{" "}
        / <span className="text-[color:var(--color-ink)]">{post.title}</span>
      </nav>

      <p className="text-xs uppercase tracking-wider text-[color:var(--color-ink-muted)]">
        {formatDate(post.publishedAt)} ·{" "}
        {post.author && (
          <>
            <Link
              href="/about"
              className="font-semibold text-[color:var(--color-ink)] hover:underline"
            >
              {post.author}
            </Link>{" "}
            ·{" "}
          </>
        )}
        {post.readingMinutes} min read
      </p>
      <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 max-w-prose text-lg text-[color:var(--color-ink-muted)]">
        {post.description}
      </p>

      <div className="mt-8">
        <BlogPostBody blocks={post.body} />
      </div>

      {post.sources && post.sources.length > 0 && (
        <section className="mt-12 max-w-prose rounded-lg border border-[color:var(--color-line)] bg-white/60 p-5 shadow-[var(--shadow-soft)]">
          <h2 className="font-serif text-base font-semibold text-[color:var(--color-ink)]">
            Sources
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {post.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {post.alternateSlug && (
        <p className="mt-10 max-w-prose text-sm text-[color:var(--color-ink-muted)]">
          ¿Leer en español?{" "}
          <Link
            href={`/es/blog/${post.alternateSlug}`}
            hrefLang="es-419"
            className="text-[color:var(--color-accent-strong)] underline"
          >
            Ver esta publicación
          </Link>
          .
        </p>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldArticle) }}
      />
    </article>
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
