import { motion } from "framer-motion";
import Logo from "../../assets/svg/logo.svg?react";
import { themeColors } from "../../utils/theme";

export default function Preloader({ theme = "light" }) {
  const colors = themeColors[theme];

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{ backgroundColor: colors.bg }}
      />

      <div className="relative flex flex-col items-center">
        <div className="overflow-hidden w-[clamp(180px,15.6vw,300px)] aspect-square">
          <motion.div
            className="h-full w-full"
            style={{ color: colors.subtext }}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Logo className="h-full w-full" />
          </motion.div>
        </div>

        <div className="mt-6 h-[2px] w-[100px] overflow-hidden">
          <motion.div
            className="h-full"
            style={{ backgroundColor: colors.heading }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}