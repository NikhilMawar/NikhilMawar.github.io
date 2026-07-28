import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { themeColors } from "../../utils/theme";
import StatusPill from "../hero/StatusPill";
import { useState } from "react";

const MotionLink = motion(Link);

export default function MobileProjectCard({
  project,
  theme = "light",
}) {
  const colors = themeColors[theme];

  const navigate = useNavigate();
  const [pressed, setPressed] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (pressed) return;

    setPressed(true);

    setTimeout(() => {
        navigate(`/work/${project.slug}`);
    }, 200);
  };

  return (
    <MotionLink
        to={`/work/${project.slug}`}
        onClick={handleClick}
        className=" 
        block
        overflow-hidden
        rounded-[32px]
        border
        no-underline"
        style={{
            backgroundColor: colors.bg,
        }}
        animate={{
            borderColor: pressed
                ? theme === "dark"
                    ? "#949490"
                    : "#5D5C59"
                : colors.tertiary,
        }}
        transition={{
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1],
        }}
    >
      {/* Image */}

      <div className="aspect-[4/3] w-full overflow-hidden">
        <motion.img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover"
            animate={{
                scale: pressed ? 1.08 : 1,
            }}

            transition={{
                duration: 0.50,
                ease: [0.22, 1, 0.36, 1],
            }}
        />
      </div>

      {/* Content */}

      <div className="px-6 py-6">

        <h3
          className="
            font-['Syne']
            text-[32px]
            font-bold
            tracking-[-0.04em]
            leading-none
          "
          style={{
            color: colors.heading,
          }}
        >
          {project.title}
        </h3>

        <p
          className="
            mt-3
            text-[16px]
            leading-[1.45]
          "
          style={{
            color: colors.subtext,
          }}
        >
          {project.workDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
        {project.workPills?.map((pill) => (
            <StatusPill
                mobile
                key={pill}
                theme={theme}
                borderColor={project.accentColor}
                textColor={project.accentColor}
                backgroundColor={`${project.accentColor}08`}
                >
                {pill}
            </StatusPill>
        ))}
        </div>

      </div>
    </MotionLink>
  );
}