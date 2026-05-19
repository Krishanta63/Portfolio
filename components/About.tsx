"use client";

import AvatarSVG from "./AvatarSVG";

const stats = [
  { num: "1+", label: "Years Learning" },
  { num: "10+", label: "Projects Built" },
  { num: "5+", label: "UI Designs" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black overflow-hidden py-24 md:py-32"
    >

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-[140px] rounded-full" />

      {/* Grid Lines */}
      <div className="absolute inset-0 flex justify-between px-[12%] opacity-30 pointer-events-none">
        <div className="w-px bg-white/5" />
        <div className="w-px bg-white/5" />
        <div className="w-px bg-white/5" />
      </div>

      {/* Huge Background Text */}
      <h1 className="absolute inset-0 flex items-center justify-center text-[15vw] font-black text-white/[0.03] tracking-tight select-none pointer-events-none">
        ABOUT
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* Top Tag */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-red-500" />

            <p className="uppercase tracking-[4px] text-red-500 text-xs md:text-sm">
              Web Developer & UI Designer
            </p>
          </div>

          {/* Heading */}
          <h2
            className="font-black uppercase leading-[0.9] text-white mb-8"
            style={{
              fontSize: "clamp(4rem,8vw,7rem)",
            }}
          >
            ABOUT
            <br />

            <span className="text-white/70">
              ME
            </span>
          </h2>

          {/* Description */}
          <p className="text-white/55 leading-[1.9] text-[15px] max-w-[560px] mb-12">
            I&apos;m Krishanta Shrestha, a passionate frontend developer and UI
            designer focused on crafting modern, responsive, and visually
            immersive digital experiences. Currently learning the MERN stack and
            building real-world projects that improve both my design thinking
            and development skills.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-12">

            {stats.map((s) => (
              <div key={s.label}>
                <h3 className="text-5xl font-bold text-red-500">
                  {s.num}
                </h3>

                <p className="uppercase tracking-[3px] text-white/40 text-xs mt-2">
                  {s.label}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">

          <div className="grid grid-cols-2 gap-5 max-w-[420px]">

            {/* Main Image Card */}
            <div className="col-span-2 bg-[#111] border border-white/10 rounded-3xl p-5 relative overflow-hidden">

              {/* Glow */}
              <div className="absolute inset-0 bg-red-500/10 blur-3xl" />

              <div className="relative z-10 flex justify-center">
                <img
                  src="/image/profile.png"
                  alt="profile"
                  className="w-[240px] object-cover rounded-2xl"
                />
              </div>

              {/* Badge */}
              <div className="absolute top-3 right-7 w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-center text-white font-semibold leading-tight shadow-[0_0_30px_rgba(255,0,0,0.4)]">
                OPEN
                <br />
                TO
                <br />
                WORK
              </div>

            </div>

            {/* Skill Card */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-5">
              <h3 className="text-red-500 text-2xl font-bold">MERN</h3>
              <p className="text-white/50 text-sm mt-2">
                MongoDB, Express, React, Node.js
              </p>
            </div>

            {/* UI Card */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-5">
              <h3 className="text-red-500 text-2xl font-bold">UI/UX</h3>
              <p className="text-white/50 text-sm mt-2">
                Modern responsive interface design
              </p>
            </div>

            {/* Quote Card */}
            <div className="col-span-2 bg-[#111] border border-white/10 rounded-2xl p-5">
              <p className="text-white/70 leading-relaxed">
                “I enjoy creating interfaces that feel smooth, modern,
                and visually engaging.”
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}