"use client";

import Link from "next/link";
import { useState } from "react";
import type { CalculatorGroup } from "@/content/en/calculators";

interface Props {
  groups: CalculatorGroup[];
  liveBadge: string;
  soonBadge: string;
  searchPlaceholder: string;
  searchEmptyLabel: string;
}

export function CalculatorsIndex({
  groups,
  liveBadge,
  soonBadge,
  searchPlaceholder,
  searchEmptyLabel,
}: Props) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filteredGroups = q
    ? groups
        .map((g) => ({
          ...g,
          tiles: g.tiles.filter(
            (t) =>
              t.title.toLowerCase().includes(q) ||
              t.description.toLowerCase().includes(q),
          ),
        }))
        .filter((g) => g.tiles.length > 0)
    : groups;

  return (
    <>
      <div className="mt-6">
        <label className="block">
          <span className="sr-only">{searchPlaceholder}</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="kc-input w-full px-4 py-3 text-base"
            aria-label={searchPlaceholder}
          />
        </label>
      </div>

      {filteredGroups.length === 0 ? (
        <p className="mt-10 rounded-md border border-dashed border-[color:var(--color-line-strong)] bg-white/40 p-6 text-center text-sm text-[color:var(--color-ink-muted)]">
          {searchEmptyLabel}
        </p>
      ) : (
        <div className="mt-10 space-y-12">
          {filteredGroups.map((group) => (
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
      )}
    </>
  );
}

function LinkTile({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="kc-tile kc-tile-link block h-full p-4">
      {children}
    </Link>
  );
}

function DimTile({ children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="block h-full rounded-md border border-dashed border-[color:var(--color-line-strong)] bg-white/40 p-4">
      {children}
    </div>
  );
}
