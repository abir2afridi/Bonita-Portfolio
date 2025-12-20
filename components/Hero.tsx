import React, { useState, useRef } from 'react';
import { ArrowUpRight, ArrowDown, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX / width - 0.5) * 20; // range -10 to 10
    const y = (e.clientY / height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const marqueeItems = [
    { text: "BRANDING", type: "solid" },
    { text: "EDITORIAL", type: "outline" },
    { text: "LAYOUT", type: "solid" },
    { text: "ART DIRECTION", type: "outline" },
    { text: "SOCIAL MEDIA", type: "solid" },
    { text: "PRINT DESIGN", type: "outline" },
    { text: "TYPOGRAPHY", type: "solid" },
  ];

  const TickerContent = () => (
    <>
      {marqueeItems.map((item, i) => (
        <span 
          key={i} 
          className={`text-sm md:text-3xl tracking-[0.3em] uppercase px-8 flex items-center gap-4 ${
            item.type === 'outline' ? 'text-outline font-black' : 'text-[#f3f1ea] font-bold'
          }`}
        >
          {item.text}
          <span className="w-2 h-2 rounded-full bg-accent/40 block"></span>
        </span>
      ))}
    </>
  );

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="home" 
      className="relative w-full min-h-screen flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-paper border-b border-stone-300 pt-24"
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none z-10 mix-blend-multiply"></div>
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
         <div className="absolute left-1/4 h-full w-px bg-stone-500"></div>
         <div className="absolute right-1/4 h-full w-px bg-stone-500"></div>
         <div className="absolute top-1/3 w-full h-px bg-stone-500"></div>
         <div className="absolute bottom-1/3 w-full h-px bg-stone-500"></div>
      </div>

      {/* Top Bar Info */}
      <div className="flex justify-between items-start z-20 relative animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
             <span className="font-bold text-[10px] md:text-xs tracking-[0.2em] text-stone-500 uppercase">Available for work</span>
          </div>
          <h2 className="font-bold text-lg md:text-xl tracking-tight text-ink uppercase mt-2">Graphic Layouter</h2>
        </div>
        <div className="flex flex-col items-end">
           <div className="font-serif italic text-2xl md:text-3xl text-ink">2024</div>
           <span className="text-[10px] uppercase tracking-widest text-stone-400">Jakarta, Indonesia</span>
        </div>
      </div>

      {/* Main Title & Ticker Layout */}
      <div className="relative z-20 flex-1 flex flex-col justify-center items-center py-12 md:py-0 w-full">
        
        {/* Abstract Glow Background */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse transition-transform duration-1000 ease-out"
          style={{ transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))` }}
        ></div>

        {/* PORT */}
        <div 
          className="relative text-center mix-blend-difference z-20 transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` }}
        >
           <h1 className="text-[18vw] leading-[0.8] font-black tracking-tighter text-ink select-none -rotate-2">
             <span className="block animate-fade-in-up opacity-0 transform hover:scale-105 transition-transform duration-500" style={{ animationDelay: '0.2s' }}>PORT</span>
           </h1>
        </div>

        {/* Live Ticker (Marquee) */}
        <div className="relative w-[130%] -rotate-2 bg-ink py-4 md:py-6 z-30 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-y-2 border-white/5 mix-blend-normal my-4 md:my-2 group transition-transform duration-500 hover:scale-[1.02]">
          <div className="flex w-max">
              <div className="animate-scroll whitespace-nowrap flex gap-0 min-w-full items-center will-change-transform">
                  <TickerContent />
                  <TickerContent />
              </div>
              <div className="animate-scroll whitespace-nowrap flex gap-0 min-w-full items-center will-change-transform" aria-hidden="true">
                  <TickerContent />
                  <TickerContent />
              </div>
          </div>
        </div>

        {/* FOLIO */}
        <div 
          className="relative text-center mix-blend-difference z-20 transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` }}
        >
           <h1 className="text-[18vw] leading-[0.8] font-black tracking-tighter text-ink select-none -rotate-2">
             <span className="block animate-fade-in-up opacity-0 transform hover:scale-105 transition-transform duration-500" style={{ animationDelay: '0.35s' }}>FOLIO</span>
           </h1>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-end z-20 relative mt-8 gap-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
        
        {/* Scroll Indicator */}
        <a href="#profile" className="hidden md:flex items-center gap-3 text-xs uppercase tracking-widest text-stone-500 hover:text-ink transition-colors group">
           <div className="w-10 h-10 border border-stone-300 rounded-full flex items-center justify-center group-hover:border-ink transition-colors bg-white/50 backdrop-blur-sm">
             <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
           </div>
           <span>Scroll</span>
        </a>

        <div className="text-right">
          <div className="flex flex-col items-end">
             <div className="flex items-center gap-1 mb-2">
                <Star size={12} fill="currentColor" className="text-accent animate-spin-slow" />
                <Star size={12} fill="currentColor" className="text-accent animate-spin-slow" style={{ animationDuration: '8s' }} />
                <Star size={12} fill="currentColor" className="text-accent animate-spin-slow" style={{ animationDuration: '15s' }} />
             </div>
             <div className="text-ink font-bold text-4xl md:text-6xl tracking-tighter opacity-100 mix-blend-difference">DESIGN</div>
          </div>
          <div className="flex items-center justify-end gap-2 text-ink mt-2 group cursor-pointer">
            <span className="uppercase tracking-[0.2em] text-xs font-bold border-b border-transparent group-hover:border-ink transition-colors">View Projects</span>
            <ArrowUpRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </div>
      
      {/* Plastic wrap effect simulation */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5 pointer-events-none z-30"></div>
    </section>
  );
};

export default Hero;