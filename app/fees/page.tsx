import type { Metadata } from "next";
import Link from "next/link";
import { business, nhsBands, privateFeeSamples } from "@/lib/business";

export const metadata: Metadata = { title: "Fees" };

export default function FeesPage() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Fees</p>
          <h1>NHS bands and private examples</h1>
          <p>
            Ware Dental Care offers NHS and private care, plus advanced cosmetic, restorative,
            orthodontic, aesthetic and specialist treatments. Advanced and specialist treatments are
            private. Clinicians provide a comprehensive plan and estimate for each patient. NHS
            activity is limited, so NHS appointments may be restricted at certain times of year.
          </p>
          <p>
            Contact reception about fees, finance and payment options. Figures below are taken from
            the practice website fee pages and may change — always confirm with the practice.
          </p>
        </div>

        <div className="fee-panels">
          <article className="fee-panel">
            <h2>NHS contributions</h2>
            <p className="fee-note">
              Dentistry is one of the few NHS services where you pay a contribution towards care.
              You pay one charge per course of treatment, not per item.
            </p>
            <ul className="fee-list">
              {nhsBands.map((row) => (
                <li key={row.band}>
                  <div>
                    <strong>{row.band}</strong>
                    <span>{row.detail}</span>
                  </div>
                  <em>{row.price}</em>
                </li>
              ))}
            </ul>
          </article>

          <article className="fee-panel">
            <h2>Private fee examples</h2>
            <p className="fee-note">
              Sample figures from the published private guide. Specialist consultations and complex
              items vary — see clinician profiles or ask reception.
            </p>
            <ul className="fee-list">
              {privateFeeSamples.map((row) => (
                <li key={row.item}>
                  <div>
                    <strong>{row.item}</strong>
                  </div>
                  <em>{row.price}</em>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="page-actions">
          <a className="button button-teal" href={`tel:${business.phoneTel}`}>
            Confirm fees by phone
          </a>
          <Link className="text-link" href="/contact">
            Contact →
          </Link>
        </div>
      </div>
    </section>
  );
}
