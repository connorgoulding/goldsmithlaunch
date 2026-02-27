'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { Target, BarChart2, Users } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';

export default function MarketingPage() {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-text", { y: 40, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-48 pb-32 px-12 md:px-24 max-w-[1600px] mx-auto min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-5xl z-10">
          <span className="hero-text font-mono text-[#2E4036] text-sm tracking-widest uppercase mb-6 block">02 / Revenue Architecture</span>
          <h1 className="flex flex-col gap-2 mb-8">
            <span className="hero-text font-outfit tracking-tighter text-6xl md:text-8xl text-[#1A1A1A] font-semibold uppercase leading-none">
              Guesswork is
            </span>
            <span className="hero-text font-serif italic text-7xl md:text-9xl text-[#2E4036] leading-none">
              Expensive.
            </span>
          </h1>
          <p className="hero-text text-[#1A1A1A]/70 font-sans max-w-2xl text-lg leading-relaxed mb-12">
            We engineer predictable revenue pipelines. Utilizing HubSpot and advanced data attribution, we build systems that capture attention, nurture leads autonomously, and close the loop on your marketing ROI.
          </p>
          <div className="hero-text flex flex-wrap gap-6 items-center">
            <MagneticButton theme="clay" onClick={() => window.location.href='/book/marketing'}>
              Audit Your Pipeline
            </MagneticButton>
            <Link href="/lexicon?tag=Marketing" className="font-mono text-sm tracking-widest uppercase text-[#2E4036] hover:text-[#CC5833] transition-colors">
              Read Methodology →
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROP PROTOCOL */}
      <section className="py-24 px-12 md:px-24 bg-[#2E4036] text-[#F2F0E9] rounded-[3rem] mx-4 my-12 shadow-2xl">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <Target size={40} className="text-[#CC5833] mb-6" />
            <h3 className="font-outfit text-2xl mb-4">HubSpot Ecosystems</h3>
            <p className="font-sans text-[#F2F0E9]/70 leading-relaxed">
              We structure your CRM not just as a Rolodex, but as a behavioral tracking engine that triggers hyper-personalized outreach the moment a prospect shows intent.
            </p>
          </div>
          <div>
            <Users size={40} className="text-[#CC5833] mb-6" />
            <h3 className="font-outfit text-2xl mb-4">AI Lead Nurturing</h3>
            <p className="font-sans text-[#F2F0E9]/70 leading-relaxed">
              Stop sending generic email blasts. We deploy dynamic sequences that adapt their messaging based on the specific actions your prospect takes on your digital properties.
            </p>
          </div>
          <div>
            <BarChart2 size={40} className="text-[#CC5833] mb-6" />
            <h3 className="font-outfit text-2xl mb-4">Multi-Touch Attribution</h3>
            <p className="font-sans text-[#F2F0E9]/70 leading-relaxed">
              Eliminate the "black box" of marketing spend. We connect your ad platforms, web analytics, and sales data so you know exactly which campaigns generate revenue.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}