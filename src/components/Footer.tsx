import { MessageCircle, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Lex<span className="text-primary">Connecta</span>
            </h3>
            <p className="text-secondary-foreground/80">
              Assessoria de Marketing Digital
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5561981779025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>(61) 9 8177-9025</span>
              </a>
              <a
                href="https://www.instagram.com/lexconnecta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@lexconnecta</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <button
                onClick={() => document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/80 text-sm">
            © {currentYear} LexConnecta - Assessoria de Marketing. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
