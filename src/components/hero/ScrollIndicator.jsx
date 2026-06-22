import { motion } from "framer-motion";
import { themeColors } from "../../utils/theme";

export default function ScrollIndicator({
  startAnimation = false,
  theme = "light",
}) {
  const colors = themeColors[theme];

  return (
    <motion.div
      className="pointer-events-none absolute right-[clamp(20px,2.6vw,50px)] top-[clamp(145px,13.7vw,263px)] z-30 hidden md:flex"
      initial={{ opacity: 0, y: 18 }}
      animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{
        duration: 0.8,
        delay: 0.95,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="flex flex-col items-center overflow-visible">
        <div
          className="relative h-[clamp(120px,9.1vw,175px)] w-[1px] overflow-hidden transition-colors duration-700"
          style={{ backgroundColor: colors.tertiary }}
        >
          <motion.div
            className="absolute left-0 top-0 w-full"
            style={{ backgroundColor: colors.accent }}
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              repeatType: "loop",
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        </div>

        <div className="mt-[10px] h-[70px] w-[24px] overflow-visible">
          <p
            className="origin-center rotate-90 
            font-['Syne']
            text-[12px]
            font-light uppercase
            tracking-[0.02em]
            transition-colors 
            duration-700"
            style={{ color: colors.subtext }}
          >
            Scroll
          </p>
        </div>
      </div>
    </motion.div>
  );
}