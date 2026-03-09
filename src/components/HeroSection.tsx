const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8 opacity-0 animate-fade-in-up">
            Reportes de Sostenibilidad Inteligentes para Alimentos, Minería y Transporte Pesado
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Cumple estándares internacionales, mejora tu desempeño ESG y demuestra tu responsabilidad corporativa de forma clara y eficiente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#contacto"
              className="bg-primary text-primary-foreground px-8 py-3 text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
            >
              Solicita tu demo gratuita
            </a>
            <a
              href="#proceso"
              className="text-sm font-medium text-foreground border border-border px-8 py-3 rounded-sm hover:bg-secondary transition-colors"
            >
              Conoce el proceso
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Automatización de datos ESG
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Informes por sector
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Transparencia regulatoria
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
