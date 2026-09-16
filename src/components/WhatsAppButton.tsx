import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/data/catalogue";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter GPS sur WhatsApp"
      title="Contacter GPS sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
