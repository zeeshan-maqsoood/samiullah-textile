import Link from "next/link";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import CtaBand from "@/components/CtaBand";
import { products } from "@/lib/site";

export const metadata = { title: "Products" };

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Product range"
        title="Our Products"
        text="Home textiles and apparel made to order. Custom sizes, GSM, colours, labels and packing available."
      />
      <section className="section">
        <div className="container product-list">
          {products.map((p, i) => (
            <article key={p.slug} id={p.slug} className={`product-row ${i % 2 ? "reverse" : ""}`}>
              <div className="product-media">
                <Photo src={p.image} alt={p.name} tall />
                {p.image2 && (
                  <div className="product-thumb">
                    <Photo src={p.image2} alt={`${p.name} detail`} sizes="200px" />
                  </div>
                )}
              </div>
              <div>
                <span className="eyebrow dark">Category {String(i + 1).padStart(2, "0")}</span>
                <h2>{p.name}</h2>
                <p>{p.blurb}</p>
                <ul className="tick-list">
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <Link href={`/contact?product=${encodeURIComponent(p.name)}`} className="btn btn-navy">
                  Enquire Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
