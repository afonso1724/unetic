import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Award, CheckCircle2, ShieldCheck, HelpCircle, FileCheck, Sparkles, ChevronRight } from 'lucide-react';
import { evaluationCriteria } from '../data/uneticData';

export default function EvaluationAndPartnersSection() {
  const [selectedCriterion, setSelectedCriterion] = useState(0);

  return (
    <section id="avaliacao" className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background accents in UNETIC colors */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0265dc]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00A859]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Evaluation Rigor Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0265dc]/10 border border-[#0265dc]/25 text-[#0265dc] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <span>Critérios de Rigor & Julgamento Técnico</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight"
          >
            Padrão de Avaliação & <span className="text-[#0265dc]">Ponderação do Júri</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal"
          >
            A qualificação no projeto UNETIC segue uma métrica balanceada onde a funcionalidade prática e o rigor científico têm o mesmo peso preponderante.
          </motion.p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#0265dc] via-[#00A859] to-[#F59E0B] mx-auto mt-4 rounded-full" />
        </div>

        {/* Evaluation Criteria Interactive Grid */}
        <div className="max-w-5xl mx-auto">

          {/* Top Metric Header */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total da Ponderação Institucional</span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 flex items-center gap-2">
                  <span>100% da Nota de Defesa</span>
                  <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0265dc] border border-blue-200">
                    6 Indicadores
                  </span>
                </h3>
              </div>
            </div>

            {/* Segmented 100% Bar Visualization */}
            <div className="w-full bg-slate-100 rounded-2xl h-4 overflow-hidden p-0.5 border border-slate-200 flex gap-0.5 mb-6">
              {evaluationCriteria.map((item, idx) => (
                <div
                  key={idx}
                  className="h-full first:rounded-l-xl last:rounded-r-xl transition-all duration-300 hover:brightness-110 cursor-pointer"
                  style={{
                    width: `${item.percent}%`,
                    backgroundColor: item.color,
                  }}
                  title={`${item.name}: ${item.percent}%`}
                  onClick={() => setSelectedCriterion(idx)}
                />
              ))}
            </div>

            {/* Criteria Detailed Cards with Animation */}
            <div className="space-y-4">
              {evaluationCriteria.map((item, idx) => {
                const isSelected = selectedCriterion === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    onClick={() => setSelectedCriterion(idx)}
                    whileHover={{ scale: 1.008 }}
                    className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer ${isSelected
                      ? 'bg-slate-50/80 shadow-md'
                      : 'bg-white hover:bg-slate-50/50 border-slate-200/80'
                      }`}
                    style={{
                      borderColor: isSelected ? item.color : undefined,
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs shadow-sm"
                          style={{
                            backgroundColor: `${item.color}18`,
                            color: item.color,
                          }}
                        >
                          0{idx + 1}
                        </span>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                            {item.name}
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-start sm:self-auto">
                        <span
                          className="font-mono text-sm font-black px-3 py-1 rounded-xl"
                          style={{ backgroundColor: `${item.color}15`, color: item.color }}
                        >
                          {item.percent}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-200 mt-3 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent * 3}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>

                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Academic Transparency Note Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0265dc] border border-blue-200 flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-5 h-5 text-[#00A859]" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-slate-900 font-display">
                  Equidade e Transparência Pedagógica
                </h5>
                <p className="text-xs text-slate-500">
                  Todas as pautas de avaliação do UNETIC são rubricadas pelo corpo docente orientador.
                </p>
              </div>
            </div>

            <a
              href="#cursos"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0265dc] hover:text-[#0052cc] transition-colors flex-shrink-0 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl"
            >
              <span>Rever Temas</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
