import type { Marque } from "@/data/catalogue";
import zebraLogo from "@/assets/logo-zebra-official.svg";
import averyDennisonLogo from "@/assets/logo-avery-dennison-official.png";
import cabLogo from "@/assets/logo-cab-official.png";
import satoLogo from "@/assets/logo-sato-official.png";
import tscLogo from "@/assets/logo-tsc-official.svg";

export type BrandName = Marque | "SATO" | "TSC";

const logos: Record<BrandName, string> = {
  Zebra: zebraLogo,
  "Avery Dennison": averyDennisonLogo,
  POSTEK: "https://download.postek.com.cn/MainPage/logo.webp",
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
