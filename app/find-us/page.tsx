import type { Metadata } from "next";
import Link from "next/link";
import { business, hours, parkingOptions } from "@/lib/business";

export const metadata: Metadata = { title: "Find us" };

export default function FindUsPage() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Find us</p>
          <h1>3 West Street, Ware</h1>
          <p>{business.locationNote}</p>
          <p>
            The practice does not have dedicated on-site parking or direct vehicular access to the
            front door — the entrance is in the pedestrian alleyway directly behind Ware High Street.
          </p>
        </div>

        <div className="parking-grid">
          {parkingOptions.map((item) => (
            <article key={item.title} className="parking-card">
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <p className="callout">{business.accessibilityNote}</p>

        <div className="visit-band">
          <div>
            <h2>Opening hours</h2>
            <ul className="hours-list">
              {hours.map((row) => (
                <li key={row.day}>
                  <span>{row.day}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
            <p className="fee-note">Hours as published on the practice contact page.</p>
          </div>
          <div className="visit-band-cta">
            <p>{business.addressDisplay}</p>
            <a
              className="button button-navy"
              href={business.mapsUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Open in Google Maps
            </a>
            <a className="button button-teal" href={`tel:${business.phoneTel}`}>
              Call {business.phoneDisplay}
            </a>
            <Link className="text-link" href="/contact">
              Contact page →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
