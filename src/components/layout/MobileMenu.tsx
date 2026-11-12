"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { enquireHref, mainNav, site } from "@/content/site";
import { instagramHref } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Wordmark } from "./Wordmark";

const DIALOG_ID = "site-menu";

/**
 * Full-screen mobile menu (Phase 2: a "Menu" word, not just an icon;
 * large links; the WhatsApp action at the bottom, within thumb reach).
 *
 * Built on the native <dialog> element opened with showModal(), which
 * gives us for free: focus moves into the menu, the rest of the page is
 * inert (focus cannot escape), Escape closes it, and it sits above
 * everything. We return focus to the Menu button on close. Page scroll
 * is locked in CSS while it is open.
 */
export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const instagram = instagramHref(site.instagramHandle);

  const openMenu = () => {
    dialogRef.current?.showModal();
    setOpen(true);
  };

  const closeMenu = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog?.open) dialog.close();
  }, []);

  // Keep state in sync however the dialog closes (Escape, link, button).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      setOpen(false);
      buttonRef.current?.focus();
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  // Close if the route changes (for example browser back) or the screen
  // grows to the desktop layout while the menu is open.
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    const desktop = window.matchMedia("(width >= 48rem)");
    const onChange = () => desktop.matches && closeMenu();
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, [closeMenu]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={openMenu}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={DIALOG_ID}
        className="text-label -mr-3 inline-flex min-h-11 min-w-11 items-center justify-center px-3 text-ink"
      >
        Menu
      </button>

      <dialog
        ref={dialogRef}
        id={DIALOG_ID}
        aria-label="Menu"
        className="menu-dialog"
      >
        <div className="page-container flex min-h-full flex-col">
          <div className="flex h-(--header-height) shrink-0 items-center justify-between">
            <Wordmark onNavigate={closeMenu} />
            <button
              type="button"
              onClick={closeMenu}
              className="text-label -mr-3 inline-flex min-h-11 min-w-11 items-center justify-center px-3 text-ink"
            >
              Close
            </button>
          </div>

          {/* Links sit low on the screen, where thumbs reach easily. */}
          <nav aria-label="Main" className="mt-auto pt-12">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item, i) => {
                const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href} className="menu-item" style={{ "--i": i } as CSSProperties}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={current ? "page" : undefined}
                      className="text-h1 flex min-h-14 items-center gap-4 py-1 text-ink aria-[current=page]:underline aria-[current=page]:decoration-1 aria-[current=page]:underline-offset-8"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            className="menu-item mt-10 flex flex-col gap-6 border-t border-rule pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
            style={{ "--i": mainNav.length } as CSSProperties}
          >
            <Link href={enquireHref} onClick={closeMenu} className="btn-primary w-full">
              <WhatsAppIcon />
              Enquire on WhatsApp
            </Link>
            <p className="text-caption text-muted">
              {instagram ? (
                <a href={instagram} className="link-text" rel="noopener noreferrer" target="_blank">
                  Instagram
                </a>
              ) : (
                <span className="placeholder-text">[TBD: Instagram handle]</span>
              )}
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}
