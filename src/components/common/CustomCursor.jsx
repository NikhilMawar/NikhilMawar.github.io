import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Logo from "../../assets/svg/logo.svg?react";
import { themeColors } from "../../utils/theme";

export default function CustomCursor({ theme = "light" }) {
  const colors = themeColors[theme];

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, {
    stiffness: 90,
    damping: 18,
    mass: 0.9,
  });

  const ringY = useSpring(mouseY, {
    stiffness: 90,
    damping: 18,
    mass: 0.9,
  });

  const dotX = useSpring(mouseX, {
    stiffness: 800,
    damping: 45,
    mass: 0.18,
  });

  const dotY = useSpring(mouseY, {
    stiffness: 800,
    damping: 45,
    mass: 0.18,
  });

  const [cursorType, setCursorType] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);

      const target = event.target.closest("[data-cursor]");
      setCursorType(target?.dataset.cursor || "default");
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  const isProject = cursorType === "project";
  const isLink = cursorType === "link";

  return (
    <>
      <motion.div
        className="custom-cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          opacity: isVisible && !isProject ? 1 : 0,
          borderColor: isLink ? colors.heading : colors.subtext,
        }}
        animate={{
          width: isLink ? 64 : 46,
          height: isLink ? 64 : 46,
        }}
        transition={{
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <motion.div
        className="custom-cursor-main"
        style={{
          x: dotX,
          y: dotY,
          opacity: isVisible ? 1 : 0,
          backgroundColor: colors.heading,
          color: colors.bg,
        }}
        animate={{
          width: isProject ? 62 : 34,
          height: isProject ? 28 : 34,
          borderRadius: 999,
        }}
        transition={{
          duration: 0.24,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {isProject ? (
          <span className="custom-cursor-label">VIEW</span>
        ) : (
          <motion.div
            className="custom-cursor-logo"
            animate={{ rotate: 360 }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Logo className="h-full w-full" />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}