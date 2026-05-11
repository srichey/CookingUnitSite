import Link from "next/link";
import type { CalculatorGroup } from "@/content/en/calculators";

interface Props {
  groups: CalculatorGroup[];
  liveBadge: string;
  soonBadge: string;
}

export function CalculatorsIndex({ groups, liveBadge, soonBadge }: Props) {
  return (
    <div className="mt-10 space-y-12">
      {groups.map((group) => (
        <section key={group.heading}>
          <h2 className="font-serif text-2xl font-semibold">{group.heading}</h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {group.tiles.map((tile) => {
              const isLive = tile.status === "live";
              const Wrapper = isLive ? LinkTile : DimTile;
              return (
                <li key={tile.title}>
                  <Wrapper href={tile.href}>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-lg font-semibold text-[color:var(--color-ink)]">
                        {tile.title}
                      </h3>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                          isLive
                            ? "bg-[color:var(--color-accent)]/15 text-[color:var(--color-accent-strong)]"
                            : "bg-[color:var(--color-line)]/70 text-[color:var(--color-ink-muted)]"
                        }`}
                      >
                        {isLive ? liveBadge : soonBadge}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">{tile.description}</p>
                  </Wrapper>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

function LinkTile({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block h-full rounded-lg border border-[color:var(--color-line)] bg-white p-4 transition-colors hover:border-[color:var(--color-accent)]"
    >
      {children}
    </Link>
  );
}

function DimTile({ children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="block h-full rounded-lg border border-dashed border-[color:var(--color-line-strong)] bg-white/40 p-4">
      {children}
    </div>
  );
}
