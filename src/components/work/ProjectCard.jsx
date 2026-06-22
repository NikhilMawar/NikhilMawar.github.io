import { motion } from "framer-motion";
import { themeColors } from "../../utils/theme";
import StatusPill from "../hero/StatusPill";
import ArrowButton from "../work/ArrowButton";


export default function ProjectCard({ project, theme = "light", index = 0 }) {
  const colors = themeColors[theme];

  return (
    <motion.article
      className="
        group mx-auto grid h-[400px] w-full max-w-[1820px]
        grid-cols-12 overflow-hidden rounded-[clamp(34px,1.5vw,44px)]
        border-[2px]
      "
      style={{
        backgroundColor: colors.bg,
        color: colors.heading,
      }}

      variants={{
        rest: {
          borderColor: colors.tertiary,
        },
        hover: {
          borderColor: theme === "dark" ? "#949490" : "#5D5C59",
        },
      }}

      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}

      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {/* Left Content */}
      <div className="col-span-5 flex flex-col justify-center px-[clamp(28px,2.3vw,44px)]">
        <p
          className="mb-[clamp(16px,1.2vw,22px)] text-[clamp(12px,0.83vw,16px)] font-normal uppercase leading-none"
          style={{ color: project.accentColor }}
        >
          ✦ {project.label}
        </p>

        <h3
          className="text-[clamp(36px,3.125vw,60px)] font-semibold leading-[0.95] tracking-[-0.04em]"
          style={{ color: colors.heading }}
        >
          {project.title}
        </h3>

        <p
          className="mt-[clamp(18px,1.4vw,26px)] max-w-[680px] text-[clamp(14px,1.04vw,20px)] font-normal leading-[1.18]"
          style={{ color: colors.subtext }}
        >
          {project.description}
        </p>

        <div className="mt-[clamp(18px,1.4vw,26px)] flex flex-wrap gap-[clamp(8px,0.6vw,12px)]">
          {project.pills?.map((pill) => (
            <StatusPill 
              key={pill} 
              theme={theme} 
              borderColor={project.accentColor} 
              textColor={project.accentColor} 
              backgroundColor={`${project.accentColor}08`} //33 = 20% 1A = 10% 14 = 8% 10 = 6% 0D = 5% 08 = 3%
            > 
              {pill}
            </StatusPill>
          ))}
        </div>
      </div>

      {/* Right Image / Placeholder */}
      <div className="relative col-span-7 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.08 },
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        />


        {/* Arrow Button */}
        <ArrowButton />
      </div>
    </motion.article>
  );
}