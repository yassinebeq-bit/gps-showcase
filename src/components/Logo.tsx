import gpsLogo from "@/assets/gps-logo-local.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={gpsLogo}
      alt="Global Performance Services"
      width="2048"
      height="672"
      className={`h-auto w-full max-w-[10.5rem] object-contain sm:max-w-[15rem] ${className}`}
    />
  );
}
