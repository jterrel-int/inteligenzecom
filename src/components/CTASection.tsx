import { AnimatedSection } from "./AnimatedSection";

const CTASection = () => {
  return (
    <section id="contacto" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl leading-tight mb-6">Empieza hoy a reportar sostenibilidad con certeza</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Transforma datos en acciones, demuestra tu compromiso real. Agenda una demo personalizada para tu sector.
          </p>
          <a
            href="mailto:contacto@inteligenze.com"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
          >
            Solicita una demo
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
