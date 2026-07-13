import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { themeColors } from "../utils/theme";
import ProjectCard from "../components/work/ProjectCard";
import aroRentImage from "../assets/images/arorent-placeholder.png";
import project2Image from "../assets/images/project2-placeholder.png";
import zetaHero from "../assets/images/zetaHero.png";
import SectionReveal from "../components/common/SectionReveal";

const projects = [
  {
    slug: "arorent",
    title: "AroRent",
    label: "Peer-to-Peer Goods Rental App",
    description:
      "A product design case study focused on trust, browsing, listing flows and rental discovery.",
    image: aroRentImage,
    pills: ["UX Research", "Product Design", "Mobile App"],
    accentColor: "#F95019",
  },
  {
    slug: "zeta",
    title: "Zeta Cars",
    label: "Self-Drive Car Rental Platform",
    description:
      "A mobility experience focused on flexible booking, clear pricing and frictionless verification.",
    image: zetaHero,
    pills: ["UX Research", "UI Design", "Mobility"],
    accentColor: "#6D5DF6",
  },
  {
    slug: "kaimo",
    title: "Project Two",
    label: "Fintech Dashboard",
    description:
      "A clean financial interface exploring hierarchy, motion and responsive dashboard systems.",
    image: project2Image,
    pills: ["UX Researchs", "Product Designs", "Mobile Apps"],
    accentColor: "#168A45",
  },
  
];

export default function Work({ theme = "light" }) {
  const colors = themeColors[theme];
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work" ref={sectionRef} className="relative h-[400vh]">
      <div className="sticky top-0 z-[2] h-screen overflow-hidden">
        <SectionReveal blur={8} className="h-full">
          <div className="mx-auto grid h-full w-full max-w-[1920px] grid-cols-12 gap-x-[clamp(12px,1.05vw,20px)] px-[clamp(20px,2.6vw,50px)] pt-[clamp(100px,7vw,135px)]">
            <div className="col-span-12">
              <p
                className="mb-[clamp(12px,1vw,18px)]
                            text-[clamp(12px,0.83vw,16px)]
                            font-medium
                            uppercase
                            tracking-[0.02em]"
                style={{ color: colors.subtext }}
              >
                Selected
              </p>

              <h2
                className="
                  font-['Syne']
                  text-[clamp(60px,6vw,120px)]
                  font-extrabold
                  leading-[0.9]
                  tracking-[-0.06em]
                "
                style={{ color: colors.heading }}
              >
                Work
              </h2>

              <div
                className="mt-[clamp(12px,1.05vw,20px)] h-px w-full"
                style={{ backgroundColor: colors.tertiary }}
              />
            </div>

            <div className="relative col-span-12 mt-[24px] h-[400px]">
              {projects.map((project, index) => (
                <StackedProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  progress={scrollYProgress}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function StackedProjectCard({ project, index, progress, theme }) {
  const start = index * 0.28;
  const end = start + 0.28;

  const y = useTransform(progress, [start, end], [index === 0 ? 0 : 460, 0]);
  const scale = useTransform(progress, [end, end + 0.2], [1, 0.94]);
  const opacity = useTransform(progress, [start, start + 0.08], [1, 1]);

  return (
    <motion.div
      className="absolute left-0 top-0 w-full"
      style={{
        y,
        scale,
        opacity,
        zIndex: 10 + index,
      }}
    >
      <ProjectCard project={project} theme={theme} index={index} />
    </motion.div>
  );
}