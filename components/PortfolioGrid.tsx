"use client";

interface Project {
  id: number;
  category: string;
  title: string;
  gridClass: string;
  bgLabel: string;
  link: string;
  image?: string; // Optional image property for future use
}

const projects: Project[] = [
  {
    id: 1,
    category: "React UI",
    title: "E-commerce",
    gridClass: "col-span-12 md:col-span-7",
    bgLabel: "REACT",
    link: "https://electrowebsite.vercel.app/",
    image: "/image/image.png", // Placeholder image path
  },
  {
    id: 2,
    category: "Next.js App",
    title: "Full Stack Web App",
    gridClass: "col-span-12 md:col-span-5",
    bgLabel: "NEXT",
    link: "https://manpower-project-iota.vercel.app/",
    image: "/image/image2.png", // Placeholder image path

  },
  {
    id: 3,
    category: "UI Design",
    title: "Modern Landing Page",
    gridClass: "col-span-6 md:col-span-4",
    bgLabel: "UI",
    link: "https://www.figma.com/proto/3fZL22isSYhdnja25ue8FN/food_app?node-id=20-149&t=9xxUkMKw2VCLxGHv-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    image: "/image/image4.png", // Placeholder image path

  },
  {
    id: 4,
    category: "Frontend",
    title: "Responsive Portfolio",
    gridClass: "col-span-6 md:col-span-3",
    bgLabel: "WEB",
    link: "https://newsportals.vercel.app/",
    image: "/image/image3.png", // Placeholder image path

  },
  {
    id: 5,
    category: "MERN Practice",
    title: "Auth System UI",
    gridClass: "col-span-12 md:col-span-6",
    bgLabel: "MERN",
    link: "https://manpower-project-iota.vercel.app/",
    image: "/image/image2.png", // Placeholder image path

  },
  {
    id: 6,
    category: "API Project",
    title: "Weather / API App",
    gridClass: "col-span-12 md:col-span-6",
    bgLabel: "API",
    link: "https://bagaichaa.vercel.app/",
    image: "/image/image1.png", // Placeholder image path
  },
];

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="bg-bg py-20 md:py-28">

      <div className="max-w-[1200px] mx-auto px-8 md:px-12">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-12">

          <div>
            <p className="text-red-500 text-xs tracking-[4px] uppercase mb-2">
              Selected Projects
            </p>

            <h2 className="font-bebas text-white text-[clamp(52px,7vw,88px)] leading-none">
              FRONTEND <br /> PROJECTS
            </h2>
          </div>

          <p className="text-white/30 text-xs tracking-[3px] uppercase">
            React • Next.js • MERN Stack
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">

          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => window.open(project.link, "_blank")}
              className={`${project.gridClass} relative overflow-hidden cursor-pointer bg-[#161616] border border-white/10 group`}
            >

              {/* BACKGROUND LABEL */}
              <div className="absolute inset-0 flex items-center justify-center text-white/5 font-bebas text-[80px] z-0 group-hover:opacity-0 transition-all duration-300">
                {project.bgLabel}
              </div>

              {/* IMAGE PREVIEW (hidden by default) */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-10"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-20" />

              {/* ARROW */}
              <div className="absolute top-4 right-4 w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-red group-hover:text-white z-30">
                ↗
              </div>

              {/* TEXT */}
              <div className="absolute bottom-5 left-5 z-30">
                <p className="text-red-500 text-[10px] uppercase tracking-[2px] mb-1">
                  {project.category}
                </p>

                <h3 className="text-white font-bold text-lg">
                  {project.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}