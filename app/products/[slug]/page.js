import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";
import { categoryLabel, getProduct, products } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  return p ? { title: p.name, description: p.blurb } : {};
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug);
  const more = related.length >= 3 ? related : [...related, ...products.filter((x) => x.category !== p.category)];
  const enquire = `/contact?product=${encodeURIComponent(p.name)}`;

  return (
    <>
      <div className="crumbs">
        <div className="container">
          <Link href="/">Home</Link> <span>/</span> <Link href="/products">Products</Link> <span>/</span>{" "}
          <strong>{p.name}</strong>
        </div>
      </div>

      <section className="section product-detail">
        <div className="container pd-grid">
          <ProductGallery images={p.gallery} name={p.name} />
          <div className="pd-info">
            <span className="eyebrow dark">{categoryLabel(p.category)}</span>
            <h1>{p.name}</h1>
            <p className="pd-lead">{p.blurb}</p>
            <p>{p.description}</p>
            <h3 className="pd-sub">Styles we make</h3>
            <ul className="tick-list">
              {p.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
            <div className="pd-actions">
              <Link href={enquire} className="btn btn-gold">Request a Quote</Link>
              <Link href={enquire} className="btn btn-navy">Order a Sample</Link>
            </div>
            <ul className="pd-badges">
              <li>Private label</li>
              <li>Custom colours</li>
              <li>Worldwide shipping</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">Specifications</span>
            <h2>Technical Details</h2>
          </div>
          <dl className="spec-table">
            {Object.entries(p.specs).map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="spec-note">Specifications are typical ranges. Send us your tech pack for an exact quote.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head row">
            <div>
              <span className="eyebrow dark">You may also need</span>
              <h2>Related Products</h2>
            </div>
            <Link href="/products" className="btn btn-navy">All Products</Link>
          </div>
          <div className="card-grid three">
            {more.slice(0, 3).map((x) => (
              <ProductCard key={x.slug} product={x} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
