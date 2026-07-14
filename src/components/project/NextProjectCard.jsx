import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { themeColors } from "../../utils/theme";

const MotionLink = motion(Link);

export default function NextProjectCard({
  project,
  theme = "light",
}) {
  const colors = themeColors[theme];

  if (!project) return null;

  return (
    <MotionLink
      to={`/work/${project.slug}`}
      data-cursor="project"
      className="
        group mt-[36px]
        grid min-h-[clamp(170px,14vw,260px)]
        grid-cols-12 overflow-hidden
        rounded-[clamp(24px,2vw,38px)]
        border no-underline
      "
      style={{
        borderColor: colors.tertiary,
        backgroundColor: colors.bg,
        color: colors.heading,
      }}
      initial="rest"
      whileHover="hover"
    >
      <div
        className="
          col-span-12 flex flex-col justify-center
          px-[clamp(24px,2.4vw,46px)]
          py-[clamp(28px,2.2vw,42px)]
          lg:col-span-4
        "
      >
        <p
          className="
            font-['Inter']
            text-[clamp(12px,0.83vw,16px)]
            font-semibold uppercase
            tracking-[0.04em]
          "
          style={{ color: project.accentColor ?? colors.accent }}
        >
          ✦ {project.label}
        </p>

        <h3
          className="
            mt-[40px]
            font-['Syne']
            text-[clamp(34px,3.2vw,64px)]
            font-bold
            leading-[0.95]
            tracking-[-0.05em]
          "
        >
          {project.title}
        </h3>
      </div>

      <div className="relative col-span-12 min-h-[220px] overflow-hidden lg:col-span-8">
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 },
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </MotionLink>
  );
}