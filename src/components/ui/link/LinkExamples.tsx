import { Link } from "./Link";

export function LinkExamples() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/contact" variant="primary">
        Get Started →
      </Link>

      <Link href="/services" variant="secondary">
        View Services
      </Link>

      <Link href="/contact" variant="button">
        Talk to an Expert →
      </Link>
    </div>
  );
}
