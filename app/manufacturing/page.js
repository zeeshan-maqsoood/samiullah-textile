import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { processSteps, site } from "@/lib/site";

export const metadata = { title: "Manufacturing" };

// SAMPLE CONTENT: replace capacity figures with real numbers.
const capacity = [
  { value: "60+", label: "Stitching machines" },
  { value: "12", label: "Power looms" },
  { value: "4", label: "Cutting tables" },
  { value: "In-house", label: "Quality checking" },
];

const sustainability = [
  { title: "Solar Energy", text: "Rooftop solar supplies a growing share of our power needs." },
  { title: "Water Recycling", text: "Effluent treatment and reuse reduce fresh-water draw." },
  { title: "Sustainable Cotton", text: "Organic, BCI and recycled fibres available on request." },
  { title: "People First", text: "Safe workplaces, training and fair wages for every worker." },
];

export default function Manufacturing() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="Manufacturing"
        text={`Integrated facilities in ${site.address.city}, built up step by step since ${site.founded}.`}
      />
      <section className="stats">
        <div className="container stats-grid">
          {capacity.map((c) => (
            <div key={c.label} className="stat">
              <strong>{c.value}</strong>
              <span>{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">Vertical integration</span>
            <h2>Our Production Process</h2>
            <p>One partner handles every stage, so you get consistent quality and simple communication.</p>
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

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">Sustainability</span>
            <h2>Responsible Manufacturing</h2>
          </div>
          <div className="values-grid">
            {sustainability.map((s) => (
              <div key={s.title} className="value">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
