import { motion } from "framer-motion";
import { themeColors } from "../../utils/theme";

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
        font-normal leading-none
        transition-colors duration-300
      "
      style={{
        borderColor: colors.tertiary,
        color: colors.subtext,
        backgroundColor: "transparent",
      }}
      whileHover={{
        borderColor: colors.heading,
        color: colors.heading,
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <span>{children}</span>

      <motion.span
        className="ml-[8px] inline-block"
        initial={{ rotate: -45 }}
        whileHover={{ rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 360,
          damping: 22,
        }}
      >
        →
      </motion.span>
    </motion.a>
  );
}