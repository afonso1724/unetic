import React from 'react';
import { motion } from 'framer-motion';
import { Search, LineChart, PenTool, Code, CheckSquare, Megaphone, ArrowRight, ShieldCheck, Flag, Sparkles } from 'lucide-react';
import { methodologySteps } from '../data/uneticData';

export default function MethodologySection() {
  const getStepIcon = (index) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5" />;
      case 1:
        return <LineChart className="w-5 h-5" />;
      case 2:
        return <PenTool className="w-5 h-5" />;
      case 3:
        return <Code className="w-5 h-5" />;
      case 4:
        return <CheckSquare className="w-5 h-5" />;
      case 5:
        return <Megaphone className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="metodologia" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0265dc]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00A859]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0265dc]/10 border border-[#0265dc]/25 text-[#0265dc] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <span>Engenharia Pedagógica Rigorosa</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight"
          >
            Metodologia Científica: O <span className="text-[#0265dc]">Ciclo em 6 Etapas</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal"
          >
            Concebida pelo Instituto Politécnico Privado Nossa Senhora da Anunciação, esta arquitetura processual garante a transição rigorosa entre o diagnóstico do problema urbano até à validação e defesa pública.
          </motion.p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#0265dc] via-[#00A859] to-[#F59E0B] mx-auto mt-4 rounded-full" />
        </div>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {methodologySteps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative bg-[#FCFDFE] hover:bg-white rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-sm hover:shadow-xl border-2 border-slate-200/90 hover:border-[#0265dc] flex flex-col justify-between"
            >
              {/* Top Row: Step Badge & Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl font-display font-black text-[#0265dc] tracking-tighter">
                      {item.step}
                    </span>
                    <span className="h-4 w-[1px] bg-slate-300" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00A859]">
                      Fase {idx + 1}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#38bdf8] border border-[#0265dc]/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0265dc] group-hover:text-white transition-all duration-300 shadow-sm">
                    {getStepIcon(idx)}
                  </div>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-lg font-display font-black text-slate-900 group-hover:text-[#0265dc] transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-slate-400 block mt-0.5">
                  {item.subtitle}
                </span>

                {/* Step Description */}
                <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Milestone Box at bottom */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A859]" />
                  <span className="font-semibold text-slate-700">Entregável:</span>
                </div>
                <span className="text-[11px] font-bold text-[#0265dc] text-right truncate max-w-[170px]" title={item.milestone}>
                  {item.milestone}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Continuity Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 max-w-4xl mx-auto rounded-3xl bg-slate-900 p-6 sm:p-8 text-white border-2 border-[#0265dc]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
              <ShieldCheck className="w-4 h-4 text-[#00A859]" />
              <span>Conformidade com os Padrões Nacionais de Ensino Técnico</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold font-display text-white">
              Da Sala de Aula à Banca com Especialistas e Docentes de Angola
            </h4>
            <p className="text-xs text-slate-300 font-sans">
              O ciclo UNETIC assegura que os alunos finalistas da 13.ª Classe desenvolvam soluções com aplicabilidade técnica tangível.
            </p>
          </div>

          <a
            href="#cronograma"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-[#0265dc] to-[#00A859] hover:from-[#0052cc] hover:to-[#059669] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all"
          >
            <span>Ver Cronograma</span>
            <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
