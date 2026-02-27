'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';

export default function SmoothScroller() {
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

  return null; // This component doesn't render anything visible!
}
