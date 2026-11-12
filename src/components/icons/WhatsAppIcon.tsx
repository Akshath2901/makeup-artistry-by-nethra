/**
 * Simplified speech-bubble mark used next to the "WhatsApp" label.
 * Replace with the official glyph from WhatsApp's brand resources
 * before launch. Decorative: the visible label carries the meaning.
 */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M12 3.25a8.75 8.75 0 0 0-7.55 13.17L3.25 20.75l4.45-1.16A8.75 8.75 0 1 0 12 3.25Z" />
      <path d="M9.1 8.4c.2-.45.42-.46.62-.47h.53c.17 0 .43.06.66.55.22.49.76 1.7.83 1.82.07.12.11.27.02.43-.09.17-.13.27-.26.42-.13.15-.27.33-.39.45-.13.12-.26.26-.11.51.15.25.66 1.08 1.41 1.75.97.86 1.79 1.13 2.04 1.26.25.12.4.1.54-.06.15-.17.62-.72.79-.97.16-.25.33-.21.55-.12.23.08 1.43.67 1.68.8.24.12.4.18.46.28.06.1.06.6-.14 1.17-.2.58-1.18 1.13-1.63 1.17-.44.04-.85.2-2.86-.6-2.42-.95-3.94-3.42-4.06-3.58-.12-.16-.97-1.29-.97-2.46 0-1.17.61-1.75.83-1.99Z" />
    </svg>
  );
}
