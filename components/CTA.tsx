import {
  Mail,
} from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


const contacts = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    href: "mailto:Cresthakrishanta63@gmail.com",
  },
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/krishantashrestha",
  },
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    href: "https://github.com/Krishanta63",
  },
  {
    icon: <FaInstagram size={18} />,
    label: "Instagram",
    href: "https://instagram.com/youh_Lay",
  },
];

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-bg relative overflow-hidden border-t border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-24 md:py-32">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 text-red-500 text-xs tracking-[4px] uppercase mb-5 font-oswald">
          <span className="block w-8 h-px bg-red-500" />
          Open for internships & frontend roles
        </div>

        {/* Heading */}
        <h2
          className="font-bebas leading-[0.88] mb-12 text-white"
          style={{
            fontSize: "clamp(60px, 10vw, 130px)",
            letterSpacing: "-2px",
          }}
        >
          LET&apos;S
          <br />
          BUILD <span className="text-red-500">SOMETHING</span>
          <br />
          <span className="text-stroke-white">COOL</span>
        </h2>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">

          {/* Contacts */}
          <div className="flex flex-col gap-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-white/60 hover:text-white transition font-inter text-[14px]"
              >
                <div className="w-9 h-9 border border-white/15 flex items-center justify-center">
                  {c.icon}
                </div>

                {c.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="tel:+9779761616129"
            className="font-bebas text-[18px] tracking-[3px] bg-red-500 text-white px-12 py-5 hover:opacity-90 transition hover:shadow-lg flex items-center gap-2 inline-flex"
          >
            CONTACT ME ↗
          </a>
        </div>
      </div>
    </section>
  );
}