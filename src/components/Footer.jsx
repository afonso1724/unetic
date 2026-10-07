import React from 'react';
import { motion } from 'framer-motion';
import { Shield, MapPin, Mail, Phone, ArrowUp, Sparkles } from 'lucide-react';
import { institutionInfo } from '../data/uneticData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060D1A] text-white border-t-4 border-[#0265dc] overflow-hidden">
      {/* School Crest Watermark in Footer background */}
      <div
        className="crest-watermark -right-10 -bottom-10 w-96 h-96 lg:w-[450px] lg:h-[450px] pointer-events-none"
        style={{
          opacity: 0.055,
        }}
        aria-hidden="true"
      />

      {/* Subtle ambient glows in UNETIC colors */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#0265dc]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#00A859]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">

          {/* Col 1: Institutional Identity with UNETIC Official Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-black p-1 shadow-xl border-2 border-[#0265dc] flex-shrink-0">
                <img
                  src="/assets/unetic-logo.jpeg"
                  alt="Logotipo Oficial UNETIC"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-white tracking-tight flex items-center gap-2">
                  <span>UNETIC</span>
                  <span className="text-[#00A859] font-normal text-sm">2026/2027</span>
                </h3>
                <p className="text-xs text-[#38bdf8] font-semibold">
                  Unigénito na Era das TIC
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-sm">
              <strong>{institutionInfo.name}</strong> — Luanda Sul, Viana. <br />
              Plano Institucional de Atividades e Fórum Técnico-Científico dos Estudantes Finalistas da 13.ª Classe.
            </p>
          </div>

          {/* Col 2: Navigation Links (Strictly NO Vida Escolar) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
              Navegação Institucional
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#sobre" className="hover:text-[#38bdf8] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0265dc] group-hover:bg-[#00A859] transition-colors" />
                  <span>Sobre a Instituição & Missão</span>
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#38bdf8] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0265dc] group-hover:bg-[#00A859] transition-colors" />
                  <span>Cursos & Temas de Investigação</span>
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-[#38bdf8] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0265dc] group-hover:bg-[#00A859] transition-colors" />
                  <span>Metodologia em 6 Etapas</span>
                </a>
              </li>
              <li>
                <a href="#cronograma" className="hover:text-[#38bdf8] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0265dc] group-hover:bg-[#00A859] transition-colors" />
                  <span>Cronograma Trimestral</span>
                </a>
              </li>
              <li>
                <a href="#avaliacao" className="hover:text-[#38bdf8] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0265dc] group-hover:bg-[#00A859] transition-colors" />
                  <span>Critérios de Avaliação</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00A859]">
              Localização & Contactos
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0265dc] flex-shrink-0 mt-0.5" />
                <span>
                  Instituto Politécnico Privado Nossa Senhora da Anunciação<br />
                  Luanda Sul, Viana — Província de Luanda, Angola
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00A859] flex-shrink-0" />
                <span>unetic.cnsa@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                <span>+244  947 686 951 / +244 934 000 000</span>
              </div>
            </div>

            <div className="pt-3">
              <motion.button
                type="button"
                onClick={scrollToTop}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-[#0265dc] text-white text-xs font-bold transition-all border border-white/20 shadow-md"
              >
                <span>Voltar ao Topo</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#00A859]" />
              </motion.button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Instituto Politécnico Privado Nossa Senhora da Anunciação — Luanda Sul. Todos os direitos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
}
