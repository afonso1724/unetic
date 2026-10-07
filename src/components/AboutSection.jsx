import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BookOpen, Target, Sparkles, CheckCircle2, MapPin, GraduationCap, Award, Compass, Cpu } from 'lucide-react';
import { institutionInfo } from '../data/uneticData';

export default function AboutSection() {
  const pillars = [
    {
      title: "Rigor Académico & Técnico",
      desc: "",
      icon: BookOpen,
      color: "text-[#0265dc]",
      bg: "bg-[#0265dc]/10",
      border: "border-[#0265dc]/20",
    },
    {
      title: "Impacto Comunitário",
      desc: "",
      icon: Target,
      color: "text-[#00A859]",
      bg: "bg-[#00A859]/10",
      border: "border-[#00A859]/20",
    },
    {
      title: "Princípios Éticos: Oração e Educação",
      desc: "",
      icon: Shield,
      color: "text-[#F59E0B]",
      bg: "bg-[#F59E0B]/10",
      border: "border-[#F59E0B]/20",
    },
  ];

  return (
    <section id="sobre" className="relative py-20 sm:py-28 bg-white/60 backdrop-blur-md overflow-hidden">
      {/* School Crest Watermark in Visão e Missão background */}
      <div
        className="crest-watermark right-4 lg:right-16 top-1/2 -translate-y-1/2 w-[380px] h-[380px] lg:w-[480px] lg:h-[480px] pointer-events-none"
        style={{
          opacity: 0.10,
        }}
        aria-hidden="true"
      />

      {/* Subtle ambient gradient glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0265dc]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00A859]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0265dc]/10 border border-[#0265dc]/25 text-[#0265dc] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <GraduationCap className="w-4 h-4 text-[#00A859]" />
            <span>Identidade & Propósito Institucional</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight"
          >
            Construindo a Ponte entre o Saber Teórico e a <span className="text-[#0265dc]">Realidade Angolana</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0265dc] via-[#00A859] to-[#F59E0B] mx-auto mt-4 rounded-full" />
        </div>

        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Campus & Students Showcase */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Outer Decorative Glow Border */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#0265dc]/20 via-[#00A859]/20 to-[#F59E0B]/20 rounded-3xl blur-md -z-10" />

              {/* Composition Grid */}
              <div className="grid grid-cols-2 gap-4">

                {/* Main Large Card with School Crest & Institutional Identity */}
                <div className="col-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#071633] to-[#034ea2] p-6 text-white shadow-xl border border-[#0265dc]/40">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-lg border-2 border-[#00A859]">
                      <img
                        src="/assets/logo-cnsa.png"
                        alt="Brasão do Colégio Nossa Senhora da Anunciação"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-right">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#F59E0B] bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
                        Luanda - Sul
                      </span>
                      <p className="text-xs text-blue-200 mt-1 font-serif italic">"Oração e Educação"</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Instituto Politécnico Privado Nossa Senhora da Anunciação
                  </h3>
                </div>

                {/* Photo Card 1: Students in front of school */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-md border border-[#0265dc]/30 h-56"
                >
                  <img
                    src="/assets/team/uni.jpeg"
                    alt="Finalistas CNSA"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-bold text-white tracking-wide">Comunidade Académica</span>
                  </div>
                </motion.div>

                {/* Photo Card 2: Campus facade */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-md border border-[#00A859]/30 h-56"
                >
                  <img
                    src="/assets/team/uni1.jpeg"
                    alt="Fachada do Colégio Nossa Senhora da Anunciação"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-bold text-white tracking-wide">Campus IPP CNSA</span>
                  </div>
                </motion.div>

              </div>

              {/* Floating Experience Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-5 bg-white border-2 border-[#0265dc] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0265dc] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-600/30">
                  13.ª
                </div>
                <div>
                  <div className="text-xs font-black uppercase text-slate-900 leading-tight">Ano de Formatura</div>
                  <div className="text-[11px] font-semibold text-[#00A859]">Finalistas 2026/2027</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* Right Column: Institutional Text & Project Vision */}
          <div className="lg:col-span-6 space-y-6">

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#0265dc] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block">
                A Génese do UNETIC
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 leading-snug">
                "Unigénito na Era das TIC": Uma iniciativa que transcende a sala de aula
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                O projeto <strong>UNETIC</strong> nasce no seio do <strong>Instituto Politécnico Privado Nossa Senhora da Anunciação</strong> com a missão de transformar o trabalho de fim de curso numa verdadeira incubadora de soluções práticas para Angola.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Com uma orientação pedagógica de excelência institucional, os alunos finalistas da 13.ª Classe deixam de desenvolver projetos meramente teóricos para enfrentar <em>in loco</em> as problemáticas reais de Luanda Sul — desde as águas pluviais que condicionam a mobilidade até à transição dos pequenos operadores económicos para o sistema tributário digital da AGT.
              </p>
            </motion.div>

            {/* Three Institutional Pillars */}
            <div className="space-y-3.5 pt-2">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/90 hover:border-[#0265dc]/50 hover:bg-white transition-all duration-200 flex gap-4 items-start shadow-sm"
                  >
                    <div className={`p-2.5 rounded-xl ${pillar.bg} ${pillar.color} border ${pillar.border} flex-shrink-0 mt-0.5`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-display">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Citation Tag */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500 border-t border-slate-200">
              <MapPin className="w-4 h-4 text-[#00A859] flex-shrink-0" />
              <span>Campus Institucional: Condomínio da Polícia, Luanda Sul.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
