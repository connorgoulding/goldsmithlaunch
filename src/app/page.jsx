'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, PenTool, TrendingUp, X, Check } from 'lucide-react';
import MagneticButton from '../components/ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-text", { y: 40, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 });

      // Sticky Protocol Cards
      const cards = gsap.utils.toArray('.protocol-card');
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: "blur(20px)",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: true
            }
          });
        }
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-48 pb-32 px-12 md:px-24 max-w-[1600px] mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-5xl z-10">
          <h1 className="flex flex-col gap-2 mb-8">
            <span className="hero-text font-outfit tracking-tighter text-6xl md:text-8xl text-[#1A1A1A] font-semibold uppercase leading-none">
              Plans don't ship.
            </span>
            <span className="hero-text font-serif italic text-7xl md:text-9xl text-[#CC5833] leading-none">
              Systems do.
            </span>
          </h1>
          <p className="hero-text text-[#1A1A1A]/70 font-sans max-w-xl text-lg leading-relaxed mb-12">
            We build automation, AI, and marketing systems that actually run. No more 200-slide strategy decks. Just working architectures deployed in 4-8 weeks.
          </p>
          <div className="hero-text w-max">
            <MagneticButton theme="moss" onClick={() => window.location.href='/book/consulting'}>
              Book a Discovery Call
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* THE COMPARISON MATRIX */}
      <section className="py-24 px-6 md:px-24 max-w-[1400px] mx-auto">
        <div className="hero-text mb-16 text-center">
          <h2 className="font-outfit text-4xl md:text-5xl text-[#1A1A1A]">The Industry Standard is <span className="font-serif italic text-[#CC5833]">Broken.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Typical Consultants */}
          <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-[#1A1A1A]/10 shadow-xl opacity-80">
            <h3 className="font-mono text-sm tracking-widest uppercase text-[#1A1A1A]/50 mb-8">Typical Consultants</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start font-sans text-lg"><X className="text-red-500 shrink-0 mt-1"/> Deliver beautiful 200-slide strategy decks.</li>
              <li className="flex gap-4 items-start font-sans text-lg"><X className="text-red-500 shrink-0 mt-1"/> 3-6 month timelines just to reach a prototype.</li>
              <li className="flex gap-4 items-start font-sans text-lg"><X className="text-red-500 shrink-0 mt-1"/> Leave you to figure out implementation alone.</li>
            </ul>
          </div>
          {/* Goldsmith Growth */}
          <div className="bg-[#1A1A1A] text-[#F2F0E9] rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#CC5833]/10 blur-[80px] rounded-full pointer-events-none" />
            <h3 className="font-mono text-sm tracking-widest uppercase text-[#CC5833] mb-8 relative z-10">Goldsmith Growth</h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex gap-4 items-start font-sans text-lg"><Check className="text-[#CC5833] shrink-0 mt-1"/> Deliver working, fully integrated systems.</li>
              <li className="flex gap-4 items-start font-sans text-lg"><Check className="text-[#CC5833] shrink-0 mt-1"/> 4-8 week execution from audit to deployment.</li>
              <li className="flex gap-4 items-start font-sans text-lg"><Check className="text-[#CC5833] shrink-0 mt-1"/> We build it, train your team, and optimize it.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3-PHASE PROTOCOL STACK */}
      <section className="relative w-full bg-[#F2F0E9] py-24">
        <div className="relative">
          {[
            {
              id: 1,
              title: "The Audit",
              price: "$2,500",
              desc: "We map your operational bottlenecks, audit your current tech stack, and design a custom blueprint for your new systems.",
              icon: <Search size={48} className="text-[#CC5833]" />
            },
            {
              id: 2,
              title: "The Build",
              price: "4-8 Weeks",
              desc: "We deploy custom logic, API webhooks, and HubSpot architectures. Your team gets working systems, not theory.",
              icon: <PenTool size={48} className="text-[#2E4036]" />
            },
            {
              id: 3,
              title: "Optimization",
              price: "Continuous",
              desc: "Systems require calibration. We monitor telemetry, integrate new AI models, and scale your pipeline velocity.",
              icon: <TrendingUp size={48} className="text-[#CC5833]" />
            }
          ].map((card, i) => (
            <div key={card.id} className="protocol-card sticky top-24 h-[80vh] w-full flex items-center justify-center p-6 md:p-12">
              <div className="w-full max-w-5xl h-full bg-white rounded-[3rem] shadow-2xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between border border-[#1A1A1A]/5 transition-transform duration-500 hover:scale-[1.01]">
                <div className="max-w-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-[#CC5833] text-sm tracking-widest uppercase">Phase 0{card.id}</span>
                    <span className="font-mono text-[#1A1A1A]/40 text-sm border border-[#1A1A1A]/10 px-3 py-1 rounded-full">{card.price}</span>
                  </div>
                  <h3 className="font-serif italic text-5xl md:text-7xl text-[#1A1A1A] mb-6">{card.title}</h3>
                  <p className="font-sans text-xl text-[#1A1A1A]/60 leading-relaxed">{card.desc}</p>
                </div>
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#F2F0E9] flex items-center justify-center shadow-inner mt-12 md:mt-0">
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}