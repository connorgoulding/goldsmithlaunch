'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll blur effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Automatically close menu if the user clicks a link
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'AUTOMATION', path: '/automation' },
    { name: 'MARKETING', path: '/marketing' },
    { name: 'BLOG', path: '/lexicon' },
  ];

  return (
    <>
      {/* THE MAIN PILL NAV */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-6 md:px-8 py-4 transition-all duration-500 flex items-center justify-between md:justify-center w-[90vw] md:w-auto md:gap-12 border ${
        isOpen 
          ? 'bg-transparent border-transparent text-[#F2F0E9]' // Turns white/transparent when menu is open!
          : isScrolled 
            ? 'bg-white/70 backdrop-blur-xl border-[#2E4036]/10 text-[#2E4036] shadow-2xl' 
            : 'bg-transparent border-transparent text-[#1A1A1A]'
      }`}>
        <Link href="/" className="font-bold tracking-tight text-lg hover:opacity-70 transition-opacity z-50" data-cursor="hide">
          GOLDSMITH
        </Link>
        
        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 text-sm font-medium z-50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              data-cursor="hide"
              className={`transition-colors ${pathname === link.path ? 'text-[#CC5833]' : 'hover:opacity-70'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Desktop Button (Hidden on Mobile) */}
        <div className="hidden md:block z-50">
          <MagneticButton theme={isScrolled ? "moss" : "outline"} className="!py-2 !px-6 text-xs" onClick={() => window.location.href='/book/consulting'}>
            Initiate
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Toggle (Hidden on Desktop) */}
        <button 
          className="md:hidden z-50 p-2 -mr-2 transition-transform active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* FULL SCREEN CINEMATIC MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 z-40 bg-[#1A1A1A] flex flex-col items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[#CC5833]/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex flex-col items-center gap-10 z-10 w-full px-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`font-outfit text-4xl font-semibold tracking-tighter transition-colors ${
                pathname === link.path ? 'text-[#CC5833]' : 'text-[#F2F0E9] hover:text-[#CC5833]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="mt-8 w-full max-w-xs">
            <MagneticButton theme="clay" className="w-full justify-center !py-4" onClick={() => { setIsOpen(false); window.location.href='/book/consulting'; }}>
              Initiate System
            </MagneticButton>
          </div>
        </div>

        <div className="absolute bottom-12 text-center">
          <span className="font-mono text-[10px] text-[#F2F0E9]/30 tracking-widest uppercase">
            Goldsmith Operations Architecture
          </span>
        </div>
      </div>
    </>
  );
}
