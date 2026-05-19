"use client";

import { useEffect, useState } from "react";
import AvatarSVG from "./AvatarSVG";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-bg flex items-center justify-center overflow-hidden pt-20">

      {/* Vertical lines */}
      <div className="absolute inset-0 flex justify-between px-[25%] pointer-events-none">
        <div className="w-px bg-white/5" />
        <div className="w-px bg-white/5" />
        <div className="w-px bg-white/5" />
      </div>

      {/* Background text */}
      <h1 className="absolute text-[15vw] font-bebas text-white/5 select-none tracking-wider">
        FRONTEND
      </h1>

      <div className="relative z-10 max-w-[1200px] w-full px-8 md:px-12 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* Tag */}
          <p
            className={`text-red-500 tracking-[4px] uppercase text-xs transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0 translate-y-5"
              }`}
          >
            Frontend Developer • UI/UX Explorer • MERN
          </p>

          {/* Title */}
          <h1
            className={`font-bebas text-white leading-[0.85] transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0 translate-y-8"
              }`}
            style={{ fontSize: "clamp(70px, 12vw, 95px)" }}
          >
            BUILDING
            <br />

            <span className="text-white/80 tracking-wide">
              INTERFACES
            </span>

            <br />

            <span className="text-red-500">
              THAT FEEL <span className="text-white">RIGHT</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/50 max-w-sm text-sm leading-relaxed">
            Frontend developer focused on UI systems, interaction design, and
            modern web experiences using React and Next.js.
          </p>

          {/* Button */}
          <Link href="#portfolio" className="inline-block">
          <button className="px-6 py-3 border border-white/20 text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300">
            Explore Projects ↗
          </button>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`relative flex justify-center items-center transition-all duration-1000 ${mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }`}
        >

          {/* Glow */}
          <div className="absolute w-[500px] h-[500px] bg-red-500/10 blur-[120px] rounded-full" />

          {/* Avatar */}
          <div className="relative z-10">
            <AvatarSVG />
          </div>

          {/* Role text */}
          <div className="absolute bottom-4 left-35 text-white/60 text-sm tracking-[3px] font-bebas">
            CREATIVE DEVELOPER
          </div>

           <div className="absolute top-10 right-6 md:right-16 z-20">

            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-red-500 shadow-[0_0_40px_rgba(255,0,0,0.35)]">

              {/* Pulse */}
              <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20" />

              <div className="text-center text-white text-[11px] uppercase tracking-[2px] font-semibold leading-tight">
                Available
                <br />
                For
                <br />
                Hire
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}