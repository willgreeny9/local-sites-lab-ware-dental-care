import Link from "next/link";
import {
  IconAlign,
  IconClean,
  IconMap,
  IconPhone,
  IconShield,
  IconSparkle,
  IconSpecialist,
  IconTooth,
} from "@/components/Icons";
import { Stars } from "@/components/Stars";
import {
  business,
  careServices,
  cqcSummary,
  hours,
  hubPillars,
  patientQuotes,
  parkingOptions,
  specialistFocus,
} from "@/lib/business";

const iconMap = {
  general: IconTooth,
  cosmetic: IconSparkle,
  specialist: IconSpecialist,
  orthodontics: IconAlign,
  hygienist: IconClean,
} as const;

export default function HomePage() {
  return (
    <>
      <section className="hero-hub" aria-labelledby="hero-title">
        <div className="hero-hub-copy">
          <p className="hero-kicker">Ware High Street · NHS &amp; private</p>
          <h1 id="hero-title">Family dental care under one roof.</h1>
          <p className="hero-punch">Call to make an appointment — multi-disciplinary team ready to help.</p>
          <div className="hero-actions">
            <a className="button button-cream" href={`tel:${business.phoneTel}`}>
              <IconPhone className="btn-icon" />
              Call {business.phoneDisplay}
            </a>
            <Link className="button button-ghost-light" href="/find-us">
              How to find us
            </Link>
          </div>
        </div>
        <div className="hero-hub-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-practice.jpg"
            alt="Ware Dental Care practice imagery from the official website"
            width={1600}
            height={880}
          />
        </div>
      </section>

      <section className="social-proof" aria-label="Trust and patient voice">
        <div className="shell social-proof-inner">
          <a
            className="social-proof-card"
            href={business.cqcUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="social-proof-copy">
              <IconShield className="social-proof-icon" />
              <strong>{cqcSummary.title}</strong>
              <span>
                CQC location {business.cqcLocationId} · assessment published{" "}
                {business.cqcReportPublished}.
              </span>
              <div className="social-proof-chips" aria-hidden="true">
                {cqcSummary.domains.map((domain) => (
                  <span key={domain} className="social-proof-chip-static">
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </a>
          <Link className="social-proof-card" href="/testimonials">
            <div className="social-proof-copy">
              <Stars label="5 out of 5 stars" />
              <strong>Patient stories</strong>
              <span>
                Quotes published on the practice website — no invented platform score.
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section" id="care-hub" aria-labelledby="care-hub-title">
        <div className="shell">
          <div className="section-head section-head-split">
            <div>
              <p className="eyebrow">Under one roof</p>
              <h2 id="care-hub-title">A care hub for Ware and beyond.</h2>
            </div>
            <p>
              General, cosmetic, specialist, orthodontic and hygienist care — plus NHS and private
              pathways — presented as scannable cards so you can find the right conversation
              faster.
            </p>
          </div>
          <div className="care-mosaic">
            {careServices.map((service, index) => {
              const Icon = iconMap[service.id as keyof typeof iconMap] ?? IconTooth;
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className={`mosaic-card mosaic-span-${index === 0 || index === 2 ? "wide" : "std"}`}
                >
                  <span className="mosaic-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <span className="card-cta">Explore {service.title.toLowerCase()} →</span>
                </Link>
              );
            })}
          </div>
          <p className="section-cta-row">
            <Link className="button button-navy" href="/services">
              Full care hub
            </Link>
            <Link className="text-link" href="/fees">
              NHS &amp; private fees →
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-mist" id="pillars" aria-labelledby="pillars-title">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">How this practice works</p>
            <h2 id="pillars-title">Prevention, teamwork, clear plans.</h2>
          </div>
          <div className="pillar-row">
            {hubPillars.map((item) => (
              <article key={item.title} className="pillar-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="specialist-lane" aria-labelledby="specialist-lane-title">
        <div className="shell specialist-lane-inner">
          <div className="specialist-lane-copy">
            <p className="eyebrow eyebrow-on-dark">Specialist access</p>
            <h2 id="specialist-lane-title">Complex care without leaving Ware.</h2>
            <p>
              Specialist dental surgeons and dentists with special interests support implants, gum
              care, root canal treatment and oral surgery — with direct access where appropriate.
            </p>
            <Link className="button button-cream" href="/services/specialist">
              Specialist dentistry
            </Link>
          </div>
          <div className="specialist-lane-grid">
            {specialistFocus.map((item) => (
              <article key={item.title} className="lane-chip">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="story" aria-labelledby="story-title">
        <div className="shell story-split">
          <div className="story-copy">
            <p className="eyebrow">About the practice</p>
            <h2 id="story-title">A High Street family practice with depth.</h2>
            <p>
              {business.establishedClaim} Over that time the team has provided dental care to
              patients from Ware and beyond. The practice currently looks after{" "}
              {business.activePatientsClaim.replace(/^Around /, "around ").replace(/\.$/, "")}.
            </p>
            <p>
              The aim is a wide range of general, advanced and specialist dental care, with green
              measures such as digital X-ray machines and amalgam separators noted on the practice
              site.
            </p>
            <Link className="button button-teal" href="/about">
              More about Ware Dental Care
            </Link>
          </div>
          <div className="story-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/practice-open-day.jpg"
              alt="Ware Dental Care open day photograph from the official website"
              width={1200}
              height={680}
            />
          </div>
        </div>
      </section>

      <section className="section section-mist" id="find" aria-labelledby="find-title">
        <div className="shell">
          <div className="section-head section-head-split">
            <div>
              <p className="eyebrow">Visit</p>
              <h2 id="find-title">Know where to park before you arrive.</h2>
            </div>
            <p>
              <IconMap className="inline-icon" /> {business.locationNote}
            </p>
          </div>
          <div className="parking-grid">
            {parkingOptions.map((item) => (
              <article key={item.title} className="parking-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="visit-band">
            <div>
              <h3>Opening hours</h3>
              <ul className="hours-list">
                {hours.map((row) => (
                  <li key={row.day}>
                    <span>{row.day}</span>
                    <span>{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="visit-band-cta">
              <p>{business.addressDisplay}</p>
              <a className="button button-navy" href={`tel:${business.phoneTel}`}>
                Call {business.phoneDisplay}
              </a>
              <Link className="text-link" href="/find-us">
                Full find-us guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="voice" aria-labelledby="voice-title">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Patient voice</p>
            <h2 id="voice-title">What patients have written.</h2>
          </div>
          <div className="quote-grid">
            {patientQuotes.slice(0, 3).map((item) => (
              <blockquote key={item.attribution} className="quote-card">
                <Stars label="5 out of 5 stars" />
                <p>“{item.quote}”</p>
                <cite>{item.attribution}</cite>
              </blockquote>
            ))}
          </div>
          <p className="section-cta-row">
            <Link className="button button-teal" href="/testimonials">
              More stories
            </Link>
          </p>
        </div>
      </section>

      <section className="call-band" aria-labelledby="call-band-title">
        <div className="shell call-band-inner">
          <div>
            <p className="eyebrow eyebrow-on-dark">Ready when you are</p>
            <h2 id="call-band-title">Call to make an appointment.</h2>
            <p>Reception can advise on NHS availability, private options and the right clinician.</p>
          </div>
          <div className="call-band-actions">
            <a className="button button-cream" href={`tel:${business.phoneTel}`}>
              {business.phoneDisplay}
            </a>
            <a className="button button-ghost-light" href={`mailto:${business.email}`}>
              {business.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
