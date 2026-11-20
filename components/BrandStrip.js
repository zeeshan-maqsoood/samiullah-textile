import Image from "next/image";
import { brands } from "@/lib/site";

// Scrolling row of client brands. The list is doubled so the loop is seamless.
export default function BrandStrip() {
  const row = [...brands, ...brands];
  return (
    <section className="brands">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow dark">Our clients</span>
          <h2>Trusted by Brands Worldwide</h2>
          <p>We manufacture for leading international sportswear and apparel brands.</p>
        </div>
      </div>
      <div className="brands-track" aria-label="Brands we supply">
        <ul>
          {row.map((b, i) => (
            <li key={`${b.name}-${i}`} aria-hidden={i >= brands.length}>
              <span className="brand" style={{ "--brand": b.color }}>
                {b.logo && <Image src={b.logo} alt="" width={56} height={56} className="brand-logo" unoptimized />}
                <span className="brand-name">{b.name}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
