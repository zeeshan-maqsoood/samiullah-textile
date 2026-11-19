"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { products, site } from "@/lib/site";

// No backend yet: submitting opens the visitor's email app with the enquiry filled in.
export default function ContactForm() {
  const params = useSearchParams();
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Enquiry: ${f.get("product") || "General"} from ${f.get("company") || f.get("name")}`;
    const body = [
      `Name: ${f.get("name")}`,
      `Company: ${f.get("company")}`,
      `Email: ${f.get("email")}`,
      `Phone: ${f.get("phone")}`,
      `Product: ${f.get("product") || "General enquiry"}`,
      "",
      f.get("message"),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <h3>Request a Quote</h3>
      <div className="form-row">
        <label>
          Full name
          <input name="name" required />
        </label>
        <label>
          Company
          <input name="company" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" />
        </label>
      </div>
      <label>
        Product interest
        <select name="product" defaultValue={params.get("product") || ""}>
          <option value="">General enquiry</option>
          {products.map((p) => (
            <option key={p.slug} value={p.name}>{p.name}</option>
          ))}
        </select>
      </label>
      <label>
        Message
        <textarea name="message" rows={5} required placeholder="Specs, quantities, target price, delivery date…" />
      </label>
      <button type="submit" className="btn btn-gold">Send Enquiry</button>
      {sent && <p className="form-note">Your email app should open now. If it did not, write to {site.email}.</p>}
    </form>
  );
}
