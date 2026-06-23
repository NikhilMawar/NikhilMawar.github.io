import { motion } from "framer-motion";
import { themeColors } from "../../utils/theme";
import ArrowIcon from "../../assets/svg/arrow-2.svg?react";

export default function Button({
  children,
  href = "#",
  theme = "light",
  target = "_self",
}) {
  const colors = themeColors[theme];

  return (
    <motion.a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className="
        group inline-flex h-[clamp(34px,2vw,40px)]
        w-fit items-center justify-center
        rounded-full border px-[clamp(16px,1.2vw,24px)]
        text-[clamp(12px,0.83vw,16px)]
        font-medium uppercase leading-none
      "
      style={{
        borderColor: colors.tertiary,
        color: colors.subtext,
        backgroundColor: "transparent",
      }}
      variants={{
        rest: {
          borderColor: colors.tertiary,
          backgroundColor: "transparent",
          color: colors.subtext,
        },
        hover: {
          borderColor: colors.heading,
          backgroundColor: colors.heading,
          color: colors.bg,
        },
      }}
      initial="rest"
      animate="rest"
      whileHover="hover"
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <span>{children}</span>

      <motion.span
        className="ml-[8px] inline-flex h-[12px] w-[12px]"
        variants={{
          rest: { x: 0, y: 0 },
          hover: { x: 5, y: 0 },
        }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 20,
        }}
      >
        <ArrowIcon className="h-full w-full" />
      </motion.span>
    </motion.a>
  );
}