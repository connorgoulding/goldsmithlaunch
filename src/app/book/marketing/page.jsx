'use client';

import React from 'react';
import Link from 'next/link';
import DiagnosticTerminal from '../../../components/ui/DiagnosticTerminal';

export default function BookMarketingPage() {
  return (
    <div className="relative min-h-screen bg-[#1A1A1A] flex flex-col items-center justify-center p-6 md:p-12 w-full">
      {/* Background Cinematic Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#2E4036]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl mt-12 md:mt-24">
        <div className="mb-8 text-center">
          <Link href="/marketing" className="font-mono text-xs text-[#F2F0E9]/50 tracking-widest uppercase hover:text-[#CC5833] transition-colors" data-cursor="hide">
            ← Abort Sequence / Return to Revenue
          </Link>
        </div>

        {/* The Diagnostic Component set to Marketing logic */}
        <DiagnosticTerminal type="marketing" />

        <div className="mt-8 text-center">
          <p className="font-mono text-[10px] text-[#F2F0E9]/30 uppercase tracking-widest">
            End-to-end encryption enabled. Telemetry data is confidential.
          </p>
        </div>
      </div>
    </div>
  );
}