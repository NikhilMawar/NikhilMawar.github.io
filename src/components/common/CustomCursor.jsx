import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Logo from "../../assets/svg/logo.svg?react";
import { themeColors } from "../../utils/theme";

export default function CustomCursor({ theme = "light" }) {
  const colors = themeColors[theme];

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { stiffness: 80, damping: 18, mass: 0.9 });
  const ringY = useSpring(mouseY, { stiffness: 80, damping: 18, mass: 0.9 });

  const dotX = useSpring(mouseX, { stiffness: 800, damping: 45, mass: 0.18 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 45, mass: 0.18 });

  const [cursorType, setCursorType] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);

      const element = event.target;

      const isTypingField =
        element.closest("input") ||
        element.closest("textarea") ||
        element.closest("[contenteditable='true']");

      if (isTypingField) {
        setCursorType("type");
        return;
      }

      const target = element.closest("[data-cursor]");
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
  const isType = cursorType === "type";
  const isPill = isProject || isType;

  return (
    <>
      <motion.div
        className="custom-cursor-ring"
        style={{
          left: ringX,
          top: ringY,
          opacity: isVisible && !isPill ? 1 : 0,
          borderColor: isLink ? colors.heading : colors.subtext,
        }}
        animate={{
          width: isLink ? 64 : 46,
          height: isLink ? 64 : 46,
          x: "-50%",
          y: "-50%",
        }}
      />

      <motion.div
        className="custom-cursor-main"
        style={{
          left: dotX,
          top: dotY,
          opacity: isVisible ? 1 : 0,
          backgroundColor: colors.heading,
          color: colors.bg,
        }}
        animate={{
          width: isPill ? 62 : 34,
          height: isPill ? 28 : 34,
          borderRadius: 999,
          x: "-50%",
          y: "-50%",
        }}
        transition={{
          duration: 0.24,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {isProject && <span className="custom-cursor-label">VIEW</span>}

        {isType && <span className="custom-cursor-label">TYPE</span>}

        {!isPill && (
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