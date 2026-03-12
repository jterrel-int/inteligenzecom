import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: 1, title: "Integración de datos", desc: "Recolectamos datos de tus operaciones: producción, consumo energético, emisiones, insumos, seguridad. Te ayudamos a conectarte con sensores, bases de datos y sistemas internos." },
  { id: 2, title: "Análisis y validación", desc: "Limpieza de datos, verificaciones automáticas, adaptación con estándares del sector (GRI, SASB, ISO 14001, IFRS S1/S2)." },
  { id: 3, title: "Reportes personalizados", desc: "Dashboards interactivos e informes exportables (PDF / Excel) adaptados a los requisitos específicos de tu industria, país o cliente." },
  { id: 4, title: "Monitoreo continuo", desc: "Seguimiento periódico, alertas si hay desviaciones, recomendaciones de acción para reducir huella, optimizar recursos y mejorar impactos sociales." },
];

const ProcessSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="proceso" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">Nuestro proceso</p>
          <h2 className="text-3xl md:text-4xl leading-tight mb-16 text-center max-w-2xl mx-auto">
            De datos dispersos a reportes con certeza
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative max-w-3xl mx-auto mb-12">
            <div className="h-px bg-border absolute top-3 left-0 right-0" />
            <div className="flex justify-between relative">
              {steps.map((s, i) => (
                <button key={s.id} onClick={() => setActive(i)} className="flex flex-col items-center group">
                  <motion.div
                    animate={{
                      scale: i === active ? 1.15 : 1,
                      backgroundColor: i === active ? "hsl(var(--primary))" : i < active ? "hsl(var(--primary) / 0.3)" : "hsl(var(--background))",
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-6 h-6 rounded-full border-2 ${
                      i === active ? "border-primary" : i < active ? "border-primary/30" : "border-border"
                    }`}
                  />
                  <span className={`text-xs mt-3 font-medium transition-colors hidden sm:block ${i === active ? "text-foreground" : "text-muted-foreground"}`}>
                    {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="max-w-xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-6xl font-heading text-primary/20 block mb-4">0{steps[active].id}</span>
              <h3 className="text-2xl mb-4">{steps[active].title}</h3>
              <p className="text-muted-foreground leading-relaxed">{steps[active].desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
