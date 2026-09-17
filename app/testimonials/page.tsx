import type { Metadata } from "next";
import Link from "next/link";
import { Stars } from "@/components/Stars";
import { business, patientQuotes } from "@/lib/business";

export const metadata: Metadata = { title: "Patient stories" };

export default function TestimonialsPage() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Patient stories</p>
          <h1>Feedback published by the practice</h1>
          <p>
            These quotes appear on the Ware Dental Care testimonials page. There is no verified
            public platform aggregate score on this concept, so we do not invent a star rating
            total.
          </p>
        </div>
        <div className="quote-grid">
          {patientQuotes.map((item) => (
            <blockquote key={item.attribution} className="quote-card">
              <Stars label="5 out of 5 stars" />
              <p>“{item.quote}”</p>
              <cite>{item.attribution}</cite>
            </blockquote>
          ))}
        </div>
        <div className="page-actions">
          <a className="button button-teal" href={`tel:${business.phoneTel}`}>
            Call {business.phoneDisplay}
          </a>
          <Link className="text-link" href="/contact">
            Contact →
          </Link>
        </div>
      </div>
    </section>
  );
}
