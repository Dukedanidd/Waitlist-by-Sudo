"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  email: z.string().email("Please enter a valid email."),
});

type FormData = z.infer<typeof Schema>;

export default function WaitlistForm() {
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<FormData>({ resolver: zodResolver(Schema) });

  const onSubmit = async (data: FormData) => {
    setOk(null); setErr(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Something went wrong");
      setOk("You're in! We'll be in touch soon.");
      reset();
    } catch (e: any) {
      setErr(e.message || "Request failed");
    }
  };

  return (
    <>
      {/* Alert de carga - se muestra mientras se envía */}
      {isSubmitting && (
        <div className="alert alert-loading mb-4">
          <div className="flex items-center gap-3">
            <div className="spinner"></div>
            <span>Sending your email...</span>
          </div>
        </div>
      )}

      {/* Alert de éxito - se muestra cuando se envió correctamente */}
      {ok && (
        <div className="alert alert-success mb-4">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{ok}</span>
          </div>
        </div>
      )}

      {/* Alert de error - se muestra si hay un error */}
      {err && (
        <div className="alert alert-error mb-4">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>{err}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            className="
            block w-full rounded-xl 
            border-2 border-purple-300/40 bg-white/50
            focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-400/30
            hover:border-purple-400/60
            px-4 py-3 text-base
            transition-all duration-300
            animate-input
          "
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full rounded-xl px-4 py-3 text-base font-medium
            bg-purple-800 text-white
            hover:bg-purple-700 disabled:opacity-50
            shadow-sm ring-1 ring-black/10
            transition-all duration-300
            animate-button
          "
        >
          {isSubmitting ? "Joining..." : "Join the waitlist"}
        </button>
      </form>
    </>
  );
}
