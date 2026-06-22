import { motion } from "framer-motion";
import Arrow from "../../assets/svg/arrow.svg?react";

export default function ArrowButton() {
  return (
    <motion.button
      type="button"
      aria-label="Open project"
      className="
        absolute 
        right-[clamp(12px,0.8vw,16px)]
        top-[clamp(12px,0.8vw,16px)]
        h-[clamp(44px,3.125vw,60px)]
        w-[clamp(44px,3.125vw,60px)]
      "
    >
      <motion.div
        variants={{
          rest: {
            rotate: 0,
            color: "#D8D5CF",
            backgroundColor: "rgba(255,255,255,0)",
          },
          hover: {
            rotate: 45,
            color: "#0F0E0D",
            backgroundColor: "#EFECE4",
          },
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-full w-full rounded-full"
      >
        <Arrow className="h-full w-full" />
      </motion.div>
    </motion.button>
  );
}