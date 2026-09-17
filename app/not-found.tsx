import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="shell narrow">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>That page is not part of this concept site.</p>
        <p>
          <Link className="button button-teal" href="/">
            Back to homepage
          </Link>
        </p>
      </div>
    </section>
  );
}
