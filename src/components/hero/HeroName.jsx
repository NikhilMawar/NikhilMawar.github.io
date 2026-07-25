import { motion } from "framer-motion";
import Reveal from "../common/Reveal";
import {themeColors} from "../../utils/theme";

function AnimatedWord({ word }) {
  return (
    <span className="inline-block overflow-visible whitespace-nowrap">
      {word.split("").map((letter, index) => {
        const rotate = index % 2 === 0 ? -6 : 6;

        return (
          <motion.span
            key={`${letter}-${index}`}
            className="inline-block origin-center cursor-default"
            whileHover={{
              rotate,
              y: -3,
              scale: 1.01,
              filter: "blur(1px)",
            }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 18,
              mass: 0.45,
            }}
          >
            {letter}
          </motion.span>
        );
      })}
    </span>
  );
}

export default function HeroName({ startAnimation = false }) {
  return (
    //<h1 className="relative z-[99] overflow-visible py-[0.08em] font-['Syne'] text-[clamp(64px,11.6vw,224px)] font-extrabold leading-[0.98] tracking-[-0.07em]">
    <h1
      className="
      relative
      z-[99]
      overflow-visible
      py-[0.08em]

      font-['Syne']
      font-extrabold

      text-[64px]
      leading-[0.88]
      tracking-[-0.07em]

      sm:text-[72px]

      md:text-[clamp(64px,11.6vw,224px)]
      md:leading-[0.98]
      "
    >
      <Reveal delay={0.35} start={startAnimation}>
        <AnimatedWord word="Nikhil" />
      </Reveal>

      <Reveal delay={0.5} start={startAnimation}>
        <AnimatedWord word="Mawar" />
      </Reveal>
    </h1>
  );
}