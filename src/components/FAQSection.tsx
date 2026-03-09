import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuáles estándares de sostenibilidad se usan?",
    a: "Trabajamos con ESG, GRI, ISO 14001, SASB, y los más recientes IFRS S1 y S2 del ISSB. Nuestras plantillas ya están estructuradas conforme a estos estándares.",
  },
  {
    q: "¿Qué tan segura es la plataforma y los datos que ingreso?",
    a: "Empleamos cifrado de extremo a extremo, infraestructura certificada y trazabilidad completa de accesos. Tus datos están protegidos bajo los más altos estándares de seguridad.",
  },
  {
    q: "¿Puedo personalizar el reporte para mis regulaciones locales?",
    a: "Sí. Cada reporte se adapta a los requisitos específicos de tu industria, país y cliente. Puedes agregar secciones, métricas y formatos según lo necesites.",
  },
  {
    q: "¿Necesito sensores o hardware especial?",
    a: "No necesariamente. Podemos integrarnos con tus sistemas existentes, bases de datos, hojas de cálculo y, cuando aplique, con sensores IoT ya instalados.",
  },
  {
    q: "¿Qué tan rápido puedo empezar a ver resultados?",
    a: "En la mayoría de los casos, el primer reporte puede generarse en días, no semanas. El tiempo de implementación depende de la complejidad de tus fuentes de datos.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">Preguntas frecuentes</p>
        <h2 className="text-3xl md:text-4xl leading-tight mb-12 text-center">
          ¿Tienes dudas?
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-sm font-body font-medium text-foreground text-left hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
