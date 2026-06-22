import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { themeColors } from "../../utils/theme";

const words = [
  "banking.",
  "fitness.",
  "streaming.",
  "food tech.",
  "healthcare.",
  "e-commerce.",
];

export default function CyclingWord({ theme = "light" }) {
  const [index, setIndex] = useState(0);

  const currentWord = words[index];
  const colors = themeColors[theme];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span
      className="
        relative inline-block
        h-[1.15em]
        min-w-[115px]
        overflow-hidden
        align-bottom
        font-semibold
        uppercase
      "
      style={{
        color: colors.accent,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          className="absolute left-0 top-0 whitespace-nowrap"
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-110%" }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}