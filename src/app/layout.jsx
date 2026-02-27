import './globals.css';
import React from 'react';

import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CustomCursor from '../components/ui/CustomCursor';
import NoiseOverlay from '../components/ui/NoiseOverlay';
import SmoothScroller from '../components/ui/SmoothScroller'; // <-- Our new component!

export const metadata = {
  title: 'Enterprise AI & Operations | Goldsmith Growth',
  description: 'We build automation, AI, and marketing systems that actually run.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F2F0E9] text-[#1A1A1A] font-sans selection:bg-[#CC5833] selection:text-[#F2F0E9] cursor-none">
        
        {/* We moved the client-side scrolling logic here */}
        <SmoothScroller /> 
        
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
