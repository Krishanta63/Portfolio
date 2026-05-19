import Link from "next/link";

export default function FrontendShowcase() {
  return (
    <section
      id="frontend"
      className="bg-bg text-white border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 items-center">

        {/* LEFT */}
        <div>

          <div className="text-white/30 text-[11px] tracking-[4px] uppercase mb-3">
            Showcase — 02
          </div>

          <h2 className="font-bebas leading-[0.9] mb-7 text-[clamp(52px,7vw,90px)]">
            FRONTEND
            <br />
            <span className="text-red-500">DEVELOPMENT</span>
            <br />
            <span className="text-stroke-white-thin">PROJECTS</span>
          </h2>

          <p className="text-white/50 text-sm leading-[1.75] mb-10 max-w-[380px]">
            I build modern, responsive and interactive web applications using React,
            Next.js and Tailwind CSS. Focused on clean UI, performance, and real-world usability.
          </p>


          {/* <Link href="#portfolio" >
            <button className="px-8 py-4 border border-white/30 text-sm uppercase tracking-[2px] hover:bg-red-500 hover:border-red-500 transition">
              View Projects ↗
            </button>
          </Link> */}

          <Link
            href="#portfolio"
            className="inline-block px-8 py-4 border border-white/30 !text-white text-sm uppercase tracking-[2px] hover:bg-red-500 hover:!text-white hover:border-red-500 transition-all duration-300"
          >
             View Project ↗
          </Link>

        </div>

        {/* RIGHT */}
        <div className="relative h-[480px]">

          {/* PROJECT CARD 1 */}
          <div className="absolute left-0 top-10 w-[160px] h-[280px] bg-[#1a1a1a] border border-white/10 flex flex-col items-center justify-center text-center">

            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bebas text-xl">
              R
            </div>

            <p className="mt-3 text-sm font-bold">React App</p>
            <p className="text-xs text-white/40">UI Dashboard</p>

          </div>

          {/* PROJECT CARD 2 */}
          <div className="absolute right-0 top-0 w-[260px] h-[360px] bg-[#111] border border-white/10 flex flex-col items-center justify-center text-center">

            <div className="w-full h-20" />

            <h3 className="font-bebas text-3xl mt-6">NEXT.JS</h3>

            <p className="text-xs text-white/50 mt-2">
              Full Stack Web App
            </p>

            <p className="mt-6 text-sm text-white/70 px-6">
              Building scalable applications with API integration and authentication.
            </p>

          </div>

          {/* FLOATING STATS */}
          <div className="absolute bottom-5 left-20 bg-[#111] border border-white/10 px-5 py-4">

            <p className="text-red-500 text-[10px] uppercase tracking-[3px]">
              Projects Built
            </p>

            <p className="text-3xl font-bebas">10+</p>

            <p className="text-xs text-white/30">
              React + Next.js + Tailwind
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}