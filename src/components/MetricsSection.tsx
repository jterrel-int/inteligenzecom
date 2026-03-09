const metrics = [
  { value: "120%", label: "Mejora en indicadores ESG lograda por líderes del sector" },
  { value: "17%", label: "Reducción de emisiones de distribución en empresas referentes" },
  { value: "89%", label: "De envases reciclables alcanzado como benchmark sectorial" },
  { value: "70%", label: "De proveedores críticos evaluados bajo criterios ASG" },
];

const MetricsSection = () => {
  return (
    <section className="py-24 md:py-32 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">Resultados reales</p>
        <h2 className="text-3xl md:text-4xl leading-tight mb-16 text-center max-w-2xl mx-auto">
          Benchmarks que importan
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <span className="text-4xl md:text-5xl font-heading text-primary block mb-3">
                {m.value}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
