import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="shell narrow">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy notice for this concept site</h1>
        <p>
          This is a Local Sites Lab concept website created by William Green to demonstrate how Ware
          Dental Care might present public information more clearly. It is not the live or official
          practice website.
        </p>
        <p>
          This concept does not collect enquiries into a live practice inbox and does not use
          analytics cookies beyond what your browser and host may provide. Do not submit personal
          medical information here.
        </p>
        <p>
          For the practice’s own privacy, cookie, data protection and complaints policies, visit the
          official Ware Dental Care website. For Local Sites Lab, see{" "}
          <a href="https://localsiteslab.com">localsiteslab.com</a>.
        </p>
        <p>
          <Link className="text-link" href="/">
            ← Homepage
          </Link>
        </p>
      </div>
    </section>
  );
}
