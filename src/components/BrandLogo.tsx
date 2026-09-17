import type { Marque } from "@/data/catalogue";
import zebraLogo from "@/assets/logo-zebra.svg";
import averyDennisonLogo from "@/assets/logo-avery-dennison.svg";
import postekLogo from "@/assets/logo-postek.svg";
import cabLogo from "@/assets/logo-cab.svg";
import satoLogo from "@/assets/logo-sato.svg";
import tscLogo from "@/assets/logo-tsc.svg";

export type BrandName = Marque | "SATO" | "TSC";

const logos: Record<BrandName, string> = {
  Zebra: zebraLogo,
  "Avery Dennison": averyDennisonLogo,
  POSTEK: postekLogo,
  CAB: cabLogo,
  SATO: satoLogo,
  TSC: tscLogo,
};

type BrandLogoProps = {
  marque: BrandName;
  className?: string;
};

export function BrandLogo({ marque, className = "h-9 w-auto" }: BrandLogoProps) {
  return <img src={logos[marque]} alt={`Logo ${marque}`} className={className} loading="lazy" />;
}
