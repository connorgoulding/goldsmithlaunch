import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F2F0E9] rounded-t-[4rem] px-12 md:px-24 py-16 mt-24 relative z-10">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div>
          <span className="font-bold tracking-tight text-3xl block mb-6">GOLDSMITH GROWTH</span>
          <div className="flex items-center gap-3 font-mono text-xs text-[#F2F0E9]/50 bg-white/5 px-4 py-2 rounded-full w-max">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            SYSTEMS OPERATIONAL
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 font-sans text-sm text-[#F2F0E9]/70">
          <Link href="/AUTOMATION" className="hover:text-white transition-colors" data-cursor="hide">Automation Ops</Link>
          <Link href="/MARKETING" className="hover:text-white transition-colors" data-cursor="hide">Revenue Marketing</Link>
          <Link href="/BLOG" className="hover:text-white transition-colors" data-cursor="hide">Lexicon</Link>
          <Link href="/PRIVACY" className="hover:text-[#CC5833] transition-colors" data-cursor="hide">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
