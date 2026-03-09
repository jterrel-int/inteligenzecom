const testimonials = [
  {
    quote: "Hemos logrado disminuir un 25% en el consumo energético en nuestra planta de procesamiento de alimentos, cumpliendo con estándares nacionales e internacionales.",
    author: "Gerente de Sostenibilidad",
    company: "Empresa Alimentos",
  },
  {
    quote: "Con los reportes generados pudimos mejorar nuestra relación con la comunidad vecina, y estructurar un plan ambiental que cumplió con los permisos exigidos.",
    author: "Director de Operaciones",
    company: "Operaciones Mineras",
  },
  {
    quote: "Incorporamos seguimiento de flota y ahora reportamos nuestras emisiones de transporte ante nuestros clientes como parte de nuestra oferta de valor.",
    author: "Director de Operaciones",
    company: "Transportes Pesados",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">Testimonios</p>
        <h2 className="text-3xl md:text-4xl leading-tight mb-16 text-center max-w-2xl mx-auto">
          Empresas que ya transforman sus reportes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="border-t border-border pt-8">
              <p className="text-foreground leading-relaxed mb-6 text-sm italic">
                "{t.quote}"
              </p>
              <p className="text-xs font-medium text-foreground">{t.author}</p>
              <p className="text-xs text-muted-foreground">{t.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
