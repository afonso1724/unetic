import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Building,
  Calculator,
  TrendingUp,
  Cpu,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Search,
  BookOpen,
  Layers,
  ArrowRight,
  Filter,
  Lightbulb
} from 'lucide-react';
import { pathwaysData } from '../data/uneticData';

export default function PathwaysSection() {
  const [selectedPathwayId, setSelectedPathwayId] = useState(pathwaysData[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeThemeIndex, setActiveThemeIndex] = useState(null);

  const selectedPathway = pathwaysData.find((p) => p.id === selectedPathwayId) || pathwaysData[0];

  const getIcon = (iconType, className = "w-6 h-6") => {
    switch (iconType) {
      case "Monitor":
        return <Monitor className={className} />;
      case "Building":
        return <Building className={className} />;
      case "Calculator":
        return <Calculator className={className} />;
      case "TrendingUp":
        return <TrendingUp className={className} />;
      default:
        return <Cpu className={className} />;
    }
  };

  // Filter themes if user types in search
  const filteredThemes = useMemo(() => {
    if (!searchQuery.trim()) {
      return selectedPathway.investigationThemes;
    }
    const q = searchQuery.toLowerCase();
    return selectedPathway.investigationThemes.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.tag.toLowerCase().includes(q)
    );
  }, [selectedPathway, searchQuery]);

  return (
    <section id="cursos" className="py-20 sm:py-28 bg-[#F8FAFC]/95 relative overflow-hidden">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0265dc]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#00A859]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0265dc]/10 border border-[#0265dc]/25 text-[#0265dc] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00A859]" />
            <span>Matriz de Investigação 13.ª Classe</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight"
          >
            Cursos Técnicos & <span className="text-[#0265dc]">Temas a Investigar</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal"
          >
            Explore os possíveis temas de investigação propostos para cada área técnica, concebidos para responder com soluções práticas aos desafios concretos da sociedade angolana.
          </motion.p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#0265dc] via-[#00A859] to-[#F59E0B] mx-auto mt-4 rounded-full" />
        </div>

        {/* Interactive Tabs Selector for the 4 Course Tracks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto mb-8">
          {pathwaysData.map((pathway, idx) => {
            const isSelected = pathway.id === selectedPathwayId;
            return (
              <motion.button
                key={pathway.id}
                onClick={() => {
                  setSelectedPathwayId(pathway.id);
                  setSearchQuery('');
                  setActiveThemeIndex(null);
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border-2 ${
                  isSelected
                    ? 'bg-white shadow-xl -translate-y-1'
                    : 'bg-white/80 hover:bg-white hover:shadow-md border-slate-200'
                }`}
                style={{
                  borderColor: isSelected ? pathway.color : undefined,
                }}
              >
                {/* Active Indicator Glow */}
                {isSelected && (
                  <motion.div
                    layoutId="activeCourseTab"
                    className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full border-2 border-white shadow-md flex items-center justify-center"
                    style={{ backgroundColor: pathway.color }}
                  >
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                  </motion.div>
                )}

                <div className="flex items-start gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0"
                    style={{ backgroundColor: pathway.color }}
                  >
                    {getIcon(pathway.iconType, "w-5 h-5")}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider block text-slate-400">
                      Polo 0{idx + 1}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 mt-0.5 leading-snug">
                      {pathway.name}
                    </h3>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] font-bold pt-2.5 border-t border-slate-100">
                  <span style={{ color: pathway.color }}>4 Temas Propostos</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : ''}`} style={{ color: pathway.color }} />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Pathway Header & Search / Filter Controls */}
        <div className="max-w-6xl mx-auto mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div
              className="w-3.5 h-8 rounded-full"
              style={{ backgroundColor: selectedPathway.color }}
            />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                {selectedPathway.category}
              </span>
              <h3 className="text-lg sm:text-xl font-display font-extrabold text-slate-900 leading-tight">
                {selectedPathway.name}
              </h3>
            </div>
          </div>

          {/* Quick Search inside Course Themes */}
          <div className="relative min-w-[260px] sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar temas do curso..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0265dc] focus:bg-white text-slate-800 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Active Pathway Detailed Themes Showcase */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPathway.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Mission & Summary Banner */}
              <div className="bg-gradient-to-r from-slate-900 via-[#071633] to-[#040914] rounded-3xl p-6 sm:p-8 text-white shadow-xl border-2 border-[#0265dc]/30 relative overflow-hidden">
                <div className="relative z-10 max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold tracking-wider text-[#38bdf8] mb-3">
                    <Lightbulb className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Missão de Investigação e Aplicação Prática</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                    {selectedPathway.mission}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 font-sans">
                    {selectedPathway.summary}
                  </p>
                </div>
              </div>

              {/* Grid of the 4 Possíveis Temas a Investigar */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedPathway.color }} />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 font-display">
                      Possíveis Temas a Investigar ({filteredThemes.length})
                    </h4>
                  </div>
                  <span className="text-xs text-slate-500">
                    Propostas orientadas para TCC da 13.ª Classe
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {filteredThemes.map((theme, tIdx) => {
                    const isExpanded = activeThemeIndex === tIdx;
                    return (
                      <motion.div
                        key={theme.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: tIdx * 0.08 }}
                        whileHover={{ y: -4, borderColor: selectedPathway.color }}
                        className={`p-6 rounded-2xl bg-white border-2 border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
                          isExpanded ? 'ring-2' : ''
                        }`}
                        style={{
                          borderColor: isExpanded ? selectedPathway.color : undefined,
                        }}
                      >
                        {/* Top Accent Strip */}
                        <div
                          className="absolute top-0 left-0 right-0 h-1"
                          style={{ backgroundColor: selectedPathway.color }}
                        />

                        <div>
                          {/* Number & Category Tag */}
                          <div className="flex items-center justify-between mb-3">
                            <span
                              className="font-mono text-xs font-black px-2.5 py-1 rounded-lg"
                              style={{
                                backgroundColor: `${selectedPathway.color}15`,
                                color: selectedPathway.color,
                              }}
                            >
                              Tema 0{tIdx + 1}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                              {theme.tag}
                            </span>
                          </div>

                          {/* Theme Title */}
                          <h4 className="text-base sm:text-lg font-display font-black text-slate-900 group-hover:text-[#0265dc] transition-colors leading-snug">
                            {theme.title}
                          </h4>

                          {/* Theme Description (User-supplied exact text) */}
                          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-normal">
                            {theme.description}
                          </p>
                        </div>

                        {/* Beneficiary and Impact Tag at bottom */}
                        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00A859]" />
                            <span className="font-semibold text-slate-700">Foco de Impacto:</span>
                            <span className="text-slate-500 line-clamp-1">{theme.beneficiary}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {filteredThemes.length === 0 && (
                  <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
                    <p className="text-sm text-slate-500">
                      Nenhum tema encontrado com o termo "{searchQuery}".
                    </p>
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="mt-2 text-xs font-bold text-[#0265dc] underline"
                    >
                      Limpar filtro de pesquisa
                    </button>
                  </div>
                )}
              </div>

              {/* Technologies & Tools Matrix Footer */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Ferramentas & Tecnologias de Suporte
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPathway.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-left md:text-right flex-shrink-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Beneficiários Diretos
                  </span>
                  <span className="text-xs text-slate-700 font-medium">
                    {selectedPathway.beneficiaries}
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
