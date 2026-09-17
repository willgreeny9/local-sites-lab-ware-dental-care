import type { Metadata } from "next";
import Link from "next/link";
import { business, specialistFocus } from "@/lib/business";

export const metadata: Metadata = { title: "Specialist dentistry" };

export default function SpecialistPage() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head narrow-head">
          <p className="eyebrow">Care hub</p>
          <h1>Specialist dentistry</h1>
          <p>
            Specialist dental surgeons and dentists with special interests provide complex treatments
            including cosmetic and restorative dentistry, full mouth rehabilitation, implants,
            periodontal (gum) conditions, orthodontics and oral surgery. Specialists have completed
            postgraduate training and are registered with the General Dental Council in their area
            of expertise.
          </p>
          <p>
            Direct access to specialist dental surgeons is available. If you know the treatment you
            need, contact reception to book. Alternatively see a general dental surgeon or ask
            reception for advice. After consultation the practice aims to provide a written treatment
            plan.
          </p>
        </div>
        <div className="specialist-lane-grid on-light">
          {specialistFocus.map((item) => (
            <article key={item.title} className="lane-chip lane-chip-light">
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="page-actions">
          <a className="button button-teal" href={`tel:${business.phoneTel}`}>
            Call {business.phoneDisplay}
          </a>
          <Link className="text-link" href="/referrals">
            Referring dentists →
          </Link>
          <Link className="text-link" href="/services">
            ← Care hub
          </Link>
        </div>
      </div>
    </section>
  );
}
