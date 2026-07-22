import { useRef } from 'react';
import { useCounter } from '../hooks/useCounter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const count = useCounter(value, 2000, true);
  return (
    <div className="flex flex-col items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-white/10 last:border-0 hover:bg-white/[0.02] transition-colors duration-500">
      <div className="font-display font-light text-5xl md:text-6xl text-white tracking-tight mb-2">
        {count}<span className="text-luxury-gold">{suffix}</span>
      </div>
      <div className="text-[9px] tracking-[0.35em] uppercase font-bold text-luxury-gold/80">{label}</div>
    </div>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const phase1Ref = useRef<HTMLDivElement>(null);
  const phase2Ref = useRef<HTMLDivElement>(null);
  const phase3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1) Set initial states for cinematic crossfade with parallax
    gsap.set(phase1Ref.current, { autoAlpha: 1, scale: 1, y: 0 });
    gsap.set(phase2Ref.current, { autoAlpha: 0, scale: 0.95, y: 100, zIndex: 20 });
    gsap.set(phase3Ref.current, { autoAlpha: 0, scale: 0.95, y: 100, zIndex: 30 });

    // 2) Create the ScrollTrigger timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%", // Drastically shortened so a single scroll travels far
        pin: true,
        scrub: 1,
        snap: {
          snapTo: "labels", // Magnetically snap to the labels below
          duration: { min: 0.3, max: 0.8 },
          delay: 0, // Snap instantly after they stop scrolling
          ease: "power2.inOut"
        }
      }
    });

    // 3) Sequence the animations: Cinematic Crossfades with Parallax
    tl.add("phase1") // Label 1
      .to({}, { duration: 0.2 }) // Tiny delay
      
      // Transition 1: Phase 1 moves UP and fades, Phase 2 moves UP into view
      .to(phase1Ref.current, { autoAlpha: 0, scale: 1.05, y: -100, duration: 1, ease: "power2.inOut" }, "fade1")
      .to(phase2Ref.current, { autoAlpha: 1, scale: 1, y: 0, duration: 1, ease: "power2.inOut" }, "fade1")
      
      .add("phase2") // Label 2
      .to({}, { duration: 0.2 }) // Tiny delay
      
      // Transition 2: Phase 2 moves UP and fades, Phase 3 moves UP into view
      .to(phase2Ref.current, { autoAlpha: 0, scale: 1.05, y: -100, duration: 1, ease: "power2.inOut" }, "fade2")
      .to(phase3Ref.current, { autoAlpha: 1, scale: 1, y: 0, duration: 1, ease: "power2.inOut" }, "fade2")
      
      .add("phase3") // Label 3
      .to({}, { duration: 0.2 }); // Final hold

  }, { scope: containerRef });

  const scrollTo = (id: string) => (window as any).scrollToSection?.(id);

  return (
    <section id="about" className="relative w-full h-screen bg-[#0F172A]" ref={containerRef}>
      
      {/* Background ambient glow (Static) */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-luxury-gold/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* The pinned container that holds all 3 phases stacked on top of each other */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">

        {/* ======================= PHASE 1 ======================= */}
        <div ref={phase1Ref} className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#0F172A] z-10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full mt-24">
            
            {/* Left Content */}
            <div className="flex flex-col justify-center z-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-luxury-gold" />
                <span className="text-[10px] tracking-[0.4em] uppercase font-black text-luxury-gold">Phase 01 — Who We Are</span>
              </div>
              
              <h2 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white mb-8 tracking-tight">
                Stories <br />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B]">Told Through</span><br />
                Light.
              </h2>
              
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-light mb-6 max-w-md">
                Based in Salem, Tamil Nadu, Lytro Kapture is a premium photography studio dedicated to preserving your most fleeting moments with cinematic precision.
              </p>
            </div>

            {/* Right Single Image */}
            <div className="relative w-full rounded-2xl overflow-hidden group cursor-pointer flex items-center justify-center">
              <img 
                src="/images/name-board.jpeg" 
                alt="Lytro Kapture" 
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          {/* Scroll Cue */}
          <button 
            onClick={() => (window as any).scrollToSection?.(window.scrollY + window.innerHeight * 0.75)}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce cursor-pointer hover:text-white transition-colors"
          >
            <span className="text-[9px] tracking-[0.35em] uppercase font-black">Scroll</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
        </div>

        {/* ======================= PHASE 2 ======================= */}
        <div ref={phase2Ref} className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#0F172A] invisible z-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full mt-24">
            
            {/* Left Content: Image Grid */}
            <div className="lg:col-span-7 relative h-[600px] w-full rounded-2xl">
              <div className="absolute top-0 left-0 w-[60%] h-[70%] rounded-2xl overflow-hidden z-10 border-8 border-[#0F172A]">
                <img src="/images/about-001.jpg" className="w-full h-full object-cover" alt="Wedding Detail" />
              </div>
              <div className="absolute bottom-0 right-0 w-[55%] h-[60%] rounded-2xl overflow-hidden z-20 border-8 border-[#0F172A]">
                <img src="/images/herobanner/006.jpg" className="w-full h-full object-cover" alt="Couple Portrait" />
              </div>
            </div>

            {/* Right Content: Stats & New Design */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-luxury-gold" />
                <span className="text-[10px] tracking-[0.4em] uppercase font-black text-luxury-gold">Phase 02 — The Details</span>
              </div>
              
              <h3 className="font-display font-light text-4xl text-white mb-8">
                Creating <span className="font-bold">Timeless</span> Memories
              </h3>
              
              <p className="text-white/70 text-base leading-relaxed font-light mb-10">
                From the vibrant energy of pre-wedding shoots across Pondicherry to the timeless grace of traditional portraits, we bring a high-fashion, editorial eye to your love story. Every frame is a testament to our dedication.
              </p>

              {/* Stats block */}
              <div className="grid grid-cols-2 gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                {[
                  { value: 120, suffix: '+', label: 'Shoots Completed' },
                  { value: 500, suffix: '+', label: 'Happy Clients' },
                ].map((s) => (
                  <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Scroll Cue */}
          <button 
            onClick={() => (window as any).scrollToSection?.(window.scrollY + window.innerHeight * 0.75)}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce cursor-pointer hover:text-white transition-colors"
          >
            <span className="text-[9px] tracking-[0.35em] uppercase font-black">Scroll</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
        </div>

        {/* ======================= PHASE 3 ======================= */}
        <div ref={phase3Ref} className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#0F172A] invisible z-30">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full flex items-center justify-center p-4 lg:p-12">
            <div className="relative w-full h-full max-h-[80vh] rounded-3xl overflow-hidden mt-16 group">
            
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
              src="https://cdn.pixabay.com/video/2021/08/04/83896-584742517_large.mp4" 
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-6 z-10">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] w-12 bg-luxury-gold" />
                  <span className="text-[10px] tracking-[0.4em] uppercase font-black text-luxury-gold">Phase 03 — Motion</span>
                </div>
                <h3 className="font-display font-light text-5xl md:text-7xl text-white">
                  Living <span className="font-bold text-luxury-gold">Cinema.</span>
                </h3>
              </div>
              
              <button onClick={() => scrollTo('portfolio')} className="btn-gold px-10 py-4 text-sm font-black rounded-full shadow-2xl shrink-0">
                Explore Portfolio
              </button>
            </div>

          </div>
        </div>
        </div>

      </div>
    </section>
  );
}
