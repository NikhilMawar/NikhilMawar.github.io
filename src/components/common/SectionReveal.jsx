import { motion } from "framer-motion";

export default function SectionReveal({
  children,
  amount = 0.28,
  blur = 8,
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0.84,
        filter: `blur(${blur}px)`,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      viewport={{
        once: false,
        amount,
      }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}