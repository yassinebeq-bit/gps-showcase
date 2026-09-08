export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand shadow-brand">
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
          <path
            d="M16 3.5c4.6 0 8.3 3.6 8.3 8.1 0 5.8-6.4 12.9-7.7 14.3a.8.8 0 0 1-1.2 0C14.1 24.5 7.7 17.4 7.7 11.6 7.7 7.1 11.4 3.5 16 3.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary-foreground"
          />
          <rect x="12.6" y="8.8" width="1.5" height="6" className="fill-primary-foreground" />
          <rect x="15.3" y="8.8" width="1" height="6" className="fill-primary-foreground" />
          <rect x="17.6" y="8.8" width="1.8" height="6" className="fill-primary-foreground" />
        </svg>
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block font-display text-lg font-extrabold tracking-[0.18em] text-foreground">
          GPS
        </span>
        <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Global Performance Services
        </span>
      </span>
    </span>
  );
}
