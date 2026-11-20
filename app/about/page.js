import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import CtaBand from "@/components/CtaBand";
import { milestones, site, yearsInBusiness } from "@/lib/site";

export const metadata = { title: "About Us" };

const values = [
  { title: "Integrity", text: "Fair dealing and clear communication with every buyer and supplier." },
  { title: "Quality", text: "Tested raw materials, controlled processes and strict final inspection." },
  { title: "Reliability", text: "Realistic lead times, and we meet them." },
  { title: "Responsibility", text: "Safe workplaces, fair wages and lower water and energy use." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow={`Established ${site.founded}`}
        title="Our Story"
        text={`${yearsInBusiness()}+ years of making textiles the world trusts.`}
        image="/images/factory/stitching-floor.jpg"
      />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow dark">Who we are</span>
            <h2>Family values, global reach</h2>
            <p>
              {site.name} was founded in {site.founded} in {site.address.city}, {site.address.country},
              the heart of the country&apos;s textile industry. From a single trading office we have
              grown step by step into an integrated manufacturer of knitted and woven
              apparel, denim and home textiles.
            </p>
            <p>
              Today we serve importers, wholesalers and private-label brands across Europe, the
              Americas, the Middle East and Asia. Many of them have worked with us for more than a
              decade.
            </p>
          </div>
          <div className="split-art">
            <Photo src="/images/factory/denim-stitching.jpg" alt="Denim stitching line" tall />
            <Photo src="/images/products/polo-model.jpg" alt="Polo shirt" tall />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">Milestones</span>
            <h2>Our Journey Since {site.founded}</h2>
          </div>
          <ol className="timeline">
            {milestones.map((m) => (
              <li key={m.year}>
                <span className="tl-year">{m.year}</span>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>
                To supply quality textiles at fair prices, delivered on time, while caring for our
                people and our planet.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>
                To be the first-choice textile partner from {site.address.country} for buyers who
                value consistency and trust.
              </p>
            </div>
          </div>
          <div className="section-head spaced">
            <span className="eyebrow dark">What drives us</span>
            <h2>Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
