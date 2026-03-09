import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Inteligenze" className="h-6" />
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Inteligenze. Todos los derechos reservados.
          </span>
        </div>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
          <a href="#" className="hover:text-foreground transition-colors">Términos</a>
          <a href="mailto:contacto@inteligenze.com" className="hover:text-foreground transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
