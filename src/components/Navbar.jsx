import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Sparkles, BookOpen, Clock, Award, Compass, ArrowUpRight } from 'lucide-react';
import { institutionInfo } from '../data/uneticData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Visão & Missão", href: "#sobre" },
    { label: "Cursos & Temas", href: "#cursos" },
    { label: "Metodologia", href: "#metodologia" },
    { label: "Cronograma & Fórum", href: "#cronograma" },
    { label: "Critérios de Avaliação", href: "#avaliacao" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-blue-950/5 border-b border-[#0265dc]/15 py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 py-3.5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand with UNETIC Official Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3.5 group"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-xl overflow-hidden border-2 border-[#0265dc]/40 shadow-sm bg-black p-0.5 group-hover:border-[#00A859] transition-all duration-300">
                <img
                  src="/assets/unetic-logo.jpeg"
                  alt="Logotipo Oficial UNETIC"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-xl text-[#0265dc] tracking-tight leading-none group-hover:text-[#034ea2] transition-colors">
                  UNETIC
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 text-[#00A859] border border-emerald-200">
                  2026/2027
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 line-clamp-1 max-w-[210px] sm:max-w-none">
                IPPNSA - Luanda Sul
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:text-[#0265dc] hover:bg-[#0265dc]/8 rounded-lg transition-all duration-150 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#00A859] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.a
              href="#cursos"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0265dc] to-[#034ea2] hover:from-[#0052cc] hover:to-[#0265dc] text-white px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase shadow-md shadow-blue-600/20 border border-[#00A859]/40 transition-all duration-200"
            >
              <span>Explorar Temas</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#F59E0B]" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-[#0265dc] hover:bg-slate-100 transition-colors"
            aria-label="Abrir Menu de Navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[#0265dc]/20 shadow-2xl px-4 pt-3 pb-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-bold text-slate-800 hover:bg-[#0265dc]/10 hover:text-[#0265dc] rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#00A859]" />
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-200">
                <a
                  href="#cursos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0265dc] to-[#00A859] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  <span>Explorar Temas de Investigação</span>
                  <ChevronRight className="w-4 h-4 text-[#F59E0B]" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
