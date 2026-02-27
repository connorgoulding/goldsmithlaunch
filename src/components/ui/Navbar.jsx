'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'AUTOMATION', path: '/automation' },
    { name: 'MARKETING', path: '/marketing' },
    { name: 'BLOG', path: '/lexicon' },
  ];

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-8 py-4 transition-all duration-500 flex items-center gap-12 border ${
      isScrolled ? 'bg-white/70 backdrop-blur-xl border-[#2E4036]/10 text-[#2E4036] shadow-2xl' : 'bg-transparent border-transparent text-[#1A1A1A]'
    }`}>
      <Link href="/" className="font-bold tracking-tight text-lg hover:text-[#CC5833] transition-colors" data-cursor="hide">
        GOLDSMITH
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-medium">
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
      <div className="hidden md:block">
        <MagneticButton theme="outline" className="!py-2 !px-6 text-xs" onClick={() => window.location.href='/book/consulting'}>
          Initiate
        </MagneticButton>
      </div>
    </nav>
  );
}
