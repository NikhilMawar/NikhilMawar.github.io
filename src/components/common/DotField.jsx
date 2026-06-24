import { useEffect, useRef } from "react";
import { themeColors } from "../../utils/theme";

export default function DotField({ theme = "light" }) {
  const colors = themeColors[theme];
  const fieldRef = useRef(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    let currentX = targetX;
    let currentY = targetY;

    let rafId;

    const handleMouseMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      field.style.setProperty("--dot-x", `${currentX}px`);
      field.style.setProperty("--dot-y", `${currentY}px`);

      rafId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const dotOpacity = theme === "dark" ? 0.045 : 0.03;
  const glowOpacity = theme === "dark" ? 0.06 : 0.04;

  return (
    <div
      ref={fieldRef}
      className="
        pointer-events-none
        fixed
        inset-0
        z-[1]
        hidden
        md:block
      "
    >
      {/* Glow */}
      <div
        className="absolute inset-0"
        style={{
          opacity: glowOpacity,
          background:
            theme === "dark"
              ? "radial-gradient(circle 520px at var(--dot-x) var(--dot-y), rgba(236,236,231,0.55), transparent 20%)"
              : "radial-gradient(circle 520px at var(--dot-x) var(--dot-y), rgba(15,14,13,0.22), transparent 20%)",
        }}
      />

      {/* Dots */}
      <div
        className="absolute inset-0"
        style={{
          color: colors.heading,
          opacity: dotOpacity,

          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",

          backgroundSize: "16px 16px",

          WebkitMaskImage:
            "radial-gradient(circle 340px at var(--dot-x) var(--dot-y), black 0%, transparent 74%)",

          maskImage:
            "radial-gradient(circle 340px at var(--dot-x) var(--dot-y), black 0%, transparent 74%)",
        }}
      />
    </div>
  );
}