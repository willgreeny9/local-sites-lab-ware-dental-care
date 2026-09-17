import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = { title: "Orthodontics" };

export default function OrthodonticsPage() {
  return (
    <section className="section">
      <div className="shell narrow">
        <p className="eyebrow">Care hub</p>
        <h1>Orthodontics</h1>
        <p>
          Orthodontics specialises in treating improper tooth position and bite (malocclusion), and
          can also support cosmetic goals. Appliances may be used to close gaps, align tips,
          straighten teeth, improve speech or eating, support long-term gum and tooth health, and
          treat an improper bite.
        </p>
        <p>
          At Ware Dental Care the orthodontist can provide a range of options. Benefits described on
          the practice site include healthier teeth and gums, a broader smile, clearer speech and
          easier cleaning of aligned teeth. Options listed on the private fee guide include metal or
          ceramic braces and Invisalign.
        </p>
        <p>Orthodontist consultation (teeth straightening) is listed as free of charge on the private fee guide.</p>
        <div className="page-actions">
          <a className="button button-teal" href={`tel:${business.phoneTel}`}>
            Call {business.phoneDisplay}
          </a>
          <Link className="text-link" href="/fees">
            Fee guide →
          </Link>
          <Link className="text-link" href="/services">
            ← Care hub
          </Link>
        </div>
      </div>
    </section>
  );
}
