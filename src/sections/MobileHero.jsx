import Reveal from "../components/common/Reveal";
import CyclingWord from "../components/common/CyclingWord";
import HeroName from "../components/hero/HeroName";
import HeroTicker from "../components/hero/HeroTicker";
import ScrollIndicator from "../components/hero/ScrollIndicator";
import StatusPills from "../components/hero/StatusPills";
import { themeColors } from "../utils/theme";

export default function MobileHero({
  theme,
  startAnimation,
}) {
  const colors = themeColors[theme];

  return (
    <section
      className="
        relative
        h-[100dvh]
        overflow-hidden
        transition-colors
        duration-700
      "
      style={{
        backgroundColor: colors.bg,
        color: colors.heading,
      }}
    >
      {/* Hero content comes here */}

      {/* Status Pills */}

      {/* Scroll Indicator */}

      {/* Hero Ticker */}
    </section>
  );
}