import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight, Sparkles, Building2, BookOpen, Layers, ShieldCheck, GraduationCap, Cpu } from 'lucide-react';
import { institutionInfo } from '../data/uneticData';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#060D1A] text-white min-h-[92vh] flex items-center justify-center">
      {/* Background Layer: UNETIC Logo blended over Tech Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* The UNETIC Logo Image centered with dark mix-blend */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.32, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: "url('/assets/unetic-logo.jpeg')",
            filter: 'contrast(1.2) brightness(0.95)',
          }}
        />

        {/* Multi-layered UNETIC Gradient Overlay (Electric Blue, Deep Navy, Tech Green & Solar Gold) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060D1A]/85 via-[#071633]/92 to-[#040914]/98" />

        {/* Tech subtle radial glows in UNETIC colors */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-gradient-to-tr from-[#0265dc]/30 via-[#00A859]/20 to-transparent blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-gradient-to-bl from-[#F59E0B]/20 via-[#0284c7]/20 to-transparent blur-[120px] rounded-full pointer-events-none" />

        {/* Delicate digital grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0265dc0c_1px,transparent_1px),linear-gradient(to_bottom,#0265dc0c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">



        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-4 max-w-5xl"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.1]">
            <span className="text-white drop-shadow-sm">UNETIC </span>
            <span className="text-[#00A859] font-normal">2026/2027</span>
            <span className="block mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#38bdf8] via-[#0265dc] to-[#00A859] bg-clip-text text-transparent">
              Unigénito na Era das TIC
            </span>
          </h1>
        </motion.div>

        {/* Sub-headline: Project Motto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-3xl relative px-6 py-4"
        >
          <div className="absolute -top-3 left-0 text-5xl font-serif text-[#00A859]/40 leading-none select-none">“</div>
          <blockquote className="text-lg sm:text-2xl md:text-2xl font-serif italic text-blue-100 font-light leading-relaxed">
            {institutionInfo.projectMotto}
          </blockquote>
          <div className="absolute -bottom-6 right-2 text-5xl font-serif text-[#00A859]/40 leading-none select-none">”</div>
        </motion.div>

        {/* Secondary Explanatory Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-slate-300 font-normal max-w-2xl leading-normal text-balance"
        >
          {institutionInfo.secondaryText}
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Button 1: UNETIC Electric Blue & Green Accent */}
          <motion.a
            href="#cursos"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0265dc] to-[#034ea2] text-white font-bold text-sm uppercase tracking-wider shadow-[0_10px_30px_rgba(2,101,220,0.4)] border border-[#00A859]/60 hover:border-[#00A859] hover:shadow-[0_15px_35px_rgba(0,168,89,0.35)] transition-all duration-300"
          >
            <span>Explorar Temas de Investigação</span>
            <ChevronRight className="w-4 h-4 text-[#F59E0B] group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Button 2: Outlined Institutional Styling */}
          <motion.a
            href="#sobre"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900/70 hover:bg-slate-800/90 text-white font-semibold text-sm uppercase tracking-wider border border-white/20 hover:border-[#38bdf8] backdrop-blur-md transition-all duration-300"
          >
            <span>Conhecer o Projeto</span>
            <Building2 className="w-4 h-4 text-[#38bdf8]" />
          </motion.a>
        </motion.div>

        {/* Bottom Key Metric Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl"
        >
          {institutionInfo.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, borderColor: 'rgba(0, 168, 89, 0.6)' }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900/70 border border-[#0265dc]/30 rounded-2xl p-4 sm:p-5 backdrop-blur-md text-center shadow-lg transition-all"
            >
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#38bdf8]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.suffix}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#38bdf8]">Rolar para Explorar</span>
        <ArrowDown className="w-4 h-4 text-[#00A859] animate-bounce mt-1" />
      </div>
    </section>
  );
}
