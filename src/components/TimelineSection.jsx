import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle2, ChevronRight, Sparkles, MapPin, Bell, Radio, Info } from 'lucide-react';
import { timelineTrimesters } from '../data/uneticData';

export default function TimelineSection() {
  const [selectedTrimester, setSelectedTrimester] = useState(0);

  return (
    <section id="cronograma" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0265dc]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00A859]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0265dc]/10 border border-[#0265dc]/25 text-[#0265dc] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Calendar className="w-3.5 h-3.5 text-[#00A859]" />
            <span>Cronograma Executivo & Fórum</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight"
          >
            Calendário Trimestral & <span className="text-[#0265dc]">Fórum UNETIC</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal"
          >
            Acompanhe o percurso dos estudantes finalistas ao longo dos três trimestres lectivos e a preparação para o Grande Fórum Técnico-Científico.
          </motion.p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#0265dc] via-[#00A859] to-[#F59E0B] mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-Column Grid: Left: 3 Trimesters Timeline | Right: Forum Notice */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Vertical Trimestral Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#0265dc]" />
                <span>Os 3 Trimestres Lectivos</span>
              </h3>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                13.ª Classe 2026/2027
              </span>
            </div>

            {/* Vertical Flow with Interactive Highlights */}
            <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#0265dc] before:via-[#00A859] before:to-[#F59E0B]">
              {timelineTrimesters.map((tri, idx) => {
                const isCurrentSelected = selectedTrimester === idx;
                return (
                  <motion.div
                    key={tri.trimester}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    onClick={() => setSelectedTrimester(idx)}
                    className="relative group cursor-pointer"
                  >
                    {/* Timeline Node Point */}
                    <div
                      className={`absolute -left-6 sm:-left-8 top-3.5 w-6 h-6 rounded-full border-4 border-white shadow-md flex items-center justify-center transition-all ${isCurrentSelected ? 'scale-125' : 'group-hover:scale-110'
                        }`}
                      style={{ backgroundColor: tri.color }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>

                    {/* Card Container */}
                    <div
                      className={`p-5 sm:p-6 rounded-2xl border-2 transition-all duration-300 ${isCurrentSelected
                          ? 'bg-white shadow-lg border-[#0265dc]'
                          : 'bg-[#FAFBFD] hover:bg-white border-slate-200/90 hover:border-slate-300'
                        }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {tri.period}
                        </span>
                        <span
                          className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border"
                          style={{
                            backgroundColor: `${tri.color}15`,
                            color: tri.color,
                            borderColor: `${tri.color}30`,
                          }}
                        >
                          {tri.badge}
                        </span>
                      </div>

                      <h4 className="text-lg font-display font-black text-slate-900 group-hover:text-[#0265dc] transition-colors">
                        {tri.trimester}
                      </h4>
                      <p className="text-xs font-semibold text-slate-600 mt-0.5 mb-3">
                        {tri.focus}
                      </p>

                      {/* Activities List */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        {tri.activities.map((act, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-600 font-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859] flex-shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: UNETIC Forum Announcement (Removed agenda, replaced with requirement 5) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 flex items-center gap-2.5">
                <Clock className="w-6 h-6 text-[#0265dc]" />
                <span>O Fórum UNETIC</span>
              </h3>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0265dc] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                13.ª Classe 2026/2027
              </span>
            </div>

            {/* Forum Notice Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-[#060D1A] via-[#071633] to-[#040914] text-white p-7 sm:p-10 border-2 border-[#0265dc]/50 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#0265dc]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#00A859]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Status Header Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <span>Em Definição Pedagógica</span>
                </div>
              </div>

              {/* Main Announcement Box */}
              <div className="py-10 text-center flex flex-col items-center">
                {/* Animated Clock / Calendar Beacon */}
                <motion.div
                  animate={{ scale: [1, 1.06, 1], rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#0265dc] to-[#00A859] p-0.5 shadow-xl shadow-blue-900/40 mb-6 flex items-center justify-center"
                >
                  <div className="w-full h-full bg-[#071633] rounded-[22px] flex items-center justify-center">
                    <Calendar className="w-9 h-9 text-[#38bdf8]" />
                  </div>
                </motion.div>

                {/* EXACT REQUIRED TEXT */}
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-white tracking-tight max-w-md">
                  Brevemente a data e agenda do fórum aqui
                </h4>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed font-sans">
                  O cronograma detalhado das defesas orais, conferências magistrais e exposição pública dos protótipos será publicado oficialmente após homologação pela Direção Pedagógica.
                </p>

                {/* Info Pills */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md text-left">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#38bdf8]">
                      <Radio className="w-3.5 h-3.5 text-[#00A859] animate-pulse" />
                      <span>Transmissão & Defesas</span>
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      Apresentação presencial perante comissão avaliadora institucional.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#F59E0B]">
                      <Info className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>Notificação aos Finalistas</span>
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      Aviso prévio afixado nas vitrines escolares e nesta plataforma.
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
                <span className="text-emerald-400 font-semibold">Instituto Politécnico Privado CNSA</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
