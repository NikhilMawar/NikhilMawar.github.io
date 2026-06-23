import { useEffect, useRef } from "react";
import { themeColors } from "../../utils/theme";

export default function DotField({ theme = "light" }) {
  const colors = themeColors[theme];
  const fieldRef = useRef(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId;

    const handleMouseMove = (event) => {
      const rect = field.getBoundingClientRect();

      targetX = event.clientX - rect.left;
      targetY = event.clientY - rect.top;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;

      field.style.setProperty("--dot-x", `${currentX}px`);
      field.style.setProperty("--dot-y", `${currentY}px`);

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={fieldRef}
      className="pointer-events-none absolute inset-0 z-[1] hidden md:block"
      style={{
        color: colors.heading,
        opacity: theme === "dark" ? 0.16 : 0.12,
        backgroundImage:
          "radial-gradient(circle, currentColor 2px, transparent 1px)",
        backgroundSize: "16px 16px",
        WebkitMaskImage:
          "radial-gradient(circle 320px at var(--dot-x) var(--dot-y), black 0%, transparent 72%)",
        maskImage:
          "radial-gradient(circle 320px at var(--dot-x) var(--dot-y), black 0%, transparent 72%)",
      }}
    />
  );
}