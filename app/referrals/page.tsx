import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = { title: "Referrals" };

export default function ReferralsPage() {
  return (
    <section className="section">
      <div className="shell narrow">
        <p className="eyebrow">Referrals</p>
        <h1>Advice, planning and specialist treatment</h1>
        <p>
          Ware Dental Care welcomes patients and specialist referrals for advice, treatment planning
          and specialist treatment. Areas listed include cosmetic and restorative dentistry, full
          mouth rehabilitation, implants, periodontal conditions, prosthodontics, endodontics,
          periodontics and oral surgery.
        </p>
        <p>
          After the initial consultation the practice aims to provide a comprehensive written
          treatment plan and a full report for the referring dentist or clinician. Referred patients
          are returned to their referring clinician for ongoing general dental treatment.
        </p>
        <div className="inline-cta-panel">
          <h2>How to refer</h2>
          <p>
            Download the referral form from the official practice site and email it to{" "}
            <a href={`mailto:${business.referralEmail}`}>{business.referralEmail}</a>, or call
            reception on {business.phoneDisplay}.
          </p>
          <a className="button button-teal" href={`tel:${business.phoneTel}`}>
            Call reception
          </a>
          <a
            className="button button-navy"
            href={`${business.sourceUrl}referrals.php`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Official referral page
          </a>
        </div>
        <p>
          <Link className="text-link" href="/services/specialist">
            Specialist dentistry →
          </Link>
        </p>
      </div>
    </section>
  );
}
