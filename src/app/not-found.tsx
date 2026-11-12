import Link from "next/link";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

export default function NotFound() {
  return (
    <section className="page-container section-space">
      <div className="page-grid items-end gap-y-10">
        <div className="col-span-4 sm:col-span-5 lg:col-span-6">
          <p className="text-caption enter-rise text-muted">Page not found</p>
          <h1 className="text-h1 enter-text mt-4">This page isn&apos;t here.</h1>
          <p className="text-body enter-rise mt-6 flex flex-wrap gap-x-6">
            <Link href="/" className="nav-link">
              Back to Home
            </Link>
            <Link href="/portfolio" className="nav-link">
              See the portfolio
            </Link>
          </p>
        </div>
        <div className="col-span-3 sm:col-span-3 lg:col-span-4 lg:col-start-9">
          <PhotoPlaceholder ratio="4:5" label="one portfolio image" reveal="enter" />
        </div>
      </div>
    </section>
  );
}
