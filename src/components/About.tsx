import { CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-illustration.jpg";

const highlights = [
  "Estratégias personalizadas para cada negócio",
  "Foco em resultados mensuráveis e ROI",
  "Equipe especializada em marketing digital",
  "Acompanhamento contínuo e relatórios transparentes",
];

const About = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Estratégia de Marketing Digital"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-primary">LexConnecta</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos uma assessoria de marketing especializada em conectar marcas com seu
              público-alvo através de estratégias digitais eficientes e resultados
              comprovados.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa missão é impulsionar o crescimento do seu negócio por meio de
              soluções criativas e personalizadas, sempre com foco em gerar valor real
              para nossos clientes.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
