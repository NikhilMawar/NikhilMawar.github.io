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
        opacity: 0.92,
        filter: `blur(${blur}px)`,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount,
      }}
      transition={{
        duration: 0.95,
        delay: 0.22 + delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}