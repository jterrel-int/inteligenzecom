import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8"
          >
            Reportes de Sostenibilidad Inteligentes para Alimentos, Minería y Transporte Pesado
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10"
          >
            Cumple estándares internacionales, mejora tu desempeño ESG y demuestra tu responsabilidad corporativa de forma clara y eficiente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
