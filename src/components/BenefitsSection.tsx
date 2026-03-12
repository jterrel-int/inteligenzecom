import flowDiagram from "@/assets/flow-diagram.png";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

const benefits = [
  { label: "Medición ambiental clara", food: "Agua, energía, residuos orgánicos, emisiones de procesos", mining: "Emisiones fugitivas, uso de agua, relaves, biodiversidad", transport: "Consumo de combustible, emisiones CO₂, rutas optimizadas" },
  { label: "Cumplimiento normativo", food: "Regulaciones de inocuidad, calidad y emisiones", mining: "Estándares de seguridad e impacto ambiental", transport: "Normativas de emisiones y condiciones laborales" },
  { label: "Reporte social y gobernanza", food: "Condiciones laborales, salud ocupacional, trazabilidad", mining: "Seguridad, ética y bienestar del personal", transport: "Comunidades, derechos humanos, transparencia" },
  { label: "Decisiones basadas en datos", food: "Puntos de mejora en producción más limpia", mining: "Uso eficiente de recursos e impacto ambiental", transport: "Optimización de flotas y mantenimiento preventivo" },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Beneficios</p>
              <h2 className="text-3xl md:text-4xl leading-tight mb-6">Qué ofrecemos a cada sector</h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Nuestra plataforma se adapta a las necesidades específicas de tu industria, entregando métricas relevantes y reportes accionables.
              </p>
              <img src={flowDiagram} alt="Diagrama de flujo de integración de datos" className="rounded-sm w-full" />
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {benefits.map((b, i) => (
              <AnimatedItem key={i} delay={i * 0.1}>
                <div className="border-t border-border pt-6">
                  <h3 className="text-lg mb-4">{b.label}</h3>
                  <div className="grid gap-3">
                    <div className="flex gap-3 items-start">
                      <span className="text-xs font-medium text-primary mt-0.5 shrink-0 w-20">Alimentos</span>
                      <span className="text-sm text-muted-foreground">{b.food}</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-xs font-medium text-primary mt-0.5 shrink-0 w-20">Minería</span>
                      <span className="text-sm text-muted-foreground">{b.mining}</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-xs font-medium text-primary mt-0.5 shrink-0 w-20">Transporte</span>
                      <span className="text-sm text-muted-foreground">{b.transport}</span>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
