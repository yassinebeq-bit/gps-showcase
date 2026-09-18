import type { Marque } from "@/data/catalogue";
import zebraLogo from "@/assets/logo-zebra-official.svg";
import averyDennisonLogo from "@/assets/logo-avery-dennison-display.png";
import postekLogo from "@/assets/logo-postek.svg";
import cabLogo from "@/assets/logo-cab.svg";
import satoLogo from "@/assets/logo-sato.svg";
import tscLogo from "@/assets/logo-tsc-official.svg";
import opticonLogo from "@/assets/logo-opticon-official.svg";

export type BrandName = Marque | "SATO" | "TSC" | "OPTICON";

const logos: Record<BrandName, string> = {
  Zebra: zebraLogo,
  "Avery Dennison": averyDennisonLogo,
  POSTEK: postekLogo,
  CAB: cabLogo,
  SATO: satoLogo,
  TSC: tscLogo,
  OPTICON: opticonLogo,
};

type BrandLogoProps = {
  marque: BrandName;
  className?: string;
  showcase?: boolean;
};

const showcaseSizes: Record<BrandName, string> = {
  "Avery Dennison": "max-h-12 max-w-[138px]",
  Zebra: "max-h-12 max-w-[132px]",
  POSTEK: "max-h-11 max-w-[132px]",
  CAB: "max-h-12 max-w-[138px]",
  SATO: "max-h-12 max-w-[138px]",
  TSC: "max-h-10 max-w-[122px]",
  OPTICON: "max-h-10 max-w-[128px]",
};

export function BrandLogo({ marque, className = "h-9 w-auto", showcase = false }: BrandLogoProps) {
  return (
    <img
      src={logos[marque]}
      alt={`Logo ${marque}`}
      className={`${className} ${showcase ? showcaseSizes[marque] : ""}`}
      loading="lazy"
    />
  );
}
