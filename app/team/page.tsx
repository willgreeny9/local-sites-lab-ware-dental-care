import type { Metadata } from "next";
import { business, teamHighlights } from "@/lib/business";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Team</p>
          <h1>Clinicians and support staff</h1>
          <p>
            The practice publishes a full meet-the-team directory with GDC numbers for clinicians.
            Below is a short highlight list of roles shown publicly — see the official site for the
            complete roster and profiles.
          </p>
        </div>
        <div className="team-grid">
          {teamHighlights.map((person) => (
            <article key={person.name} className="team-card">
              <h2>{person.name}</h2>
              <p>{person.role}</p>
            </article>
          ))}
        </div>
        <div className="inline-cta-panel">
          <h2>CQC registered managers</h2>
          <p>
            {business.registeredManagers.join(" and ")} are listed as registered managers on the CQC
            location page.
          </p>
          <a
            className="button button-navy"
            href={business.cqcUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            View CQC location
          </a>
        </div>
        <div className="page-actions">
          <a className="button button-teal" href={`tel:${business.phoneTel}`}>
            Call reception
          </a>
          <a
            className="text-link"
            href={`${business.sourceUrl}meet-the-team.php`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Official team pages →
          </a>
        </div>
      </div>
    </section>
  );
}
