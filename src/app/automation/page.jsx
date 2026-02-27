'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { Settings, Cpu, Network } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';

export default function AutomationPage() {
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
          <span className="hero-text font-mono text-[#CC5833] text-sm tracking-widest uppercase mb-6 block">01 / Operations Engineering</span>
          <h1 className="flex flex-col gap-2 mb-8">
            <span className="hero-text font-outfit tracking-tighter text-6xl md:text-8xl text-[#1A1A1A] font-semibold uppercase leading-none">
              Manual work is
            </span>
            <span className="hero-text font-serif italic text-7xl md:text-9xl text-[#CC5833] leading-none">
              Obsolete.
            </span>
          </h1>
          <p className="hero-text text-[#1A1A1A]/70 font-sans max-w-2xl text-lg leading-relaxed mb-12">
            Your team was hired to think, not to act as human middleware. We architect complex Make, Zapier, and custom API pipelines that connect your fragmented SaaS tools into a single, autonomous ecosystem.
          </p>
          <div className="hero-text flex flex-wrap gap-6 items-center">
            <MagneticButton theme="moss" onClick={() => window.location.href='/book/automation'}>
              Audit Your Workflows
            </MagneticButton>
            <Link href="/lexicon?tag=Automation" className="font-mono text-sm tracking-widest uppercase text-[#CC5833] hover:text-[#1A1A1A] transition-colors">
              Read Methodology →
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROP PROTOCOL */}
      <section className="py-24 px-12 md:px-24 bg-[#1A1A1A] text-[#F2F0E9] rounded-[3rem] mx-4 my-12 shadow-2xl">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <Settings size={40} className="text-[#CC5833] mb-6" />
            <h3 className="font-outfit text-2xl mb-4">State-of-the-Art Logic</h3>
            <p className="font-sans text-[#F2F0E9]/60 leading-relaxed">
              We don't build simple "if this, then that" zaps. We engineer multi-step, error-handling architectures that manage edge cases without human intervention.
            </p>
          </div>
          <div>
            <Cpu size={40} className="text-[#CC5833] mb-6" />
            <h3 className="font-outfit text-2xl mb-4">Secure AI Integration</h3>
            <p className="font-sans text-[#F2F0E9]/60 leading-relaxed">
              Leveraging our Microsoft-trained AI ethics background, we safely deploy LLMs into your internal workflows to summarize, classify, and draft data autonomously.
            </p>
          </div>
          <div>
            <Network size={40} className="text-[#CC5833] mb-6" />
            <h3 className="font-outfit text-2xl mb-4">API & Webhook Mastery</h3>
            <p className="font-sans text-[#F2F0E9]/60 leading-relaxed">
              When native integrations fail, we build custom webhooks to ensure your data flows instantly and flawlessly across your entire technology stack.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}