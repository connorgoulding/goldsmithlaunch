'use client';

import './globals.css';
import React, { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CustomCursor from '../components/ui/CustomCursor';
import NoiseOverlay from '../components/ui/NoiseOverlay';

export default function RootLayout({ children }) {
  const lenisRef = useRef(null);

  // Sync GSAP with Lenis for global butter-smooth animations
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Goldsmith Growth | Enterprise AI & Operations</title>
      </head>
      <body className="bg-[#F2F0E9] text-[#1A1A1A] font-sans selection:bg-[#CC5833] selection:text-[#F2F0E9] cursor-none">
        <CustomCursor />
        <NoiseOverlay />
        <Navbar />
        <ReactLenis root ref={lenisRef} autoRaf={false}>
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
