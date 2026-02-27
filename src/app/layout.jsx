'use client'; 

import './globals.css';
import React, { useEffect } from 'react';
import Lenis from 'lenis'; 
import { gsap } from 'gsap';

import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CustomCursor from '../components/ui/CustomCursor';
import NoiseOverlay from '../components/ui/NoiseOverlay';

// 1. THIS is the correct way to set titles in Next.js
// It allows the framework to inject your CSS properly!
export const metadata = {
  title: 'Goldsmith Growth | Enterprise AI & Operations',
  description: 'We build automation, AI, and marketing systems that actually run.',
};

export default function RootLayout({ children }) {
  useEffect(() => {
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
      {/* 2. We completely removed the manual <head> tag that was blocking the CSS */}
      <body className="bg-[#F2F0E9] text-[#1A1A1A] font-sans selection:bg-[#CC5833] selection:text-[#F2F0E9] cursor-none">
        
        <CustomCursor />
        <NoiseOverlay />
        <Navbar />
        
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
