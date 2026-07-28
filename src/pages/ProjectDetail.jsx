import { projects } from "../data/projects";
import { themeColors } from "../utils/theme";
import Button from "../components/common/Button";
import StatusPill from "../components/hero/StatusPill";
import NextProjectCard from "../components/project/NextProjectCard";

import { motion } from "framer-motion";
import {ArrowLeft,
        X,
        CalendarDays,
        Clock3,
        UsersRound,
        Component,
        CircleAlert,
        BadgeCheck,
        CircleCheck,
        CircleUserRound, } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProjectDetail({ theme = "light" }) {
  const { slug = "arorent" } = useParams();
  const navigate = useNavigate();

  const colors = themeColors[theme];
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    if (window.lenis?.scrollTo) {
      window.lenis.scrollTo(0, {
        immediate: true,
        force: true,
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [slug]);

  if (!project) return null;

  const goBackToWork = () => {
    navigate("/", {
      state: {
        scrollTo: "work",
      },
    });
  };

  const metaIcons = {
    Year: CalendarDays,
    Business: UsersRound,
    Duration: Clock3,
    Tool: Component,
    Tools: Component,
  };

  return (
    <main
      className="min-h-screen w-full"
      style={{
        backgroundColor: colors.bg,
        color: colors.heading,
      }}
    >
      <section className="mx-auto w-full max-w-[1920px] 
        px-[clamp(20px,2.6vw,50px)]
        pb-[clamp(40px,4vw,76px)]
        pt-[clamp(28px,2.8vw,52px)]"
      >
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={goBackToWork}
            data-cursor="link"
            className="
              group inline-flex items-center gap-[8px]
              font-['Inter']
              text-[clamp(12px,0.73vw,14px)]
              font-semibold uppercase leading-none
            "
            style={{ color: colors.subtext }}
          >
            <ArrowLeft
              size={18}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:-translate-x-[4px]"
            />

            <span>Back to Work</span>
          </button>

          {/*<button
            type="button"
            onClick={goBackToWork}
            data-cursor="link"
            aria-label="Close project"
            className="
              group inline-flex items-center
              gap-[10px]
              font-['Inter']
              text-[clamp(12px,0.73vw,14px)]
              font-semibold
              leading-none
            "
            style={{ color: colors.subtext }}
          >
            <span>Close</span>

            <span
              className="
                inline-flex 
                h-[30px] w-[30px]
                items-center justify-center
                rounded-full border
                transition-transform duration-300
                group-hover:rotate-90
              "
              style={{
                borderColor: colors.subtext,
              }}
            >
              <X size={16} strokeWidth={1.6} />
            </span>
          </button>*/}
        </div>

        <div
          className="
            mt-[clamp(22px,1.8vw,36px)]
            grid grid-cols-12 items-center
            gap-x-[clamp(28px,3.4vw,64px)]
            gap-y-[48px]
          "
        >
          <div className="col-span-12 lg:col-span-6">
            <div className="w-fit">
              <StatusPill theme={theme} size="sm">
                {project.eyebrow}
              </StatusPill>
            </div>

            <h1
              className="mt-[24px] font-['Syne'] text-[clamp(52px,5vw,96px)] font-bold leading-[0.95] tracking-[-0.06em]"
              style={{ color: colors.heading }}
            >
              {project.title}
            </h1>

            <p
              className="mt-[clamp(18px,1.4vw,26px)] max-w-[760px] font-['Inter'] text-[clamp(16px,1.04vw,20px)] leading-[1.2] tracking-[-0.02em]"
              style={{ color: colors.subtext }}
            >
              {project.subtitle}
            </p>

            <p
              className="mt-[18px] max-w-[680px] font-['Inter'] text-[clamp(16px,1.04vw,20px)] leading-[1.35]"
              style={{ color: colors.subtext }}
            >
              {project.description}
            </p>

            <div
              className="mt-[clamp(24px,1.8vw,34px)] h-px w-full"
              style={{ backgroundColor: colors.tertiary }}
            />

            <div className="mt-[22px] grid grid-cols-2 gap-x-[18px] gap-y-[22px] sm:grid-cols-4">
              {project.meta.map((item) => {
                const Icon = metaIcons[item.label];

                return (
                  <div key={item.label}>
                    <p
                      className="
                        font-['Inter']
                        text-[clamp(12px,0.83vw,16px)]
                        font-medium uppercase
                        tracking-[0.04em]
                      "
                      style={{ color: colors.subtext }}
                    >
                      {item.label}
                    </p>

                    <div className="mt-[8px] flex items-center gap-[8px]">
                      {Icon && (
                        <Icon
                          size={17}
                          strokeWidth={1.6}
                          style={{ color: colors.subtext }}
                        />
                      )}

                      <p
                        className="font-['Inter'] text-[14px] font-semibold"
                        style={{ color: colors.heading }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="mt-[clamp(24px,1.8vw,34px)] h-px w-full"
              style={{ backgroundColor: colors.tertiary }}
            />

            <div className="mt-[22px] h-px w-full">
                    <p
                      className="
                        font-['Inter']
                        text-[clamp(16px,1.04vw,20px)]
                      "
                      style={{ color: colors.subtext }}
                    >
                      For more info and full case study!
                    </p>
            </div>

            <div className="mt-[40px] grid grid-cols-2 gap-[12px] sm:grid-cols-4">
              <div className="col-span-1">
                <Button
                  theme={theme}
                  href={project.links.behance}
                  target="_blank"
                >
                  View on Behance
                </Button>
              </div>

              <div className="hidden sm:block" />
              <div className="hidden sm:block" />

              <div className="col-span-1 flex sm:justify-end">
                <Button
                  theme={theme}
                  href={project.links.figma}
                  target="_blank"
                >
                  View on Figma
                </Button>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div
              className="
                relative flex
                min-h-[clamp(400px,36vw,640px)]
                items-center justify-center
                overflow-visible
              "
            >
              {/* Background circle */}
              <div
                className="
                  absolute aspect-square
                  w-[clamp(310px,28vw,535px)]
                  rounded-full
                "
                style={{
                  backgroundColor: colors.tertiary,
                  opacity: 0.72,
                }}
              />

              {/* Browse phone */}
              <motion.img
                src={project.heroPhones.left}
                alt={`${project.title} browse screen`}
                draggable="false"
                className="
                  absolute z-[2]
                  left-[13%]
                  top-[8%]
                  w-[clamp(165px,14.8vw,285px)]
                  object-contain
                "
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  filter: "drop-shadow(0 22px 30px rgba(0,0,0,0.17))",
                }}
              />

              {/* Product phone */}
              <motion.img
                src={project.heroPhones.right}
                alt={`${project.title} product details screen`}
                draggable="false"
                className="
                  absolute z-[3]
                  right-[11%]
                  top-[5%]
                  w-[clamp(175px,15.7vw,300px)]
                  object-contain
                "
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 5.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  filter: "drop-shadow(0 26px 36px rgba(0,0,0,0.19))",
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="mt-[clamp(56px,5vw,96px)] h-px w-full"
          style={{ backgroundColor: colors.tertiary }}
        />

        <div
          className="
            grid grid-cols-12
            gap-x-[clamp(24px,4vw,76px)]
            gap-y-[42px]
            py-[clamp(34px,3vw,58px)]
          "
        >
          {/* Problem */}
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center gap-[10px]">
              <CircleAlert
                size={22}
                strokeWidth={1.7}
                style={{ color: colors.heading }}
              />

              <h2
                className="
                  font-['Syne']
                  text-[clamp(18px,1.25vw,24px)]
                  font-bold
                  tracking-[-0.03em]
                "
                style={{ color: colors.heading }}
              >
                The Problem
              </h2>
            </div>

            <ul
              className="
                mt-[clamp(20px,1.6vw,30px)]
                max-w-[720px]
                space-y-[8px]
                font-['Inter']
                text-[clamp(16px,1.04vw,20px)]
                leading-[1.35]
              "
              style={{ color: colors.subtext }}
            >
              {project.problem.map((item) => (
                <li key={item} className="flex items-start gap-[10px]">
                  <span>✦ {item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Role */}
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center gap-[10px]">
              <CircleUserRound
                size={23}
                strokeWidth={1.7}
                style={{ color: colors.heading }}
              />

              <h2
                className="
                  font-['Syne']
                  text-[clamp(18px,1.25vw,24px)]
                  font-bold
                  tracking-[-0.03em]
                "
                style={{ color: colors.heading }}
              >
                My Role
              </h2>
            </div>

            <p
              className="
                mt-[clamp(20px,1.6vw,30px)]
                max-w-[720px]
                font-['Inter']
                text-[clamp(16px,1.04vw,20px)]
                leading-[1.35]
              "
              style={{ color: colors.subtext }}
            >
              {project.role}
            </p>

            <div
              className="mt-[clamp(20px,1.5vw,28px)] h-px w-full"
              style={{ backgroundColor: colors.tertiary }}
            />

            <div
              className="
                mt-[clamp(16px,1.2vw,22px)]
                grid grid-cols-2
                gap-[10px]
                sm:grid-cols-4
              "
            >
              {project.roleTags.map((tag) => (
                <StatusPill key={tag} theme={theme} size="sm">
                  {tag}
                </StatusPill>
              ))}
            </div>
          </div>
        </div>

        <div
          className="h-px w-full"
          style={{ backgroundColor: colors.tertiary }}
        />
        

        <div
          className="
            grid grid-cols-12
            gap-x-[clamp(24px,3vw,58px)]
            gap-y-[42px]
            py-[clamp(34px,3vw,58px)]
          "
        >
          {/* Solution copy */}
          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-center gap-[10px]">
              <CircleCheck
                size={22}
                strokeWidth={1.7}
                style={{ color: colors.heading }}
              />

              <h2
                className="
                  font-['Syne']
                  text-[clamp(18px,1.25vw,24px)]
                  font-bold
                  tracking-[-0.03em]
                "
                style={{ color: colors.heading }}
              >
                The Solution
              </h2>
            </div>

            <p
              className="
                mt-[clamp(20px,1.6vw,30px)]
                max-w-[380px]
                font-['Inter']
                text-[clamp(16px,1.04vw,20px)]
                leading-[1.35]
              "
              style={{ color: colors.subtext }}
            >
              {project.solution}
            </p>

            <div className="mt-[clamp(24px,2vw,38px)] space-y-[16px]">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-[10px]"
                >
                  <CircleCheck
                    size={20}
                    strokeWidth={1.5}
                    className="shrink-0"
                    style={{ color: colors.subtext }}
                  />

                  <p
                    className="
                      font-['Inter']
                      text-[clamp(14px,0.9vw,17px)]
                      leading-[1.25]
                    "
                    style={{ color: colors.subtext }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Screens */}
          <div
            className="
              col-span-12
              grid grid-cols-2
              gap-x-[clamp(12px,1.15vw,22px)]
              gap-y-[28px]
              sm:grid-cols-3
              lg:col-span-9
              lg:grid-cols-6
            "
          >
            {project.screens?.map((screen, index) => (
              <motion.div
                key={`${screen.title}-${index}`}
                data-cursor="link"
                className="group"
                initial={{ y: 0 }}
                whileHover={{ y: -8 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="
                    aspect-[9/18]
                    overflow-hidden
                    rounded-[clamp(18px,1.3vw,24px)]
                  "
                  style={{
                    borderColor: colors.tertiary,
                    backgroundColor: colors.bg,
                  }}
                >
                  <motion.img
                    src={screen.image}
                    alt={`${project.title} ${screen.title}`}
                    draggable="false"
                    className="h-full w-full object-contain"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1   }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>

                <p
                  className="
                    mt-[12px]
                    text-center
                    font-['Inter']
                    text-[clamp(11px,0.73vw,14px)]
                    leading-[1.2]
                  "
                  style={{ color: colors.subtext }}
                >
                  {index + 1}. {screen.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className="h-px w-full"
          style={{ backgroundColor: colors.tertiary }}
        />

        <NextProjectCard
          project={project.nextProject}
          theme={theme}
        />
      </section>
    </main>
  );
}