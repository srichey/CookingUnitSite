import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";
import { sanitiseJsonLd, breadcrumbSchema } from "@/lib/schema";

const PATH = "/es/blog";
const ALT_PATH = "/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog: cocina, repostería y conversiones",
  description:
    "Guías claras sobre conversiones de cocina, medidas de repostería, pesos de ingredientes y ajuste de recetas. Una publicación nueva cada semana.",
  path: PATH,
  alternatePath: ALT_PATH,
  locale: "es",
});

export default function BlogIndexPage() {
  const posts = getAllPosts("es");
  const ldBreadcrumb = breadcrumbSchema([
    { name: "Inicio", path: "/es" },
    { name: "Blog", path: PATH },
  ]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-[color:var(--color-ink-muted)]">
        <Link href="/es" className="hover:text-[color:var(--color-ink)] hover:underline">
          Inicio
        </Link>{" "}
        / <span className="text-[color:var(--color-ink)]">Blog</span>
      </nav>

      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">Blog</h1>
      <p className="mt-3 max-w-prose text-base text-[color:var(--color-ink-muted)] sm:text-lg">
        Guías claras sobre conversiones de cocina, medidas de repostería,
        pesos de ingredientes y ajuste de recetas. Una publicación a la semana,
        sin relleno.
      </p>

      <ul className="mt-10 space-y-8">
        {posts.length === 0 && (
          <li className="rounded-md border border-dashed border-[color:var(--color-line-strong)] p-6 text-sm text-[color:var(--color-ink-muted)]">
            Las primeras publicaciones llegan pronto. Guarda esta página o vuelve la próxima semana.
          </li>
        )}
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-[color:var(--color-line)] pb-8 last:border-0">
            <article>
              <p className="text-xs uppercase tracking-wider text-[color:var(--color-ink-muted)]">
                {formatDate(post.publishedAt)} · {post.readingMinutes} min de lectura
              </p>
              <h2 className="mt-1 font-serif text-2xl font-semibold">
                <Link
                  href={`/es/blog/${post.slug}`}
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
  return d.toLocaleDateString("es-419", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
