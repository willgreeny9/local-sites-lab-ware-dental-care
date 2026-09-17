import type { Metadata } from "next";
import Link from "next/link";
import { business, hours } from "@/lib/business";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Contact</p>
          <h1>Call or email to make an appointment</h1>
          <p>
            Ware Dental Care is happy to assist with appointments and enquiries. This concept site
            does not send messages to the practice — please use phone or email directly.
          </p>
        </div>

        <div className="contact-panel">
          <div className="contact-card">
            <h2>Practice</h2>
            <p>{business.addressDisplay}</p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
            </p>
            <p>
              <strong>Fax:</strong> {business.faxDisplay}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </p>
            <div className="page-actions">
              <a className="button button-teal" href={`tel:${business.phoneTel}`}>
                Call now
              </a>
              <a className="button button-navy" href={`mailto:${business.email}`}>
                Email the practice
              </a>
            </div>
          </div>
          <div className="contact-card">
            <h2>Opening hours</h2>
            <ul className="hours-list">
              {hours.map((row) => (
                <li key={row.day}>
                  <span>{row.day}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
            <p className="fee-note">As published on the practice contact page.</p>
            <Link className="text-link" href="/find-us">
              Parking &amp; access guide →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
