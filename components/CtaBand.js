import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>Looking for a reliable textile partner?</h2>
          <p>Share your specs and quantities. Our team replies within one business day.</p>
        </div>
        <div className="cta-actions">
          <Link href="/contact" className="btn btn-gold">Request a Quote</Link>
          <a href={`mailto:${site.email}`} className="btn btn-outline-light">Email Us</a>
        </div>
      </div>
    </section>
  );
}
