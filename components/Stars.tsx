export function Stars({ label = "5 out of 5 stars" }: { label?: string }) {
  return (
    <span className="stars" aria-label={label} role="img">
      ★★★★★
    </span>
  );
}
