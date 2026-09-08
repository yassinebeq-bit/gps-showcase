import gpsLogo from "@/assets/gps-logo-officiel.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={gpsLogo.url}
      alt="Global Performance Services"
      width="2048"
      height="715"
      className={`h-auto w-full max-w-[13rem] object-contain sm:max-w-[16rem] ${className}`}
    />
  );
}
