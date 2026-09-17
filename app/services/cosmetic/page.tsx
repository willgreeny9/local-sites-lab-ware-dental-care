import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = { title: "Cosmetic dentistry" };

export default function CosmeticPage() {
  return (
    <section className="section">
      <div className="shell narrow">
        <p className="eyebrow">Care hub</p>
        <h1>Cosmetic dentistry</h1>
        <p>
          The practice offers a range of cosmetic treatments that can be used to straighten,
          lighten, reshape and repair teeth. Advanced and specialist cosmetic options are private.
          Each clinician provides a treatment plan and estimate tailored to the time and complexity
          of care required.
        </p>
        <p>
          Related pathways on the public site include orthodontics (including braces and Invisalign
          on the private fee guide), restorative work and specialist input where needed.
        </p>
        <div className="page-actions">
          <a className="button button-teal" href={`tel:${business.phoneTel}`}>
            Call {business.phoneDisplay}
          </a>
          <Link className="text-link" href="/services/orthodontics">
            Orthodontics →
          </Link>
          <Link className="text-link" href="/services">
            ← Care hub
          </Link>
        </div>
      </div>
    </section>
  );
}
