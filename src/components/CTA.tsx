import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Pronto para acelerar seus resultados?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-10 animate-fade-in">
            Entre em contato agora e descubra como a LexConnecta pode transformar sua
            presença digital e impulsionar o crescimento do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 h-auto bg-white text-foreground hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href="https://wa.me/61981779025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-6 w-6" />
                Fale pelo WhatsApp
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <p className="mt-8 text-primary-foreground/80 text-sm">
            Resposta rápida garantida • Atendimento personalizado
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
