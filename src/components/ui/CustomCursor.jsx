'use client';

import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cursor = cursorRef.current;
      const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
      const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

      const moveCursor = (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      const handleMouseOver = (e) => {
        const target = e.target.closest('[data-cursor]');
        if (!target) {
          gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, backgroundColor: '#CC5833' });
          textRef.current.innerText = '';
          return;
        }
        const type = target.getAttribute('data-cursor');
        if (type === 'hide') {
          gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
        } else if (type === 'view') {
          gsap.to(cursor, { scale: 3.5, backgroundColor: '#F2F0E9', mixBlendMode: 'difference', duration: 0.4, ease: "back.out(1.5)" });
          textRef.current.innerText = 'VIEW';
        }
      };

      window.addEventListener("mousemove", moveCursor);
      document.addEventListener("mouseover", handleMouseOver);
      return () => {
        window.removeEventListener("mousemove", moveCursor);
        document.removeEventListener("mouseover", handleMouseOver);
      };
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={cursorRef} className="fixed top-0 left-0 w-4 h-4 rounded-full bg-[#CC5833] pointer-events-none z-[9999] flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 mix-blend-normal hidden md:flex" >
      <span ref={textRef} className="text-[4px] font-sans font-bold text-[#1A1A1A] tracking-widest"></span>
    </div>
  );
}