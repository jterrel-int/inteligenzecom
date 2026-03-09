import dataViz from "@/assets/data-viz.png";
import { Factory, Mountain, Truck } from "lucide-react";

const sectors = [
  {
    icon: Factory,
    title: "Alimentos Procesados",
    desc: "Reduce consumo de agua y energía, mejora el manejo de residuos orgánicos, logra certificaciones y demuestra producción más limpia.",
  },
  {
    icon: Mountain,
    title: "Minería",
    desc: "Reporta emisiones fugitivas, uso eficiente de agua, impacto en comunidades y mitigación ambiental con datos verificables.",
  },
  {
    icon: Truck,
    title: "Transporte Pesado",
    desc: "Optimización de rutas, emisiones de combustibles, seguridad del personal y mantenimiento preventivo para reducir huella.",
  },
];

const SectorsSection = () => {
  return (
    <section id="sectores" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={dataViz}
              alt="Visualización de métricas ESG"
              className="rounded-sm w-full"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Sectores</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-10">
              Soluciones específicas para tu industria
            </h2>
            <div className="space-y-8">
              {sectors.map((s, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center shrink-0">
                    <s.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
