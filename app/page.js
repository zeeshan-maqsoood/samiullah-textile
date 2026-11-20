import Image from "next/image";
import Link from "next/link";
import Photo from "@/components/Photo";
import CtaBand from "@/components/CtaBand";
import BrandStrip from "@/components/BrandStrip";
import ProductCard from "@/components/ProductCard";
import { certifications, divisions, facilities, processSteps, products, site, yearsInBusiness } from "@/lib/site";

export default function Home() {
  const stats = [
    { value: `${yearsInBusiness()}+`, label: "Years in textiles" },
    { value: "15+", label: "Export countries" },
    { value: "500+", label: "Skilled workforce" },
    { value: "250K+", label: "Pieces per month" },
  ];

  return (
    <>
      <section className="hero">
        <Image src="/images/factory/weaving-hall.jpg" alt="" fill priority sizes="100vw" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <span className="eyebrow">Textile manufacturer &amp; exporter · Since {site.founded}</span>
          <h1>
            From fibre to finished garment, <span className="accent">made with trust.</span>
          </h1>
          <p>
            {site.name} spins, weaves, knits, dyes and stitches polo shirts, T-shirts, denim,
            shirts, hoodies and home textiles for brands and importers around the world.
          </p>
          <div className="hero-actions">
            <Link href="/products" className="btn btn-gold">Explore Products</Link>
            <Link href="/contact" className="btn btn-outline-light">Request a Quote</Link>
          </div>
          <ul className="hero-points">
            <li>Vertically integrated</li>
            <li>Private label &amp; OEM</li>
            <li>Certified &amp; audited</li>
          </ul>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head light">
            <span className="eyebrow">Under one roof</span>
            <h2>Our Divisions</h2>
          </div>
          <div className="divisions">
            {divisions.map((d) => (
              <div key={d.title} className="division">
                <div className="division-img">
                  <Image src={d.image} alt={d.title} fill sizes="180px" />
                </div>
                <h3>{d.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head row">
            <div>
              <span className="eyebrow dark">What we make</span>
              <h2>Our Product Range</h2>
            </div>
            <Link href="/products" className="btn btn-navy">View All Products</Link>
          </div>
          <div className="card-grid">
            {products.slice(0, 8).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <BrandStrip />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow dark">About {site.name}</span>
            <h2>A legacy of craft since {site.founded}</h2>
            <p>
              What began in {site.founded} as a small fabric trading house in {site.address.city} has
              grown into a vertically integrated textile business. We spin, weave, knit, process, stitch
              and pack under one roof, which keeps quality consistent and lead times short.
            </p>
            <ul className="tick-list">
              <li>In-house spinning to packing</li>
              <li>Dedicated denim &amp; knit lines</li>
              <li>Lab testing on every lot</li>
              <li>Low MOQs for new brands</li>
            </ul>
            <Link href="/about" className="btn btn-navy">More About Us</Link>
          </div>
          <div className="split-art">
            <Photo src="/images/factory/stitching-line.jpg" alt="Garment stitching line" tall label={`Since ${site.founded}`} />
            <Photo src="/images/factory/yarn-cones.jpg" alt="Yarn cones on creel" tall />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head row light">
            <div>
              <span className="eyebrow">Infrastructure</span>
              <h2>Inside Our Factory</h2>
            </div>
            <Link href="/gallery" className="btn btn-outline-light">Open Gallery</Link>
          </div>
          <div className="facility-grid">
            {facilities.map((f) => (
              <Link key={f.title} href="/gallery" className="facility">
                <div className="facility-img">
                  <Image src={f.src} alt={f.title} fill sizes="(max-width: 620px) 50vw, 25vw" />
                </div>
                <span className="facility-bar">{f.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">How we work</span>
            <h2>Fibre to Finished Product</h2>
          </div>
          <ol className="process">
            {processSteps.map((s, i) => (
              <li key={s.title}>
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <div className="section-head light">
            <span className="eyebrow">Compliance</span>
            <h2>Standards We Work To</h2>
          </div>
          <div className="cert-row">
            {certifications.map((c) => (
              <span key={c} className="cert">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
