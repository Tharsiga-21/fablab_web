// Responsive gallery grid with category filtering, image fallback handling, and an accessible modal lightbox (closes on click or Escape).

import { useState, useEffect } from 'react';
import {
  Lightbulb,
  Printer,
  Zap,
  Cpu,
  Wrench,
  Layers,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { gallery } from '../data/gallery';
import SectionTitle from '../components/SectionTitle';

const iconMap = {
  Lightbulb,
  Printer,
  Zap,
  Cpu,
  Wrench,
  Layers,
};

const CATEGORIES = [
  'All Photos',
  'Thinking Corner',
  'FabLab Workshop',
  'Equipment in Action',
];

function GalleryVisual({ item, isLarge = false }) {
  const [imgError, setImgError] = useState(false);
  const IconComponent = iconMap[item.icon] || Layers;
  const hasValidImage = Boolean(item.imageUrl) && !imgError;

  if (hasValidImage) {
    return (
      <img
        src={item.imageUrl}
        alt={`${item.caption} – ${item.subtitle}`}
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
        className={`h-full w-full object-cover ${
          isLarge
            ? ''
            : 'group-hover:scale-105 transition-transform duration-300'
        }`}
      />
    );
  }

  return (
    <div
      className={`relative h-full w-full bg-gradient-to-br ${
        item.bgClass || 'from-[#2A4BB8] to-[#4169E1]'
      } flex flex-col items-center justify-center p-6 text-white select-none overflow-hidden`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />
      <div
        className={`relative z-10 flex items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 text-[#FF8C00] shadow-inner ${
          isLarge ? 'h-24 w-24 mb-5' : 'h-16 w-16 mb-3'
        }`}
      >
        <IconComponent
          className={
            isLarge ? 'h-12 w-12 text-white' : 'h-8 w-8 text-white'
          }
        />
      </div>
      <p className="relative z-10 font-mono uppercase tracking-wider text-[#FF8C00] font-semibold text-xs">
        {item.zone}
      </p>
    </div>
  );
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All Photos');
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredGallery =
    selectedCategory === 'All Photos'
      ? gallery
      : gallery.filter((item) => item.category === selectedCategory);

  const closeLightbox = () => setActiveIndex(null);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % filteredGallery.length);
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex(
          (prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, filteredGallery.length]);

  const activeItem =
    activeIndex !== null ? filteredGallery[activeIndex] : null;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveIndex(null);
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1F36]">
              Workspace & Equipment Gallery
            </h2>
            <div
              className="mt-3 h-1.5 w-16 rounded-full bg-[#FF8C00]"
              aria-hidden="true"
            />
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#1A1F36]/75">
              Explore the LICET FabLab Thinking Corner, main fabrication
              workshop, two-tier electronics benches, and 3D printing & laser
              cutting bays.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter gallery by zone"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F4F7FF] rounded-xl border border-[#4169E1]/12 self-start"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#4169E1] text-white shadow-xs'
                      : 'text-[#1A1F36]/75 hover:text-[#2A4BB8] hover:bg-white/60'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group text-left rounded-2xl overflow-hidden bg-white border border-[#4169E1]/15 shadow-sm hover:shadow-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8C00] cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#1A1F36]">
                <GalleryVisual item={item} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F36]/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute top-3 right-3 rounded-lg bg-[#1A1F36]/70 backdrop-blur-xs p-2 text-white opacity-85 group-hover:opacity-100 group-hover:bg-[#FF8C00] transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-[#1A1F36]/60 mb-1.5">
                    <span className="font-semibold text-[#4169E1]">
                      {item.caption}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono truncate">{item.zone}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#1A1F36] group-hover:text-[#2A4BB8] transition-colors">
                    {item.subtitle}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal (closes on backdrop click, close button click, or Escape key) */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.caption}
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1F36]/85 backdrop-blur-sm p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-2xl bg-white overflow-hidden shadow-2xl border border-white/20"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#1A1F36] text-white">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="font-mono text-[#FF8C00] tabular-nums">
                  {String(activeIndex + 1).padStart(2, '0')} /{' '}
                  {String(filteredGallery.length).padStart(2, '0')}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold">{activeItem.caption}</span>
                <span aria-hidden="true" className="hidden sm:inline">
                  ·
                </span>
                <span className="hidden sm:inline text-white/70">
                  {activeItem.zone}
                </span>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 hover:bg-[#FF8C00] px-3 py-1.5 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                <span>Close (Esc)</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Visual Preview */}
            <div className="aspect-16/10 w-full bg-[#1A1F36] max-h-[65vh] overflow-hidden">
              <GalleryVisual item={activeItem} isLarge />
            </div>

            {/* Caption & Controls Footer */}
            <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-[#4169E1]">
                  {activeItem.caption} · {activeItem.zone}
                </p>
                <h4 className="text-lg font-bold text-[#1A1F36] mt-0.5">
                  {activeItem.subtitle}
                </h4>
                <p className="text-xs text-[#1A1F36]/60 mt-1">
                  Click outside this card or press Escape to close · Use Left/Right arrows to browse
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      (prev) =>
                        (prev - 1 + filteredGallery.length) %
                        filteredGallery.length
                    )
                  }
                  aria-label="Previous image"
                  className="p-2.5 rounded-xl border border-[#4169E1]/20 text-[#1A1F36] hover:bg-[#F4F7FF] hover:text-[#2A4BB8] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      (prev) => (prev + 1) % filteredGallery.length
                    )
                  }
                  aria-label="Next image"
                  className="p-2.5 rounded-xl border border-[#4169E1]/20 text-[#1A1F36] hover:bg-[#F4F7FF] hover:text-[#2A4BB8] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
