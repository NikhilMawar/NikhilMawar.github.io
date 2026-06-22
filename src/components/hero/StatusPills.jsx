import { motion } from "framer-motion";
import StatusPill from "./StatusPill";

export default function StatusPills({
  startAnimation = false,
  theme = "light",
}) {
  return (
    <motion.div
      className="
        absolute bottom-[clamp(70px,9vh,120px)]
        right-[clamp(20px,2.6vw,50px)]
        z-20 hidden flex-col items-end
        gap-[clamp(8px,0.65vw,12px)]
        md:flex
      "
      initial={{ opacity: 0, y: 22 }}
      animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{
        duration: 0.8,
        delay: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <StatusPill active theme={theme}>
        Available For Work
      </StatusPill>

      <StatusPill theme={theme}>
        Ontario, Canada
      </StatusPill>

      <StatusPill theme={theme}>
        Awwwards Young Jury
      </StatusPill>
    </motion.div>
  );
}