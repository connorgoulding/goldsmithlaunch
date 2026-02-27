'use client';

import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export default function MagneticButton({ children, theme = 'clay', className = '', onClick }) {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  const themeMap = {
    clay: { default: '#CC5833', hover: '#1A1A1A', text: '#F2F0E9' },
    moss: { default: '#2E4036', hover: '#CC5833', text: '#F2F0E9' },
    outline: { default: 'transparent', hover: '#1A1A1A', text: '#1A1A1A' }
  };

  const activeTheme = themeMap[theme];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const button = buttonRef.current;
      const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
      const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });
      const textXTo = gsap.quickTo(textRef.current, "x", { duration: 0.8, ease: "power4.out" });
      const textYTo = gsap.quickTo(textRef.current, "y", { duration: 0.8, ease: "power4.out" });

      const handleMouseMove = (e) => {
        const { height, width, left, top } = button.getBoundingClientRect();
        xTo((e.clientX - (left + width / 2)) * 0.4);
        yTo((e.clientY - (top + height / 2)) * 0.4);
        textXTo((e.clientX - (left + width / 2)) * 0.2);
        textYTo((e.clientY - (top + height / 2)) * 0.2);
      };

      const handleMouseEnter = () => gsap.to(bgRef.current, { yPercent: 0, duration: 0.5, ease: "power3.out" });
      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
        textXTo(0);
        textYTo(0);
        gsap.to(bgRef.current, { yPercent: 100, duration: 0.5, ease: "power3.out" });
      };

      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        button.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, buttonRef);
    return () => ctx.revert();
  }, []);

  return (
    <button ref={buttonRef} onClick={onClick} data-cursor="hide" className={`relative flex items-center justify-center px-8 py-4 rounded-full overflow-hidden w-full ${theme === 'outline' ? 'border border-[#1A1A1A]' : ''} ${className}`} style={{ backgroundColor: activeTheme.default, color: activeTheme.text }} >
      <div ref={bgRef} className="absolute inset-0 w-full h-full rounded-full pointer-events-none translate-y-full" style={{ backgroundColor: activeTheme.hover }} />
      <span ref={textRef} className={`relative z-10 font-outfit font-medium tracking-wide ${theme === 'outline' ? 'group-hover:text-[#F2F0E9] transition-colors duration-500' : ''}`}>
        {children}
      </span>
    </button>
  );
}