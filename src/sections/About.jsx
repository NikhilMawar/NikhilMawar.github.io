import { useRef } from "react";
import { themeColors } from "../utils/theme";
import Button from "../components/common/Button";
import { useScroll } from "framer-motion";
import AboutStack from "../components/about/AboutStack";
import DotField from "../components/common/DotField";

const experience = [
  { name: "Shyft Pvt. Ltd.", role: "Product Designer", date: "March 2022 – Present" },
  { name: "KYLO Apps", role: "UI/UX Designer", date: "2021 – 2022" },
  { name: "GRRAS Solutions", role: "Design Intern", date: "2020 – 2021" },
];

const education = [
  { name: "Information Technology Business Analysis", role: "Conestoga College", date: "2023 – 2025" },
  { name: "Bachelor of Technology in Information Technology", role: "RGPV University", date: "2018 – 2022" },
];

const awards = [
  { name: "Awwwards Young Jury", role: "Design Evaluation / Jury", date: "Since 2018" },
];

const skills = [
  "Product Design",
  "UI/UX Design",
  "Figma",
  "Prototyping",
  "Design Systems",
  "User Research",
  "Interaction Design",
  "Wireframing",
  "Branding",
  "Web Design",
  "Framer",
  "React Basics",
];

export default function About({ theme = "light" }) {
  const colors = themeColors[theme];
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const aboutGroups = [
    {
        title: "Experience",
        items: experience,
    },
    {
        title: "Education",
        items: education,
    },
    {
        title: "Awards",
        items: awards,
    },
    {
        title: "Skills",
        type: "skills",
        items: skills,
    },
    ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative h-[350vh] w-full"
      style={{
        /*backgroundColor: colors.bg,*/
        color: colors.heading,
      }}
    >

    <DotField theme={theme} />

      <div className="sticky top-0 z-[2] h-screen overflow-hidden">
        <div className="mx-auto h-full w-full max-w-[1920px] px-[clamp(20px,2.6vw,50px)] py-[clamp(100px,7vw,135px)]">
          <p
            className="mb-[clamp(12px,1vw,18px)] text-[clamp(12px,0.83vw,16px)] font-medium uppercase tracking-[0.02em]"
            style={{ color: colors.subtext }}
          >
            My Story
          </p>

          <h2
            className="font-['Syne'] text-[clamp(60px,6vw,120px)] font-extrabold leading-[0.9] tracking-[-0.06em]"
            style={{ color: colors.heading }}
          >
            About
          </h2>

          <div
            className="mt-[clamp(12px,1.05vw,20px)] h-px w-full"
            style={{ backgroundColor: colors.tertiary }}
          />

          <div className="grid grid-cols-12 gap-x-[clamp(24px,3vw,58px)] pt-[clamp(32px,2.6vw,50px)]">
            <div className="col-span-12 lg:col-span-5">
              <div
                className="max-w-[760px] font-['Inter'] text-[clamp(16px,1.04vw,20px)] font-normal leading-[1.18] tracking-[-0.02em]"
                style={{ color: colors.subtext }}
              >
                <p className="mb-[clamp(18px,1.5vw,28px)]">
                  <span style={{ color: colors.heading }}>
                    Eight years in product design,
                  </span>{" "}
                  building digital experiences across banking, fitness,
                  streaming, food tech, healthcare and e-commerce.
                </p>

                <p className="mb-[clamp(18px,1.5vw,28px)]">
                  <span style={{ color: colors.heading }}>
                    My process is research-first.
                  </span>{" "}
                  I want to understand why users behave the way they do before I open Figma.
                </p>

                <p className="mb-[clamp(18px,1.5vw,28px)]">
                  <span style={{ color: colors.heading }}>
                    I own the full design scope,
                  </span>{" "}
                  from early research to shipped components, with decisions debated properly instead of handed down.
                </p>

                <p>
                  Delhi raised, Ontario based — designing interfaces that feel clear, useful and calm.
                </p>
              </div>

              <div className="mt-[clamp(34px,2.8vw,54px)]">
                <Button theme={theme} href="#">
                  View CV
                </Button>
              </div>
            </div>

            <div className="col-span-12 mt-[64px] lg:col-span-7 lg:mt-0">
            <AboutStack
                groups={aboutGroups}
                theme={theme}
                progress={scrollYProgress}
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}