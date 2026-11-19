"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Since {site.founded} · {site.address.city}, {site.address.country}</span>
          <span className="topbar-links">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
        </div>
      </div>
      <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container header-inner">
          <Link href="/" className="logo" aria-label={`${site.name} home`}>
            <Image src="/images/logo.jpg" alt={`${site.name} logo`} width={56} height={56} className="logo-img" priority />
            <span className="logo-text">
              <strong>{site.short}</strong>
              <small>Enterprises · Est. {site.founded}</small>
            </span>
          </Link>
          <button
            className="menu-btn"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
          <nav className={`nav ${open ? "is-open" : ""}`}>
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={pathname === n.href ? "active" : ""}>
                {n.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-gold nav-cta">Get a Quote</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
