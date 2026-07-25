import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Bulb from "../../assets/svg/bulb.svg?react";
import BulbRope from "./BulbRope";

export default function ThemeToggle({
  theme,
  onToggle,
  startAnimation = false,
  mobile = false,
}) {
  const ropeControls = useAnimationControls();
  const [isPulling, setIsPulling] = useState(false);

  const isDark = theme === "dark";

 {/*} const handleToggle = async () => {
    if (isPulling) return;

    setIsPulling(true);

    // Pull chain downward.
    await ropeControls.start("pulled");

    // Theme changes while rope is held down.
    onToggle();

    // Quick elastic overshoot.
    await ropeControls.start("rebound");

    // Return to natural slack curve.
    await ropeControls.start("rest");

    setIsPulling(false);
  };*/} //temporary

  const handleToggle = async () => {
    if (isPulling) return;

    setIsPulling(true);

    // Pull chain first.
    await ropeControls.start("pulled");

    // Now change the theme.
    onToggle();

    // Rope swings back.
    await ropeControls.start("rebound");
    await ropeControls.start("rest");

    setIsPulling(false);
  };

  return (
    <motion.button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={handleToggle}
      className={`
        ${
          mobile
            ? `
              relative
              top-[-40px]
              h-[72px]
              w-[58px]
            `
            : `
              fixed
              right-[14px]
              top-0
              z-[140]
              h-[150px]
              w-[58px]

              md:right-[clamp(20px,2.6vw,50px)]
              md:h-[clamp(180px,11vw,212px)]
              md:w-[clamp(76px,4.8vw,92px)]
            `
        }

        block
        cursor-pointer
        border-0
        bg-transparent
        p-0
        outline-none
      `}
      initial={
        mobile
          ? false
          : { opacity: 0, y: -18 }
      }
      animate={
        mobile
          ? undefined
          : (
            startAnimation
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -18 }
          )
      }
      transition={
        mobile
          ? undefined
          : {
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      <div className="relative h-full w-full overflow-visible">
        {/* Fixed support cord + fixed bulb */}
        <Bulb
          className={`
            absolute
            left-0
            top-0
            h-[106px]
            w-auto
            transition-[color,filter]
            duration-500

            md:h-[clamp(118px,7.92vw,152px)]

            ${
              isDark
                ? "text-[#949490]"
                : "text-[#5D5C59]"
            }
          `}
          style={{
            "--bulb-fill": isDark ? "#ECECE7" : "#efece4",
            filter: isDark
            ? `
                drop-shadow(0 0 6px rgb(255, 255, 255))
                drop-shadow(0 0 18px rgba(236,236,231,0.08))
                `
            : "none",
          }}
        />

        {/* Animated pull-chain only */}
        <BulbRope
          controls={ropeControls}
          className={`
          absolute
          left-[22px]
          top-0
          h-[137px]
          w-[28px]
          transition-colors
          duration-500

          md:left-[clamp(28px,2.1vw,40px)]
          md:h-[clamp(145px,9.8vw,188px)]
          md:w-[clamp(28px,2vw,40px)]

          ${
            isDark
              ? "text-[#808080]"
              : "text-[#5D5C59]"
          }
        `}
        />
      </div>
    </motion.button>
  );
}