import { useEffect, useState } from "react";
import { themeColors } from "../../utils/theme";

export default function SafariTintShim({ theme = "light" }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof CSS === "undefined") {
      return;
    }

    const isMobile = window.innerWidth < 768;

    const isSafari26 =
      CSS.supports("-webkit-text-size-adjust", "none") &&
      CSS.supports("font", "-apple-system-body") &&
      CSS.supports("-webkit-touch-callout", "none");

    setEnabled(isMobile && isSafari26);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: 0,
        bottom: "-8px",
        width: "100%",
        minHeight: "12px",
        backgroundColor: themeColors[theme].bg,
        pointerEvents: "none",
        zIndex: 5,
      }}
    />
  );
}