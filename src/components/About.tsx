import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, MapPin, Aperture, Star } from 'lucide-react';
import { useCounter } from '../hooks/useCounter';

const highlights = [
  { icon: Camera, text: 'Premium Cinema-grade quality' },
  { icon: MapPin, text: 'Based in Karuppur, Salem TN' },
  { icon: Aperture, text: 'Pre-Wedding & Wedding Specialist' },
  { icon: Star, text: 'Natural light & cinematic editing' },
];

// ── CSS keyframe flight paths injected once ──────────────────────────────
const BUTTERFLY_CSS = `
  @keyframes bf1 {
    0%   { transform: translate(0vw, 0px) rotate(10deg); }
    20%  { transform: translate(15vw, -60px) rotate(-5deg); }
    40%  { transform: translate(35vw, 20px) rotate(12deg); }
    60%  { transform: translate(55vw, -40px) rotate(-8deg); }
    80%  { transform: translate(70vw, 30px) rotate(6deg); }
    100% { transform: translate(0vw, 0px) rotate(10deg); }
  }
  @keyframes bf2 {
    0%   { transform: translate(80vw, 0px) rotate(-12deg); }
    25%  { transform: translate(60vw, 50px) rotate(8deg); }
    50%  { transform: translate(35vw, -30px) rotate(-10deg); }
    75%  { transform: translate(15vw, 60px) rotate(5deg); }
    100% { transform: translate(80vw, 0px) rotate(-12deg); }
  }
  @keyframes bf3 {
    0%   { transform: translate(50vw, 0px) rotate(0deg); }
    15%  { transform: translate(65vw, -50px) rotate(-15deg); }
    35%  { transform: translate(75vw, 30px) rotate(10deg); }
    55%  { transform: translate(50vw, -20px) rotate(-5deg); }
    75%  { transform: translate(25vw, 40px) rotate(8deg); }
    100% { transform: translate(50vw, 0px) rotate(0deg); }
  }
  @keyframes bf4 {
    0%   { transform: translate(5vw, 30px) rotate(8deg); }
    30%  { transform: translate(30vw, -40px) rotate(-10deg); }
    60%  { transform: translate(60vw, 20px) rotate(15deg); }
    85%  { transform: translate(40vw, 60px) rotate(-6deg); }
    100% { transform: translate(5vw, 30px) rotate(8deg); }
  }
  @keyframes bf5 {
    0%   { transform: translate(90vw, 20px) rotate(-8deg); }
    20%  { transform: translate(70vw, -50px) rotate(12deg); }
    45%  { transform: translate(45vw, 10px) rotate(-6deg); }
    70%  { transform: translate(20vw, -35px) rotate(10deg); }
    100% { transform: translate(90vw, 20px) rotate(-8deg); }
  }
  @keyframes bf6 {
    0%   { transform: translate(20vw, -20px) rotate(5deg); }
    25%  { transform: translate(5vw, 40px) rotate(-12deg); }
    50%  { transform: translate(55vw, -30px) rotate(8deg); }
    75%  { transform: translate(80vw, 50px) rotate(-5deg); }
    100% { transform: translate(20vw, -20px) rotate(5deg); }
  }
  @keyframes bf7 {
    0%   { transform: translate(65vw, 40px) rotate(-6deg); }
    30%  { transform: translate(85vw, -30px) rotate(10deg); }
    55%  { transform: translate(50vw, 50px) rotate(-12deg); }
    80%  { transform: translate(15vw, -20px) rotate(7deg); }
    100% { transform: translate(65vw, 40px) rotate(-6deg); }
  }
  @keyframes wingFlap {
    0%, 100% { transform: scaleX(1); }
    50%       { transform: scaleX(0.08); }
  }
`;

// ── Single butterfly SVG with flapping wings ────────────────────────────
interface BFProps {
  anim: string;
  duration: string;
  delay: string;
  size: number;
  top: string;
  left: string;
  color: string;
  opacity: number;
  flapDuration: string;
}

function Butterfly({ anim, duration, delay, size, top, left, color, opacity, flapDuration }: BFProps) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        width: size,
        height: size,
        animation: `${anim} ${duration} ${delay} ease-in-out infinite`,
        willChange: 'transform',
      }}
    >
      <svg width={size} height={size} viewBox="0 0 60 60" overflow="visible">
        {/* Left upper wing */}
        <path
          d="M30,32 C20,18 4,10 6,26 C8,38 22,38 30,32 Z"
          fill={color}
          style={{
            opacity,
            transformOrigin: '30px 32px',
            animation: `wingFlap ${flapDuration} ease-in-out infinite`,
          }}
        />
        {/* Left lower wing */}
        <path
          d="M30,32 C22,38 12,50 16,54 C20,57 28,48 30,32 Z"
          fill={color}
          style={{
            opacity: opacity * 0.7,
            transformOrigin: '30px 32px',
            animation: `wingFlap ${flapDuration} ease-in-out infinite`,
          }}
        />
        {/* Right upper wing */}
        <path
          d="M30,32 C40,18 56,10 54,26 C52,38 38,38 30,32 Z"
          fill={color}
          style={{
            opacity,
            transformOrigin: '30px 32px',
            animation: `wingFlap ${flapDuration} ease-in-out infinite`,
            animationDirection: 'alternate',
          }}
        />
        {/* Right lower wing */}
        <path
          d="M30,32 C38,38 48,50 44,54 C40,57 32,48 30,32 Z"
          fill={color}
          style={{
            opacity: opacity * 0.7,
            transformOrigin: '30px 32px',
            animation: `wingFlap ${flapDuration} ease-in-out infinite`,
            animationDirection: 'alternate',
          }}
        />
        {/* Wing patterns (spots) */}
        <circle cx="20" cy="26" r="3" fill={color} opacity={opacity * 0.5} />
        <circle cx="40" cy="26" r="3" fill={color} opacity={opacity * 0.5} />
        {/* Body */}
        <ellipse cx="30" cy="34" rx="2" ry="10" fill={color} opacity={opacity * 1.3} />
        {/* Antennae */}
        <path d="M30,24 Q24,14 20,10" stroke={color} strokeWidth="1" fill="none" opacity={opacity * 0.8} strokeLinecap="round" />
        <path d="M30,24 Q36,14 40,10" stroke={color} strokeWidth="1" fill="none" opacity={opacity * 0.8} strokeLinecap="round" />
        <circle cx="20" cy="10" r="1.5" fill={color} opacity={opacity * 0.8} />
        <circle cx="40" cy="10" r="1.5" fill={color} opacity={opacity * 0.8} />
      </svg>
    </div>
  );
}

