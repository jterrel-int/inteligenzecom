import { FileText, Shield, BarChart3, Download, Clock, HeadphonesIcon } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

const features = [
  { icon: FileText, title: "Plantillas sectoriales", desc: "Ya configuradas para Alimentos, Minería y Transporte Pesado." },
  { icon: Shield, title: "Estándares internacionales", desc: "Cumplimiento con ESG, GRI, ISO, IFRS S1/S2." },
  { icon: BarChart3, title: "KPIs visuales", desc: "Interfaz amigable con métricas ambientales, sociales y de gobernanza." },
  { icon: Download, title: "Exportación automática", desc: "Informes listos para auditorías, inversionistas y certificaciones." },
  { icon: Clock, title: "Trazabilidad histórica", desc: "Seguridad de datos y seguimiento de indicadores a lo largo del tiempo." },
  { icon: HeadphonesIcon, title: "Soporte especializado", desc: "Consultoría para interpretación y acción sobre los reportes." },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">Características</p>
          <h2 className="text-3xl md:text-4xl leading-tight mb-16 text-center max-w-2xl mx-auto">
            Todo lo que necesitas, integrado
          </h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <AnimatedItem key={i} delay={i * 0.08}>
              <div className="flex gap-4">
                <f.icon size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
