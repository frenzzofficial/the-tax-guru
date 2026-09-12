import { Link } from "../link/Link";

export function LinkExamples() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Link href="/contact" variant="primary">
        Get Started
      </Link>

      <Link href="/contact" variant="accent">
        Get a Free Consultation
      </Link>

      <Link href="/services" variant="secondary">
        View Services
      </Link>

      <Link href="/services" variant="nav">
        Services
      </Link>

      <Link href="/services" variant="text">
        View All Services
      </Link>
    </div>
  );
}
