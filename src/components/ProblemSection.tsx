const ProblemSection = () => {
  const problems = [
    {
      title: "Datos dispersos",
      desc: "Emisiones, residuos, consumo de energía y seguridad en hojas de cálculo o sistemas desconectados.",
    },
    {
      title: "Regulaciones exigentes",
      desc: "Cumplir normativas cada vez más estrictas sin informes mantenidos ni confiables.",
    },
    {
      title: "Demandas de stakeholders",
      desc: "Consumidores, inversionistas y reguladores exigen transparencia y sostenibilidad verificable.",
    },
    {
      title: "Costos ocultos",
      desc: "Ineficiencias ambientales, sociales y riesgos de reputación que impactan el resultado final.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-20">
          La innovación no puede depender de procesos obsoletos
        </p>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-4xl mx-auto">
          {problems.map((p, i) => (
            <div key={i} className="border-t border-border pt-6">
              <span className="text-xs text-primary font-medium tracking-wider uppercase mb-3 block">
                0{i + 1}
              </span>
              <h3 className="text-xl mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
