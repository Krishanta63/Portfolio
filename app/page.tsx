import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import PortfolioGrid from "@/components/PortfolioGrid";
import Branding from "@/components/Branding";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

// Torn-paper SVG dividers
const TornDivider = ({
  topColor,
  bottomColor,
}: {
  topColor: string;
  bottomColor: string;
}) => (
  <div style={{ background: bottomColor, overflow: "hidden", lineHeight: 0 }}>
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: 60, width: "100%", display: "block", transform: "rotate(180deg)" }}
    >
      <path
        d="M0,0 L0,30 Q15,45 30,28 Q45,12 60,35 Q75,55 90,32 Q105,10 120,38 Q135,60 150,35
           Q165,15 180,42 Q195,58 210,33 Q225,12 240,40 Q255,62 270,36 Q285,14 300,42
           Q315,60 330,34 Q345,10 360,38 Q375,60 390,33 Q405,8 420,36 Q435,58 450,32
           Q465,10 480,40 Q495,64 510,36 Q525,12 540,40 Q555,62 570,34 Q585,10 600,38
           Q615,60 630,32 Q645,8 660,36 Q675,58 690,30 Q705,6 720,34 Q735,60 750,32
           Q765,8 780,38 Q795,62 810,34 Q825,10 840,40 Q855,62 870,34 Q885,10 900,38
           Q915,62 930,34 Q945,12 960,40 Q975,62 990,34 Q1005,10 1020,40 Q1035,62 1050,36
           Q1065,14 1080,42 Q1095,62 1110,36 Q1125,14 1140,42 Q1155,62 1170,36
           Q1185,14 1200,40 L1200,0 Z"
        fill={topColor}
      />
    </svg>
  </div>
);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TornDivider topColor="#0B0B0B" bottomColor="#ECE7E7" />
      <About />
      <TornDivider topColor="#ECE7E7" bottomColor="#FF1E1E" />
      <Skills />
      <TornDivider topColor="#FF1E1E" bottomColor="#0B0B0B" />
      <PortfolioGrid />
      <Branding />
      <CTA />
      <Footer />
    </main>
  );
}
