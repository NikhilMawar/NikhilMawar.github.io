import { motion } from "framer-motion";
import { themeColors } from "../../utils/theme";
import ArrowIcon from "../../assets/svg/arrow-2.svg?react";

export default function Button({
  children,
  href = "#",
  theme = "light",
  target = "_self",
  as = "a",
  type = "button",
  disabled = false,
  onClick,
}) {
  const colors = themeColors[theme];
  const MotionTag = as === "button" ? motion.button : motion.a;

  return (
    <MotionTag
      data-cursor="link"
      href={as === "a" ? href : undefined}
      target={as === "a" ? target : undefined}
      rel={as === "a" && target === "_blank" ? "noreferrer" : undefined}
      type={as === "button" ? type : undefined}
      disabled={disabled}
      onClick={onClick}
      className="
        group inline-flex h-[clamp(34px,2vw,40px)]
        w-fit shrink-0 items-center justify-center
        whitespace-nowrap
        rounded-full border px-[clamp(16px,1.2vw,24px)]
        text-[clamp(12px,0.83vw,16px)]
        font-medium uppercase leading-none
        disabled:pointer-events-none disabled:opacity-60
      "
      style={{
        borderColor: colors.tertiary,
        color: colors.subtext,
        backgroundColor: colors.bg,
      }}
      variants={{
        rest: {
          borderColor: colors.tertiary,
          backgroundColor: colors.bg,
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
      whileHover={disabled ? "rest" : "hover"}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="whitespace-nowrap">{children}</span>

      <motion.span
        className="ml-[8px] inline-flex h-[12px] w-[12px] shrink-0"
        variants={{
          rest: { x: 0, y: 0 },
          hover: { x: 5, y: 0 },
        }}
        transition={{ type: "spring", stiffness: 420, damping: 20 }}
      >
        <ArrowIcon className="h-full w-full" />
      </motion.span>
    </MotionTag>
  );
}