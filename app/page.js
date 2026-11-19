import Link from "next/link";
import Photo from "@/components/Photo";
import CtaBand from "@/components/CtaBand";
import { certifications, processSteps, products, site, yearsInBusiness } from "@/lib/site";

export default function Home() {
  const stats = [
    { value: `${yearsInBusiness()}+`, label: "Years in textiles" },
    { value: "10+", label: "Export countries" },
    { value: "150+", label: "Skilled workforce" },
    { value: "50K+", label: "Pieces per month" },
  ];

  return (
    <>
      <section className="hero weave-bg">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Working since {site.founded}</span>
            <h1>
              Quality textiles,
              <br />
              woven with <em>trust.</em>
            </h1>
            <p>
              For over {yearsInBusiness()} years, {site.name} has turned fine cotton into bed
              linen, towels, hoodies and jackets for importers, retailers and brands around the world.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="btn btn-gold">Explore Products</Link>
              <Link href="/about" className="btn btn-outline-light">Our Story</Link>
            </div>
          </div>
          <div className="hero-art">
            <Photo src="/images/products/bed-sheets.png" alt="Embroidered bed sheet set" tall priority />
            <Photo src="/images/products/hoodies.png" alt="Fleece hoodies in five colours" priority />
            <Photo src="/images/products/towels.png" alt="Stack of cotton terry towels" priority />
            <div className="hero-badge">
              <strong>{site.founded}</strong>
              <span>Established</span>
            </div>
          </div>
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

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow dark">About {site.name}</span>
            <h2>A legacy of craft since {site.founded}</h2>
            <p>
              What began in {site.founded} as a small fabric trading house in {site.address.city} has
              grown into a vertically integrated textile business. We spin, weave, process, stitch and
              pack under one roof, which keeps quality consistent and lead times short.
            </p>
            <p>
              Our customers stay with us for decades because we keep our word: honest pricing, steady
              quality and shipments that leave on time.
            </p>
            <Link href="/about" className="btn btn-navy">More About Us</Link>
          </div>
          <div className="split-art">
            <Photo src="/images/products/bed-sheets-folded.png" alt="Folded cotton bed sheets" tall label={`Since ${site.founded}`} />
            <Photo src="/images/products/jacket-bomber.png" alt="Bomber jacket" tall />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">What we make</span>
            <h2>Our Product Range</h2>
            <p>Home textiles and apparel, built to your specification.</p>
          </div>
          <div className="card-grid">
            {products.map((p) => (
              <Link key={p.slug} href={`/products#${p.slug}`} className="product-card">
                <Photo src={p.image} alt={p.name} sizes="(max-width: 620px) 100vw, 33vw" />
                <div className="product-body">
                  <h3>{p.name}</h3>
                  <p>{p.blurb}</p>
                  <span className="link-arrow">View details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
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
