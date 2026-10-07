import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ZoomIn, Eye, Sparkles, Award } from 'lucide-react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Estúdio de Desenho Técnico & Modelação CAD",
      category: "drawing",
      categoryLabel: "Desenho Técnico",
      image: "/assets/gallery/cnsa_drawing_lab.jpg",
      course: "Desenhador Projectista / Construção Civil",
      caption: "Alunos finalistas a projetar sistemas de drenagem pluvial e cálculo estrutural em mesas de desenho e estações CAD com vista para a malha urbana de Luanda.",
      tall: false,
      featured: true,
    },
    {
      id: 2,
      title: "Laboratório de Redes, Servidores & Hardware",
      category: "tech",
      categoryLabel: "Laboratório TIC",
      image: "/assets/gallery/cnsa_computer_lab.jpg",
      course: "Técnico de Informática",
      caption: "Configuração prática de bastidores Cisco Catalyst, cabeamento estruturado e switches geridos para redes corporativas resilientes.",
      tall: true,
      featured: true,
    },
    {
      id: 3,
      title: "Seminário de Gestão Financeira & SAF-T 2026",
      category: "management",
      categoryLabel: "Gestão & Fiscalidade",
      image: "/assets/gallery/cnsa_business_seminar.jpg",
      course: "Contabilidade e Gestão & Gestão Empresarial",
      caption: "Apresentação de relatório trimestral simulado perante comissão avaliadora em auditório institucional no IPP Nossa Senhora da Anunciação.",
      tall: false,
      featured: true,
    },
    {
      id: 4,
      title: "Mentoria de Arquitetura de Software",
      category: "tech",
      categoryLabel: "Laboratório TIC",
      image: "/assets/team/eliseu.png",
      course: "Informática de Gestão",
      caption: "Sessão de alinhamento sobre padrões de base de dados e segurança de dados do portal de gestão escolar SIGE-Sul.",
      tall: true,
      featured: false,
    },
    {
      id: 5,
      title: "Auditoria Fiscal & Conformidade Tributária",
      category: "management",
      categoryLabel: "Gestão & Fiscalidade",
      image: "/assets/team/lucia.png",
      course: "Contabilidade e Gestão",
      caption: "Estudo analítico do impacto do IVA e implementação das novas normas de reporte eletrónico da AGT.",
      tall: false,
      featured: false,
    },
    {
      id: 6,
      title: "Estratégia Empresarial & Resiliência PME",
      category: "management",
      categoryLabel: "Gestão & Fiscalidade",
      image: "/assets/team/tilson.png",
      course: "Gestão Empresarial",
      caption: "Conceção de planos táticos para mitigação de riscos cambiais e sustentabilidade do pequeno comércio em Viana.",
      tall: true,
      featured: false,
    },
    {
      id: 7,
      title: "Banca Prévia de Qualificação Técnica",
      category: "campus",
      categoryLabel: "Vida no Campus",
      image: "/assets/team/josue.png",
      course: "Multidisciplinar 13.ª Classe",
      caption: "Simulação de defesa oral perante júri interno de docentes e orientadores metodológicos.",
      tall: false,
      featured: false,
    },
    {
      id: 8,
      title: "Símbolo de Devoção e Excelência Académica",
      category: "campus",
      categoryLabel: "Vida no Campus",
      image: "/assets/logo-cnsa.png",
      course: "Colégio Nossa Senhora da Anunciação",
      caption: "Brasão oficial da instituição: Oração e Educação guiando a formação técnico-científica dos alunos.",
      tall: false,
      featured: false,
    },
  ];

  const filters = [
    { id: 'all', label: 'Todos os Registos' },
    { id: 'drawing', label: 'Desenho Técnico & Urbanismo' },
    { id: 'tech', label: 'Laboratórios & Redes TIC' },
    { id: 'management', label: 'Gestão, Finanças & SAF-T' },
    { id: 'campus', label: 'Vida no Campus & Bancas' },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#800020]/10 border border-[#800020]/25 text-[#800020] text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Arquivo Documental da 13.ª Classe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
            Vida Escolar & <span className="text-[#800020]">Ambiente de Investigação</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Imersão no quotidiano dos alunos no IPP Nossa Senhora da Anunciação: oficinas de modelação, laboratórios de hardware, debates tributários e momentos de comunhão.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#800020] via-[#D4AF37] to-[#0D47A1] mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border ${
                activeFilter === filter.id
                  ? 'bg-[#800020] text-white border-[#D4AF37] shadow-md shadow-[#800020]/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-[#D4AF37] hover:bg-slate-50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry / Dynamic Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedPhoto(item)}
                className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-slate-200/80 hover:border-[#D4AF37] cursor-pointer bg-slate-900 ${
                  item.featured ? 'sm:col-span-2 lg:col-span-2 h-80 sm:h-96' : 'h-80'
                }`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay Always Present for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900/80 text-amber-300 border border-[#D4AF37]/50 backdrop-blur-sm">
                    {item.categoryLabel}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <ZoomIn className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                </div>

                {/* Hover Caption Overlay at Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white transform transition-transform duration-300">
                  <span className="text-[11px] font-bold uppercase text-[#D4AF37] tracking-wider block mb-1">
                    {item.course}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-amber-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-200 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 font-sans leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal / Lightbox for high detail inspection */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-[#800020] text-white flex items-center justify-center border border-white/20 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="max-h-[65vh] w-auto object-contain mx-auto"
                />
              </div>

              <div className="p-6 sm:p-8 bg-slate-900 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    {selectedPhoto.categoryLabel}
                  </span>
                  <span className="text-white/40">•</span>
                  <span className="text-xs text-slate-400">
                    {selectedPhoto.course}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed font-sans">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
