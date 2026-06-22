import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Aperture, MapPin, Instagram } from 'lucide-react';

const SLIDES = [
  { src: '/images/hero-3.png', label: 'Portrait · Salem' },
  { src: '/images/hero-4.png', label: 'Pre-Wedding · Vaiyappamalai' },
  { src: '/images/hero-2.png', label: 'Pre-Wedding · Yercaud Hills' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ height: '100svh', minHeight: '700px' }}
    >
      {/* ── Full-bleed slideshow background ── */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={SLIDES[current].src}
              alt={SLIDES[current].label}
              className="w-full h-full object-cover object-center"
              style={{ display: 'block' }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlays */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(7,11,20,0.88) 0%, rgba(7,11,20,0.55) 55%, rgba(7,11,20,0.2) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.8) 0%, transparent 45%, rgba(7,11,20,0.25) 100%)' }} />
      </div>

      {/* ── Slide dots — right edge ── */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-500"
            style={{
              width: '5px',
              height: i === current ? '36px' : '8px',
              background: i === current ? '#F59E0B' : 'rgba(255,255,255,0.22)',
              boxShadow: i === current ? '0 0 8px rgba(245,158,11,0.5)' : 'none',
            }}
          />
        ))}
      </div>

      {/* ── Slide location label ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.4 }}
          className="absolute top-24 right-10 hidden lg:flex items-center gap-1.5 z-20"
        >
          <MapPin size={9} className="text-[#F59E0B]" />
          <span className="text-white/40 text-[9px] tracking-[0.28em] uppercase">{SLIDES[current].label}</span>
        </motion.div>
      </AnimatePresence>

      {/* ── Main content ── */}
      <div className="relative z-10 h-full flex flex-col max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">

        {/* Nav spacer */}
        <div className="flex-shrink-0" style={{ height: 'clamp(80px, 10svh, 112px)' }} />

        {/* Text content */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl">

          {/* Studio label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex self-start mb-7"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-[0.22em] uppercase text-[#F59E0B]"
              style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', backdropFilter: 'blur(12px)' }}>
              <Aperture size={12} strokeWidth={1.5} />
              Lytro Kapture Fotography
            </div>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold leading-none text-white"
              style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
            >
              We Capture
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold leading-none"
              style={{
                fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                background: 'linear-gradient(128deg, #D97706 0%, #F59E0B 38%, #FDE68A 65%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}
            >
              Your Story.
            </motion.h1>
          </div>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left mb-7 h-px w-24"
            style={{ background: 'linear-gradient(to right, #F59E0B, transparent)' }}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="text-white/60 text-base sm:text-lg max-w-md leading-relaxed mb-9"
          >
            Pre-weddings, weddings, portraits & lifestyle — every frame shot with intention, every memory made to last forever.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.76 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <button
              onClick={() => scrollTo('portfolio')}
              className="group inline-flex items-center gap-2.5 font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300"
              style={{ background: 'rgba(245,158,11,0.18)', border: '1px solid rgba(245,158,11,0.5)', backdropFilter: 'blur(16px)', color: '#FCD34D', boxShadow: '0 0 20px rgba(245,158,11,0.12)' }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#F59E0B'; b.style.color = '#0F172A'; b.style.boxShadow = '0 8px 36px rgba(245,158,11,0.4)'; }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'rgba(245,158,11,0.18)'; b.style.color = '#FCD34D'; b.style.boxShadow = '0 0 20px rgba(245,158,11,0.12)'; }}
            >
              View Our Work
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center font-semibold text-sm text-white/80 px-7 py-3.5 rounded-full transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.18)', backdropFilter: 'blur(16px)' }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'rgba(255,255,255,0.14)'; b.style.borderColor = 'rgba(255,255,255,0.32)'; b.style.color = '#fff'; }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'rgba(255,255,255,0.07)'; b.style.borderColor = 'rgba(255,255,255,0.18)'; b.style.color = 'rgba(255,255,255,0.8)'; }}
            >
              Book a Session
            </button>

            <a
              href="https://www.instagram.com/lytrokapture_fotography"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-sm text-white/70 px-5 py-3.5 rounded-full transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(16px)' }}
              onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = 'rgba(255,255,255,0.1)'; a.style.color = '#fff'; }}
              onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = 'rgba(255,255,255,0.05)'; a.style.color = 'rgba(255,255,255,0.7)'; }}
            >
              <Instagram size={15} />
              Instagram
            </a>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex-shrink-0 pb-10 sm:pb-8"
        >
          <div
            className="inline-grid grid-cols-4 w-full max-w-xs sm:max-w-md rounded-2xl px-2 py-4"
            style={{ background: 'rgba(7,11,20,0.62)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(24px)' }}
          >
            {[
              { n: '3+', l: 'Years' },
              { n: '120+', l: 'Shoots' },
              { n: '500+', l: 'Clients' },
              { n: '12+', l: 'Locations' },
            ].map((s) => (
              <div key={s.l} className="px-3 sm:px-5 text-center" style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="font-display font-bold text-xl sm:text-2xl text-[#F59E0B]">{s.n}</div>
                <div className="text-white/35 text-[9px] tracking-wider mt-0.5 uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('portfolio')}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/28 hover:text-[#F59E0B] transition-colors duration-300 z-20"
      >
        <span className="text-[8px] tracking-[0.35em] uppercase font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
}
