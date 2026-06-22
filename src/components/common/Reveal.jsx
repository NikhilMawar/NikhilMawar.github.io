import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  start = true,
  className = "",
}) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={start ? { y: "0%" } : { y: "110%" }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}