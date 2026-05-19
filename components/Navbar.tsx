"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { link } from "fs";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >

      {/* Logo */}
      <div className="font-bebas text-2xl tracking-[3px] text-white cursor-pointer">
        KRISHANTA<span className="text-red-500">.</span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-9">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-oswald text-[13px] tracking-[2px] uppercase text-white/50 hover:text-red-500 transition"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="#contact"
        className="hidden md:block font-oswald text-[12px] tracking-[2px] uppercase bg-red-500 text-white px-6 py-[10px] hover:opacity-80 transition"
      >
        Contact Me
      </Link>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`w-6 h-0.5 bg-white transition ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`w-6 h-0.5 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`w-6 h-0.5 bg-white transition ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg/95 backdrop-blur-md border-t border-white/[0.06] p-8 flex flex-col gap-6 md:hidden">

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-oswald text-2xl tracking-[2px] uppercase text-white hover:text-red-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={"#contact"}
            className="font-oswald text-sm tracking-[2px] uppercase bg-red-500 text-white px-6 py-3 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Contact Me
          </Link>

        </div>
      )}
    </nav>
  );
}