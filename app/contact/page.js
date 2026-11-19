import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { fullAddress, site } from "@/lib/site";

export const metadata = { title: "Contact Us" };

export default function Contact() {
  const mapQuery = encodeURIComponent(fullAddress());
  const tel = site.phone.replace(/\s/g, "");
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        text="Tell us what you need. We reply to every enquiry within one business day."
      />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>{site.name}</h2>
            <p className="muted">Textile manufacturer &amp; exporter since {site.founded}</p>
            <dl>
              <dt>Address</dt>
              <dd>{fullAddress()}</dd>
              <dt>Phone</dt>
              <dd><a href={`tel:${tel}`}>{site.phone}</a></dd>
              <dt>Email</dt>
              <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
              <dt>Business hours</dt>
              <dd>{site.hours}</dd>
            </dl>
          </div>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
      <section className="map-wrap">
        <iframe
          title={`${site.name} location map`}
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
