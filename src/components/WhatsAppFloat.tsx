import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <Button
        variant="whatsapp"
        size="lg"
        className="rounded-full w-16 h-16 p-0 shadow-2xl hover:shadow-3xl"
        asChild
      >
        <a
          href="https://wa.me/61981779025"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale pelo WhatsApp"
        >
          <MessageCircle className="h-8 w-8" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;
