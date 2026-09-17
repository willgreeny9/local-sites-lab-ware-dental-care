"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { business, nav } from "@/lib/business";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Ware Dental Care"
            width={168}
            height={128}
            className="brand-logo"
          />
          <span className="brand-text">
            <strong>Ware Dental Care</strong>
            <span>3 West Street · SG12 9EE</span>
          </span>
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="nav-toggle-label">{open ? "Close" : "Menu"}</span>
        </button>
        <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a className="button button-teal nav-cta" href={`tel:${business.phoneTel}`}>
            Call {business.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
