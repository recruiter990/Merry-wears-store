"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/content/site";
import { cx } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/90 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link href="/" aria-label="Merry wears. home" className="text-forest">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "text-[12px] uppercase tracking-[0.18em] transition-colors",
                  active ? "text-burgundy" : "text-forest/80 hover:text-forest",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="inline-flex h-10 w-10 items-center justify-center text-forest"
            aria-label="Search articles"
          >
            <Search size={18} />
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-forest lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>
      {open ? (
        <div id="mobile-nav" className="border-t border-forest/10 bg-cream lg:hidden">
          <Container className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-forest/10 py-3 text-sm tracking-[0.16em] uppercase text-forest"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
