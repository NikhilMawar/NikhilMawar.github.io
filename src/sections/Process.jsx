import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  Crosshair,
  Lightbulb,
  Scan,
  Rocket,
} from "lucide-react";
import { themeColors } from "../utils/theme";
import ProcessStep from "../components/process/ProcessStep";
import ProcessPhoto from "../components/process/ProcessPhoto";
import SectionReveal from "../components/common/SectionReveal";

const steps = [
  {
    title: "Discover",
    description:
      "Researching users, contexts and problems to find the right insights.",
    Icon: Search,
  },
  {
    title: "Define",
    description:
      "Turning insights into clear problems and opportunities.",
    Icon: Crosshair,
  },
  {
    title: "Dive",
    description:
      "Exploring ideas, sketching concepts and shaping solutions.",
    Icon: Lightbulb,
  },
  {
    title: "Design",
    description:
      "Crafting clean, intuitive interfaces with focus on usability and detail.",
    Icon: Scan,
  },
  {
    title: "Deliver",
    description:
      "Collaborating with dev and testing to ship impactful products.",
    Icon: Rocket,
  },
];

export default function Process({ theme = "light" }) {
  const colors = themeColors[theme];
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative h-[450vh] w-full"
      style={{
        backgroundColor: colors.bg,
        color: colors.heading,
      }}
    >
      <div
        className="sticky top-0 z-[2] h-[100dvh] overflow-hidden"
        style={{ backgroundColor: colors.bg }}
      >
        <SectionReveal blur={8} className="h-full">
          <div className="mx-auto h-full w-full max-w-[1920px] px-[clamp(20px,2.6vw,50px)] py-[clamp(95px,6.8vw,130px)]">
            <p
              className="mb-[clamp(12px,1vw,18px)] text-[clamp(12px,0.83vw,16px)] font-medium uppercase tracking-[0.02em]"
              style={{ color: colors.subtext }}
            >
              Structure meets creative freedom
            </p>

            <h2
              className="font-['Syne'] text-[clamp(64px,7vw,135px)] font-extrabold leading-[0.9] tracking-[-0.06em]"
              style={{ color: colors.heading }}
            >
              Process
            </h2>

            <div
              className="mt-[clamp(12px,1.05vw,20px)] h-px w-full"
              style={{ backgroundColor: colors.tertiary }}
            />

            <div className="grid grid-cols-12 gap-x-[clamp(24px,3vw,58px)] pt-[clamp(32px,2.6vw,50px)]">
              <div className="col-span-12 lg:col-span-7">
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
                </div>

                <div className="mt-[clamp(34px,2.8vw,54px)]">
                  <div className="relative mb-[clamp(18px,1.5vw,28px)]">
                    <div
                      className="h-[2px] w-full"
                      style={{ backgroundColor: colors.tertiary }}
                    />

                    <motion.div
                      className="absolute left-0 top-0 h-[2px] origin-left"
                      style={{
                        backgroundColor: colors.heading,
                        scaleX: lineScale,
                      }}
                    />

                    <div className="absolute left-0 top-1/2 grid w-full -translate-y-1/2 grid-cols-5">
                      {steps.map((_, index) => {
                        const revealEnd = 0.7;
                        const threshold =
                          (index / (steps.length - 1)) * revealEnd;

                        const dotBg = useTransform(
                          scrollYProgress,
                          [Math.max(0, threshold - 0.04), threshold],
                          [colors.bg, colors.heading]
                        );

                        const dotBorder = useTransform(
                          scrollYProgress,
                          [Math.max(0, threshold - 0.04), threshold],
                          [colors.subtext, colors.heading]
                        );

                        return (
                          <motion.span
                            key={index}
                            className="h-[12px] w-[12px] rounded-full border"
                            style={{
                              backgroundColor: dotBg,
                              borderColor: dotBorder,
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-x-[clamp(14px,1.7vw,32px)]">
                    {steps.map((step, index) => (
                      <ProcessStep
                        key={step.title}
                        step={step}
                        index={index}
                        progress={scrollYProgress}
                        theme={theme}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-span-12 mt-[60px] flex justify-end lg:col-span-5 lg:mt-0">
                <ProcessPhoto theme={theme} />
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}