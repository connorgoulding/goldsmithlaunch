'use client'; 

import './globals.css';
import React, { useEffect } from 'react';
import Lenis from 'lenis'; // <-- Pure Vanilla JS! No React version conflicts.
import { gsap } from 'gsap';

import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CustomCursor from '../components/ui/CustomCursor';
import NoiseOverlay from '../components/ui/NoiseOverlay';

export default function RootLayout({ children }) {
  useEffect(() => {
    // Initialize Vanilla Lenis
    const lenis = new Lenis({ autoRaf: false });
    
    function update(time) {
      lenis.raf(time * 1000);
    }
    
    gsap.ticker.add(update);
    
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Enterprise AI & Operations | Goldsmith Growth</title>
      </head>
      <body className="bg-[#F2F0E9] text-[#1A1A1A] font-sans selection:bg-[#CC5833] selection:text-[#F2F0E9] cursor-none">
        
        <CustomCursor />
        <NoiseOverlay />
        <Navbar />
        
        {/* We removed the broken <ReactLenis> wrapper completely! */}
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
