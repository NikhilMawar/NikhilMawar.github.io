import { motion } from "framer-motion";
import { themeColors } from "../../utils/theme";

export default function StatusPill({
  children,
  active = false,
  theme = "light",
  borderColor,
  textColor,
  backgroundColor,
}) {
  const colors = themeColors[theme];

  return (
    <div
      className="
        flex h-[clamp(26px,1.9vw,36px)]
        items-center justify-center
        rounded-full border
        px-[clamp(14px,1.25vw,24px)]
        text-[clamp(12px,0.83vw,16px)]
        font-medium uppercase
        leading-none tracking-[-0.01em]
        transition-colors duration-700
      "
      style={{
        borderColor:
        borderColor ??
          (active ? colors.green : colors.tertiary),

        color:
          textColor ??
          (active ? colors.green : colors.subtext),

        backgroundColor: backgroundColor ?? "transparent", 
          /*backgroundColor ?? "transparent",*/
          
      }}
    >
      {active && (
        <motion.span
          className="
            mr-[clamp(7px,0.55vw,10px)]
            h-[clamp(6px,0.46vw,9px)]
            w-[clamp(6px,0.46vw,9px)]
            rounded-full
          "
          style={{
            backgroundColor: colors.green,
          }}
          animate={{
            opacity: [1, 0.35, 0, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {children}
    </div>
  );
}