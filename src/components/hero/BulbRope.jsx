import { motion } from "framer-motion";

const IDLE_PATH = "M 12 0 C 12 34 12 66 12 100";
const PULLED_PATH = "M 12 0 C 12 50 12 105 12 150";

const ropeVariants = {
  rest: {
    d: IDLE_PATH,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  pulled: {
    d: PULLED_PATH,
    transition: {
      duration: 0.18,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  rebound: {
    d: [
      PULLED_PATH,
      "M 12 0 C 12 40 27 72 18 116",
      "M 12 0 C 12 36 -3 66 7 108",
      "M 12 0 C 12 34 20 68 15 104",
      IDLE_PATH,
    ],
    transition: {
      duration: 0.9,
      times: [0, 0.24, 0.52, 0.76, 1],
      ease: "easeOut",
    },
  },
};

const beadVariants = {
  rest: {
    cx: 12,
    cy: 106,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  pulled: {
    cx: 12,
    cy: 156,
    transition: {
      duration: 0.18,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  rebound: {
    cx: [12, 18, 7, 15, 12],
    cy: [156, 121, 113, 109, 106],
    transition: {
      duration: 0.9,
      times: [0, 0.24, 0.52, 0.76, 1],
      ease: "easeOut",
    },
  },
};

export default function BulbRope({ controls, className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 30 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <motion.path
        d={IDLE_PATH}
        variants={ropeVariants}
        initial="rest"
        animate={controls}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <motion.circle
        cx="12"
        cy="106"
        r="3.2"
        variants={beadVariants}
        initial="rest"
        animate={controls}
        fill="currentColor"
      />
    </svg>
  );
}