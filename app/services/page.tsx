import type { Metadata } from "next";
import Link from "next/link";
import {
  IconAlign,
  IconClean,
  IconSparkle,
  IconSpecialist,
  IconTooth,
} from "@/components/Icons";
import { business, careServices } from "@/lib/business";

export const metadata: Metadata = {
  title: "Care hub",
};

const icons = {
  general: IconTooth,
  cosmetic: IconSparkle,
  specialist: IconSpecialist,
  orthodontics: IconAlign,
  hygienist: IconClean,
} as const;

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Care hub</p>
          <h1>Services under one roof</h1>
          <p>
            Ware Dental Care is committed to offering high standards of dental care. Highly trained
            clinicians and specialist dental surgeons can offer a multi-disciplinary approach for
            total patient care for all the family. After your initial consultation the practice aims
            to provide a comprehensive written treatment plan.
          </p>
          <p>
            Call <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a> or email{" "}
            <a href={`mailto:${business.email}`}>{business.email}</a> — reception can help you book
            with the most appropriate clinician.
          </p>
        </div>
        <div className="care-mosaic">
          {careServices.map((service) => {
            const Icon = icons[service.id as keyof typeof icons] ?? IconTooth;
            return (
              <Link key={service.id} href={service.href} className="mosaic-card mosaic-span-std">
                <span className="mosaic-icon" aria-hidden="true">
                  <Icon />
                </span>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <ul className="card-points">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <span className="card-cta">Open {service.title.toLowerCase()} →</span>
              </Link>
            );
          })}
        </div>
        <div className="inline-cta-panel">
          <h2>Facial aesthetics</h2>
          <p>
            The practice publishes a facial aesthetics pricing page. Ask reception for current
            options and suitability — this concept does not invent treatments beyond what the
            public site lists.
          </p>
          <a className="button button-teal" href={`tel:${business.phoneTel}`}>
            Call for advice
          </a>
        </div>
      </div>
    </section>
  );
}
