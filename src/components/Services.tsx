import {
  Megaphone,
  TrendingUp,
  FileText,
  Palette,
  Monitor,
  Target,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Megaphone,
    title: "Gestão de Redes Sociais",
    description:
      "Criamos e gerenciamos sua presença nas redes sociais com estratégias personalizadas para engajar seu público.",
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    description:
      "Campanhas otimizadas no Google Ads e Meta Ads para gerar leads qualificados e aumentar suas vendas.",
  },
  {
    icon: FileText,
    title: "Criação de Conteúdo",
    description:
      "Conteúdo estratégico que conta a história da sua marca e conecta com sua audiência de forma autêntica.",
  },
  {
    icon: Palette,
    title: "Branding e Identidade Visual",
    description:
      "Desenvolvemos identidades visuais marcantes que comunicam os valores e diferenciais da sua empresa.",
  },
  {
    icon: Monitor,
    title: "Sites e Landing Pages",
    description:
      "Criamos sites modernos, responsivos e otimizados para conversão, alinhados à sua estratégia de marketing.",
  },
  {
    icon: TrendingUp,
    title: "Consultoria Estratégica",
    description:
      "Planejamento e execução de estratégias de marketing digital com foco em resultados mensuráveis.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas de marketing digital para elevar sua marca ao próximo nível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
