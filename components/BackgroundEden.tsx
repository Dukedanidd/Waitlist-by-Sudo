"use client";

import { useEffect, useState } from "react";

// Generate random particles
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() < 0.5 ? "small" : Math.random() < 0.8 ? "medium" : "large",
    delay: Math.random() * 8,
  }));
};

export default function BackgroundEden() {
  const [particles, setParticles] = useState<Array<{id: number; x: number; y: number; size: string; delay: number}>>([]);
  const [mounted, setMounted] = useState(false);

  // Only generate particles on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    setParticles(generateParticles(120));
  }, []);

  // Regenerate particles on resize for better distribution
  useEffect(() => {
    if (!mounted) return;
    const handleResize = () => {
      setParticles(generateParticles(120));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mounted]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base layer: gradient + frame */}
      <div className="absolute inset-0 eden-gradient" />

      {/* Blobs animated (smooth and slow) */}
      <div className="eden-blob eden-blob--a" />
      <div className="eden-blob eden-blob--b" />
      <div className="eden-blob eden-blob--c" />

      {/* Curtain lines - 10 diagonal black lines moving - EXTREME BLACK, MAXIMUM VISIBILITY */}
      <div className="eden-curtain-line eden-curtain-line--1" />
      <div className="eden-curtain-line eden-curtain-line--2" />
      <div className="eden-curtain-line eden-curtain-line--3" />
      <div className="eden-curtain-line eden-curtain-line--4" />
      <div className="eden-curtain-line eden-curtain-line--5" />
      
      {/* Reverse direction lines */}
      <div className="eden-curtain-line eden-curtain-line--reverse eden-curtain-line--reverse-1" />
      <div className="eden-curtain-line eden-curtain-line--reverse eden-curtain-line--reverse-2" />
      <div className="eden-curtain-line eden-curtain-line--reverse eden-curtain-line--reverse-3" />
      <div className="eden-curtain-line eden-curtain-line--reverse eden-curtain-line--reverse-4" />
      <div className="eden-curtain-line eden-curtain-line--reverse eden-curtain-line--reverse-5" />

      {/* Fine grain to avoid banding */}
      <div className="absolute inset-0 eden-noise" />

      {/* Particles scattered across background - only render on client */}
      {mounted && particles.map((particle) => (
        <div
          key={particle.id}
          className={`eden-particle eden-particle--${particle.size}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
