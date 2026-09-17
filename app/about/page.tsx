import type { Metadata } from "next";
import Link from "next/link";
import { business, cqcSummary, hubPillars } from "@/lib/business";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="section">
      <div className="shell">
        <div className="story-split">
          <div className="story-copy">
            <p className="eyebrow">About</p>
            <h1>Ware Dental Care</h1>
            <p>
              {business.establishedClaim} Over the past 60 years the practice has provided dental
              care to patients from Ware and beyond, and currently looks after{" "}
              {business.activePatientsClaim.replace(/\.$/, "")}.
            </p>
            <p>
              The team of highly trained clinicians can offer a multi-disciplinary approach for
              total patient care for all the family. The aim is a wide range of general, advanced
              and specialist dental care, with early intervention, patient education, prevention and
              minimally invasive techniques encouraged with all clinicians.
            </p>
            <p>
              The practice notes green measures that change how work is done — for example digital
              X-ray machines and amalgam separators to minimise environmental impact.
            </p>
          </div>
          <div className="story-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gallery-3.jpg"
              alt="Imagery from the Ware Dental Care website"
              width={1200}
              height={680}
            />
          </div>
        </div>

        <div className="pillar-row" style={{ marginTop: "2rem" }}>
          {hubPillars.map((item) => (
            <article key={item.title} className="pillar-card">
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="inline-cta-panel">
          <h2>{cqcSummary.title}</h2>
          <p>{cqcSummary.detail}</p>
          <a
            className="button button-navy"
            href={cqcSummary.sourceUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Read the CQC assessment
          </a>
        </div>

        <div className="page-actions">
          <Link className="button button-teal" href="/team">
            Meet the team highlights
          </Link>
          <Link className="text-link" href="/contact">
            Contact →
          </Link>
        </div>
      </div>
    </section>
  );
}
