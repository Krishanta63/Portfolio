"use client";

import {
  Code2,
  MonitorSmartphone,
  Layers3,
  Rocket,
  Brain,
  Users,
  PenTool,
} from "lucide-react";



const skills = [
  {
    icon: <Code2 size={22} />,
    title: "Web Development",
  },
  {
    icon: <PenTool size={22} />,
    title: "UI/UX Design",
  },
  {
    icon: <MonitorSmartphone size={22} />,
    title: "Frontend Development",
  },
  {
    icon: <Layers3 size={22} />,
    title: "Responsive Design",
  },
  {
    icon: <Rocket size={22} />,
    title: "Prototyping",
  },
];


const tools = [
  "VS Code",
  "Git & GitHub",
  "Figma",
  "Compass",
  "Post",
  "Premiere Pro",
];

const approaches = [
  {
    num: "01",
    title: "Research & Strategy",
    text: "Understanding user needs and brand goals before designing anything.",
  },
  {
    num: "02",
    title: "Collaboration",
    text: "Working closely with clients to turn ideas into real designs.",
  },
  {
    num: "03",
    title: "Visual Storytelling",
    text: "Turning ideas into clean, meaningful, and engaging visuals.",
  },
  {
    num: "04",
    title: "Problem Solving",
    text: "Creating simple and effective design solutions for real problems.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-red-500/10 text-white relative overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-20 md:py-28">

        {/* HEADING */}
        <div className="flex items-baseline gap-6 mb-14 flex-wrap">
          <h2 className="font-bebas text-white leading-none text-[clamp(52px,7vw,88px)]">
            SKILLS
          </h2>

          <span className="font-bebas text-[clamp(52px,7vw,88px)] text-transparent"
            style={{
              WebkitTextStroke: "2px rgba(255,255,255,0.4)",
            }}>
            & TOOLS
          </span>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* COLUMN 1 */}
          <div>
            <h3 className="text-xs uppercase tracking-[3px] text-white/50 mb-6 border-b border-white/20 pb-3">
              What I Do
            </h3>

             {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300"
                >

                  <div className="text-red-500">
                    {skill.icon}
                  </div>

                  <h4 className="font-semibold text-lg group-hover:translate-x-1 transition-all duration-300">
                    {skill.title}
                  </h4>
                </div>
              ))}
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-xs uppercase tracking-[3px] text-white/50 mb-6 border-b border-white/20 pb-3">
              My Tools
            </h3>

            <div className="flex flex-wrap gap-2 mb-10">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 border border-white/30 text-sm uppercase tracking-wide transition-all duration-200 hover:bg-white hover:text-red-500 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>

            <h3 className="text-xs uppercase tracking-[3px] text-white/50 mb-4 border-b border-white/20 pb-3">
              Education
            </h3>

            <p className="font-semibold">Self-Taught + Online Learning</p>
            <p className="text-white/50 text-sm mt-1">
              Focused on UI/UX & Frontend Development (MERN Stack)
            </p>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-xs uppercase tracking-[3px] text-white/50 mb-6 border-b border-white/20 pb-3">
              My Approach
            </h3>

            {approaches.map((item) => (
              <div key={item.num} className="mb-5">
                <h4 className="font-bold mb-1">
                  {item.num} — {item.title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}