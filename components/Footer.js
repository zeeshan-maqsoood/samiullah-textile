import Image from "next/image";
import Link from "next/link";
import { fullAddress, nav, products, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo logo-light">
            <Image src="/images/logo.jpg" alt={`${site.name} logo`} width={56} height={56} className="logo-img" priority />
            <span className="logo-text">
              <strong>{site.short}</strong>
              <small>Enterprises · Est. {site.founded}</small>
            </span>
          </div>
          <p className="footer-about">
            A family-run textile manufacturer and exporter working since {site.founded}.
            Yarn, fabric and finished made-ups for brands and importers worldwide.
          </p>
        </div>
        <div>
          <h4>Company</h4>
          <ul>{nav.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Products</h4>
          <ul>{products.map((p) => <li key={p.slug}><Link href={`/products/${p.slug}`}>{p.name}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>{fullAddress()}</li>
            <li><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} {site.name}. All rights reserved. Serving the textile trade since {site.founded}.
        </div>
      </div>
    </footer>
  );
}
