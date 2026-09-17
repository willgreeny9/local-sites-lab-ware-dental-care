import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = { title: "General dentistry" };

export default function GeneralPage() {
  return (
    <section className="section">
      <div className="shell narrow">
        <p className="eyebrow">Care hub</p>
        <h1>General dentistry</h1>
        <p>
          Ware Dental Care has been providing general and family dentistry for over 60 years. The
          practice believes in preventative dentistry and encourages children to attend from an
          early age to establish good oral hygiene and dietary habits. Adult patients have different
          needs — routine and complex dental care is tailored to each individual.
        </p>
        <p>
          General dentistry is available on the NHS and on a private basis. The practice provides
          the full range of general NHS dental services; however, there is a limit to the amount of
          NHS activity available, so there may be certain times of the year when NHS appointments
          are limited or unavailable.
        </p>
        <p>
          After your initial consultation the team aims to provide a comprehensive written treatment
          plan. Speak to reception for your options.
        </p>
        <div className="page-actions">
          <a className="button button-teal" href={`tel:${business.phoneTel}`}>
            Call {business.phoneDisplay}
          </a>
          <Link className="text-link" href="/fees">
            NHS &amp; private fees →
          </Link>
          <Link className="text-link" href="/services">
            ← Care hub
          </Link>
        </div>
      </div>
    </section>
  );
}
