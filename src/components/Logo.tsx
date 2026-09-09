import gpsLogo from "@/assets/gps-logo-skyblue.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={gpsLogo.url}
      alt="Global Performance Services"
      width="1480"
      height="463"
      className={`h-auto w-full max-w-[13rem] object-contain sm:max-w-[16rem] ${className}`}
    />
  );
}
