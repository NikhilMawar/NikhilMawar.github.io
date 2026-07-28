import Reveal from "../components/common/Reveal";
import CyclingWord from "../components/common/CyclingWord";
import HeroName from "../components/hero/HeroName";
import HeroTicker from "../components/hero/HeroTicker";
import ScrollIndicator from "../components/hero/ScrollIndicator";
import StatusPill from "../components/hero/StatusPill";
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
        min-h-[100dvh]
        overflow-hidden
        transition-colors
        duration-700
      "
      style={{
        backgroundColor: colors.bg,
        color: colors.heading,
      }}
    >
      <div
        className="
          mx-auto
          flex
          min-h-[100dvh]
          max-w-[640px]
          flex-col
          px-6
        "
      >
        <div className="flex flex-1 flex-col pt-14">

          {/* Heading */}
          <Reveal delay={0.15} start={startAnimation}>
            <p
              className="mb-9 text-[11px] font-medium uppercase tracking-[0.12em]"
              style={{ color: colors.subtext }}
            >
              Senior Product Designer
            </p>
          </Reveal>

          {/* Hero Name */}
          <HeroName startAnimation={startAnimation} />

          {/* Description */}
          <Reveal delay={0.65} start={startAnimation}>
            <p
              className="mt-5 max-w-[340px] text-[16px] leading-[1.3]"
              style={{ color: colors.subtext }}
            >
              Delhi raised, Ontario based. Eight years of experience across{" "}
              <CyclingWord theme={theme} />
            </p>
          </Reveal>

          {/* Bottom Section */}
          <div className="pt-[clamp(80px,18vh,180px)]">
            <Reveal delay={0.8} start={startAnimation}>
              <div className="flex items-end justify-between">

                {/* Pills */}
                <div className="flex flex-col items-start gap-2">
                  <StatusPill mobile active theme={theme}>
                    Available For Work
                  </StatusPill>

                  <StatusPill mobile theme={theme}>
                    Ontario, Canada
                  </StatusPill>

                  <StatusPill mobile theme={theme}>
                    Awwwards Young Jury
                  </StatusPill>
                </div>

                {/* Scroll Indicator */}
                <ScrollIndicator
                  mobile
                  theme={theme}
                  startAnimation={startAnimation}
                />

              </div>
            </Reveal>
          </div>

        </div>
        <div className="absolute inset-x-0 top-[82vh]">
          <HeroTicker theme={theme} />
        </div>
      </div>
    </section>
  );
}