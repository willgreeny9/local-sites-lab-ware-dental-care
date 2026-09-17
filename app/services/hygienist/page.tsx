import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = { title: "Hygienist" };

export default function HygienistPage() {
  return (
    <section className="section">
      <div className="shell narrow">
        <p className="eyebrow">Care hub</p>
        <h1>Hygienist</h1>
        <p>
          Hygienists work as part of the dental team with a focus on preventive dental health and
          treating gum disease. They professionally clean teeth by removing plaque, tartar and
          staining, and show you the best way to keep teeth free of plaque at home.
        </p>
        <p>
          Direct access to the hygienist is available — contact reception to book and ask about
          availability. Private fee guide examples include a hygiene session at £75 and Airflow at
          £110.
        </p>
        <div className="page-actions">
          <a className="button button-teal" href={`tel:${business.phoneTel}`}>
            Call {business.phoneDisplay}
          </a>
          <Link className="text-link" href="/services">
            ← Care hub
          </Link>
        </div>
      </div>
    </section>
  );
}
