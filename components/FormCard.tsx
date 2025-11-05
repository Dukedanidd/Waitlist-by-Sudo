"use client";

import WaitlistForm from "./WaitlistForm";

export default function FormCard() {
  return (
    <section className="card relative z-10 w-full max-w-xl rounded-2xl p-6 sm:p-10 text-center bg-white/90 border-2 border-purple-500/30 backdrop-blur-md shadow-2xl shadow-purple-950/20 ring-2 ring-purple-400/20 animate-fade-in-up">
      {/* Logo / icon - Rotación y escala */}
      <div className="mx-auto mb-4 grid place-items-center">
        <div className="size-12 grid place-items-center rounded-xl bg-purple-900/10 ring-1 ring-black/5 transition-transform hover:scale-110 animate-logo">
          <span className="text-2xl text-purple-900">✳︎</span>
        </div>
      </div>

      {/* Main brand - Slide desde izquierda */}
      <h1 className="text-5xl sm:text-6xl font-serif text-purple-900 animate-title">
        sudo <sup className="text-xs align-super text-purple-700/70">beta</sup>
      </h1>

      {/* Subtítulo 1 - Fade y escala */}
      <p className="mt-6 text-neutral-700 animate-subtitle-1">
        The workspace for creators
      </p>

      {/* Subtítulo 2 - Slide desde abajo */}
      <p className="mt-2 text-neutral-500 animate-subtitle-2">
        Capture anything. Remember everything. <br className="hidden sm:block" />
        Put your digital garden to work with AI.
      </p>

      {/* Form - Fade in */}
      <div className="mt-6 animate-form-container">
        <WaitlistForm />
      </div>

      {/* Legal links - Slide desde derecha */}
      <div className="mt-6 text-xs text-neutral-500 animate-links">
        <a href="/terms" className="underline underline-offset-2 hover:text-neutral-700 transition-colors">
          Terms of Service
        </a>
        <span className="px-2">|</span>
        <a href="/privacy" className="underline underline-offset-2 hover:text-neutral-700 transition-colors">
        Privacy
        </a>
      </div>
    </section>
  );
}