const BUTTERFLIES: BFProps[] = [
  { anim: 'bf1', duration: '14s', delay: '0s',    size: 38, top: '10%', left: '0%',  color: '#F59E0B', opacity: 0.65, flapDuration: '0.4s' },
  { anim: 'bf2', duration: '18s', delay: '-5s',   size: 28, top: '30%', left: '0%',  color: '#FCD34D', opacity: 0.5,  flapDuration: '0.35s' },
  { anim: 'bf3', duration: '16s', delay: '-8s',   size: 44, top: '5%',  left: '0%',  color: '#F59E0B', opacity: 0.55, flapDuration: '0.45s' },
  { anim: 'bf4', duration: '20s', delay: '-3s',   size: 32, top: '60%', left: '0%',  color: '#FDE68A', opacity: 0.45, flapDuration: '0.38s' },
  { anim: 'bf5', duration: '15s', delay: '-10s',  size: 36, top: '45%', left: '0%',  color: '#F59E0B', opacity: 0.6,  flapDuration: '0.42s' },
  { anim: 'bf6', duration: '22s', delay: '-6s',   size: 24, top: '75%', left: '0%',  color: '#FCD34D', opacity: 0.4,  flapDuration: '0.32s' },
  { anim: 'bf7', duration: '17s', delay: '-12s',  size: 40, top: '20%', left: '0%',  color: '#F59E0B', opacity: 0.58, flapDuration: '0.48s' },
];

function StatCounter({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCounter(value, 2000, start);
  return (
    <div className="text-center">
      <div className="font-display font-bold text-4xl md:text-5xl text-luxury-gold">{count}{suffix}</div>
      <div className="text-luxury-muted text-sm mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding bg-luxury-dark relative overflow-hidden">
      {/* Inject butterfly CSS keyframes once */}
      <style dangerouslySetInnerHTML={{ __html: BUTTERFLY_CSS }} />

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/3 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      {/* ── Flying butterflies ── */}
      {BUTTERFLIES.map((b, i) => <Butterfly key={i} {...b} />)}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl bg-luxury-darker flex items-center justify-center p-4">
              <img
                src="/images/name-board.jpg"
                alt="Lytro Kapture — Name Board"
                className="w-full h-auto object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/50 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-8 -right-6 w-44 h-56 rounded-xl overflow-hidden border-4 border-luxury-dark shadow-2xl hidden sm:block"
            >
              <img
                src="/images/premium-wedding.png"
                alt="Lytro Kapture — Pre-Wedding"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7, type: 'spring' }}
              className="absolute -top-5 -left-5 w-24 h-24 bg-luxury-gold rounded-full items-center justify-center shadow-2xl hidden sm:flex flex-col"
            >
              <Camera size={20} className="text-luxury-dark mb-1" />
              <span className="text-luxury-dark text-[9px] font-bold tracking-wide text-center leading-tight">PREMIUM<br/>QUALITY</span>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="section-label mb-4">Who We Are</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Lytro Kapture —<br />
              <span className="text-gold-gradient">Stories</span> Told<br />
              Through Light
            </h2>

            <div className="divider-gold mb-8" />

            <p className="text-luxury-subtle text-lg leading-relaxed mb-6">
              We are Lytro Kapture — a passionate photography team based in Salem, Tamil Nadu, dedicated to turning your most precious moments into timeless visual stories.
            </p>
            <p className="text-luxury-muted leading-relaxed mb-10">
              Shooting on premium equipment, we bring cinema-quality imagery to every session — from romantic pre-wedding shoots across Pondicherry and Yercaud Hills to traditional portraits in Karuppur, Salem and lifestyle photography that feels as real as the moment itself.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 glass-card rounded-xl p-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                    <h.icon size={15} className="text-luxury-gold" />
                  </div>
                  <span className="text-luxury-subtle text-sm">{h.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold"
              >
                View Our Portfolio
              </button>
              <a
                href="https://www.instagram.com/lytrokapture_fotography"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Follow on Instagram
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-20">
          <div className="divider-gold mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 3, suffix: '+', label: 'Years Experience' },
              { value: 120, suffix: '+', label: 'Shoots Completed' },
              { value: 500, suffix: '+', label: 'Happy Clients' },
              { value: 12, suffix: '+', label: 'Locations Covered' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
              >
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} start={statsInView} />
              </motion.div>
            ))}
          </div>
          <div className="divider-gold mt-12" />
        </div>
      </div>
    </section>
  );
}
