import Link from "next/link";
import type { PostBlock } from "@/lib/blog";

interface Props {
  blocks: PostBlock[];
}

export function BlogPostBody({ blocks }: Props) {
  return (
    <div className="prose prose-neutral max-w-prose">
      {blocks.map((block, idx) => renderBlock(block, idx))}
    </div>
  );
}

function renderBlock(block: PostBlock, key: number) {
  switch (block.kind) {
    case "p":
      return (
        <p key={key} className="mt-4 text-base leading-7 text-[color:var(--color-ink)]">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2
          key={key}
          className="mt-10 font-serif text-2xl font-semibold text-[color:var(--color-ink)]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={key}
          className="mt-6 font-serif text-xl font-semibold text-[color:var(--color-ink)]"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={key} className="mt-4 list-disc space-y-2 pl-6 text-base text-[color:var(--color-ink)]">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={key} className="mt-4 list-decimal space-y-2 pl-6 text-base text-[color:var(--color-ink)]">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside
          key={key}
          className="mt-6 rounded-md border-l-4 border-[color:var(--color-accent)] bg-[color:var(--color-accent)]/8 p-4 text-base text-[color:var(--color-ink)]"
        >
          {block.text}
        </aside>
      );
    case "link":
      return (
        <div key={key} className="mt-6">
          <Link
            href={block.href}
            className="inline-flex items-center gap-2 rounded-md bg-[color:var(--color-warm)] px-4 py-2 text-sm font-medium text-white hover:bg-[color:var(--color-warm-strong)]"
          >
            {block.text}
            <span aria-hidden="true">→</span>
          </Link>
          {block.description && (
            <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">{block.description}</p>
          )}
        </div>
      );
    default:
      return null;
  }
}
