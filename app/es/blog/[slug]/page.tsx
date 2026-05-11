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
  return getAllPosts("es").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("es", slug);
  if (!post) return { title: "No encontrado" };
  const altPath = post.alternateSlug ? `/blog/${post.alternateSlug}` : undefined;
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/es/blog/${slug}`,
    alternatePath: altPath,
    locale: "es",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost("es", slug);
  if (!post) notFound();

  const ldBreadcrumb = breadcrumbSchema([
    { name: "Inicio", path: "/es" },
    { name: "Blog", path: "/es/blog" },
    { name: post.title, path: `/es/blog/${post.slug}` },
  ]);

  const ldArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    inLanguage: "es-419",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    url: `${SITE_URL}/es/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/es/blog/${post.slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-[color:var(--color-ink-muted)]">
        <Link href="/es" className="hover:text-[color:var(--color-ink)] hover:underline">
          Inicio
        </Link>{" "}
        /{" "}
        <Link href="/es/blog" className="hover:text-[color:var(--color-ink)] hover:underline">
          Blog
        </Link>{" "}
        / <span className="text-[color:var(--color-ink)]">{post.title}</span>
      </nav>

      <p className="text-xs uppercase tracking-wider text-[color:var(--color-ink-muted)]">
        {formatDate(post.publishedAt)} · {post.readingMinutes} min de lectura
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

      {post.alternateSlug && (
        <p className="mt-12 max-w-prose text-sm text-[color:var(--color-ink-muted)]">
          Read in English?{" "}
          <Link
            href={`/blog/${post.alternateSlug}`}
            hrefLang="en-US"
            className="text-[color:var(--color-accent-strong)] underline"
          >
            Open this post
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
  return d.toLocaleDateString("es-419", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
