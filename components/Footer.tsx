const services = [
  "Frontend Development",
  "React / Next.js Apps",
  "UI / UX Implementation",
  "MERN Stack Projects",
];

const footerLinks = ["Home", "About", "Projects", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-white/6 px-8 md:px-12 py-12">
      <div className="max-w-300 mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">

          {/* Logo */}
          <div className="font-bebas text-[24px] tracking-[3px] text-white">
            Krishanta<span className="text-red-500">.</span>PORTFOLIO
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-oswald text-[12px] tracking-[2px] uppercase text-white/30 hover:text-white/70 transition"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Services */}
          <div className="font-oswald text-[11px] tracking-[2px] uppercase text-white/30 flex flex-wrap gap-x-3 gap-y-1">
            {services.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>

          {/* Copyright */}
          <div className="font-inter text-[12px] text-white/20">
            © 2026 Krishanta. Built with React & Next.js.
          </div>

        </div>
      </div>
    </footer>
  );
}