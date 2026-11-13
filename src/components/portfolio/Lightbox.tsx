"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { categories, isDemo, type PortfolioImage } from "@/content/portfolio";

const SWIPE_DISTANCE = 50;

/**
 * Full-screen image viewer (Phase 2: "behaves as a proper dialog: traps
 * focus, closes on Escape, returns focus to the image").
 *
 * Built on the native <dialog> opened with showModal(): focus moves in
 * and cannot leave, the page behind is inert, and Escape closes it. Page
 * scroll is locked in CSS while it is open. Previous/next work with the
 * buttons, the arrow keys and a horizontal swipe on touch screens.
 */
export function Lightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: {
  images: PortfolioImage[];
  /** Index of the open image, or null when closed. */
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const swipeStart = useRef<number | null>(null);

  const count = images.length;
  const image = index === null ? null : images[index];

  const go = useCallback(
    (step: number) => {
      if (index === null || count === 0) return;
      onIndexChange((index + step + count) % count);
    },
    [index, count, onIndexChange],
  );

  // Open and close the native dialog in step with `index`.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) {
      openerRef.current = document.activeElement as HTMLElement | null;
      dialog.showModal();
    } else if (index === null && dialog.open) {
      dialog.close();
    }
  }, [index]);

  // However it closes (Escape, button), tell the parent and return focus.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => {
      onClose();
      openerRef.current?.focus();
    };
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  const onKeyDown = (event: ReactKeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  };

  const onPointerDown = (event: ReactPointerEvent) => {
    if (event.pointerType !== "mouse") swipeStart.current = event.clientX;
  };

  const onPointerUp = (event: ReactPointerEvent) => {
    if (swipeStart.current === null) return;
    const distance = event.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(distance) > SWIPE_DISTANCE) go(distance < 0 ? 1 : -1);
  };

  const category = image ? categories.find((c) => c.id === image.category) : undefined;

  return (
    <dialog
      ref={dialogRef}
      aria-label="Image viewer"
      className="lightbox"
      onKeyDown={onKeyDown}
    >
      {image && index !== null && (
        <div className="flex h-full flex-col">
          {/* Top bar: position and close */}
          <div className="page-container flex h-(--header-height) shrink-0 items-center justify-between">
            <p className="text-caption tabular-nums" aria-live="polite">
              {index + 1} / {count}
            </p>
            <button type="button" className="lightbox-button -mr-3" onClick={() => dialogRef.current?.close()} autoFocus>
              Close
            </button>
          </div>

          {/* Photograph: swipe on touch screens */}
          <div
            className="relative flex min-h-0 flex-1 touch-pan-y items-center justify-center px-2 sm:px-8"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => (swipeStart.current = null)}
          >
            <figure key={image.id} className="lightbox-figure flex h-full max-h-full flex-col items-center justify-center">
              <Image
                src={image.src}
                alt={isDemo(image) ? `${image.alt} (Demonstration image.)` : image.alt}
                width={image.width}
                height={image.height}
                sizes="100vw"
                className="h-auto max-h-[calc(100dvh-12rem)] w-auto max-w-full object-contain"
                style={image.focus ? { objectPosition: image.focus } : undefined}
              />
            </figure>
          </div>

          {/* Caption and controls */}
          <div className="page-container shrink-0 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <p className="text-caption">{category?.label}</p>
              {isDemo(image) && (
                <p className="text-caption opacity-80">
                  Demonstration image
                  {image.source.photographer ? ` · Photo: ${image.source.photographer} / ${image.source.name}` : ""}
                </p>
              )}
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-paper/20 pt-2">
              <button type="button" className="lightbox-button -ml-3" style={{ "--nudge": "-3px" } as CSSProperties} onClick={() => go(-1)}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Previous
              </button>
              <button type="button" className="lightbox-button -mr-3" style={{ "--nudge": "3px" } as CSSProperties} onClick={() => go(1)}>
                Next
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
