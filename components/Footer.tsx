import Link from "next/link";
import { business, hours, nav } from "@/lib/business";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer-grid">
        <div>
          <p className="footer-kicker">Ware Dental Care</p>
          <p>{business.addressDisplay}</p>
          <p>
            <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
            <br />
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
          <p>
            <a href={business.facebookUrl} rel="noopener noreferrer" target="_blank">
              Facebook
            </a>
            {" · "}
            <a href={business.instagramUrl} rel="noopener noreferrer" target="_blank">
              Instagram
            </a>
          </p>
        </div>
        <div>
          <p className="footer-kicker">Explore</p>
          <ul className="footer-links">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/referrals">Referrals</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-kicker">Opening hours</p>
          <ul className="hours-list hours-list-compact">
            {hours.map((row) => (
              <li key={row.day}>
                <span>{row.day}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="shell footer-note">
        <p>
          Concept website by{" "}
          <a href="https://localsiteslab.com">Local Sites Lab</a>. Not the live or official
          Ware Dental Care website. Facts drawn from public sources listed in the project research
          notes.
        </p>
      </div>
    </footer>
  );
}
