import { useRef } from "react";
import { themeColors } from "../utils/theme";
import Button from "../components/common/Button";
import { useScroll } from "framer-motion";
import AboutStack from "../components/about/AboutStack";
{/*import DotField from "../components/common/DotField";*/}

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

    {/*<DotField theme={theme} />*/}

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
                    What began as a freelance graphic design journey,
                  </span>{" "}
                  soon evolved into a passion for product design. Driven by curiosity and a desire to solve meaningful problems, I progressed from small client projects to designing complex digital products, refining my craft and building a strong foundation in user-centered design along the way.
                </p>

                <p className="mb-[clamp(18px,1.5vw,28px)]">
                  <span style={{ color: colors.heading }}>
                    over the years,
                  </span>{" "}
                  I've worked on products across rental marketplaces, fintech, healthcare, e-commerce and AI-driven experiences, refining my ability to transform complex challenges into intuitive, user-centered solutions. 
                </p>

                <p className="mb-[clamp(18px,1.5vw,28px)]">
                  <span style={{ color: colors.heading }}>
                    Today,
                  </span>{" "}
                  I focus on designing products that balance business goals with usability, creating digital experiences that are simple, scalable and meaningful.
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