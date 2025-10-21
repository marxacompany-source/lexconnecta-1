import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-marketing.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Marketing Digital Estratégico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Conectamos sua marca com{" "}
            <span className="text-primary">resultados reais</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 animate-fade-in">
            Assessoria estratégica em marketing para impulsionar sua presença digital
            e transformar seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              variant="whatsapp"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              asChild
            >
              <a
                href="https://wa.me/5561981779025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-6 w-6" />
                Fale com um Especialista
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground"
              onClick={() => {
                document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conheça nossos serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
