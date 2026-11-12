"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/content/site";

/** Text links for tablet and desktop. The current page is underlined. */
export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden md:block">
      <ul className="flex items-center gap-8 lg:gap-10">
        {mainNav.map((item) => {
          const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current ? "page" : undefined}
                className="nav-link text-label"
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
