import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    company: "Loja Fashion Style",
    text: "A LexConnecta transformou nossa presença digital. Em 3 meses, triplicamos nosso faturamento online!",
    rating: 5,
  },
  {
    name: "João Santos",
    company: "Construtora Horizonte",
    text: "Profissionais altamente capacitados. As campanhas de tráfego pago geraram leads qualificados desde o primeiro mês.",
    rating: 5,
  },
  {
    name: "Ana Paula Costa",
    company: "Clínica Bem Estar",
    text: "Equipe dedicada e sempre disponível. Os resultados nas redes sociais superaram todas as expectativas!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            O que nossos <span className="text-primary">clientes dizem</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            Histórias reais de transformação e crescimento com a LexConnecta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 relative">
                <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
