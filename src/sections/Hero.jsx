import Reveal from "../components/common/Reveal";
import CyclingWord from "../components/common/CyclingWord";
import Navbar from "../components/navbar/Navbar";
import ScrollIndicator from "../components/hero/ScrollIndicator";
import StatusPills from "../components/hero/StatusPills";
import ThemeToggle from "../components/hero/ThemeToggle";
import { themeColors } from "../utils/theme";
import HeroTicker from "../components/hero/HeroTicker";
import HeroName from "../components/hero/HeroName";
{/*import DotField from "../components/common/DotField";*/}

export default function Hero({ startAnimation = false, theme = "light", onThemeToggle, hideChrome = false }) {
  const colors = themeColors[theme];
  return (
    <section
      className="relative h-screen w-full overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: colors.bg,
        color: colors.heading,
      }}
    >

      {/*<DotField theme={theme} />*/}
      
      {!hideChrome && (
        <>
      <Navbar startAnimation={startAnimation} 
      theme={theme}/> 
      <ScrollIndicator startAnimation={startAnimation} 
      theme={theme}/> 
      <StatusPills startAnimation={startAnimation} 
      theme={theme}/>
      <HeroTicker theme={theme} />
      <ThemeToggle
        theme={theme}
        onToggle={onThemeToggle}
        startAnimation={startAnimation}
      />
      </>
      )}
      

      <div className="mx-auto grid h-full w-full max-w-[1920px] grid-cols-12 gap-x-[clamp(12px,1.05vw,20px)] px-[clamp(20px,2.6vw,50px)]">
        
        <div className="col-span-12 flex h-full flex-col justify-center">
          <Reveal delay={0.2} start={startAnimation}>
            <p
              className="mb-[clamp(18px,2vw,34px)] 
                        text-[clamp(12px,0.83vw,16px)] 
                        font-medium uppercase 
                        tracking-[0.02em]
                        z-[1]"
              style={{ color: colors.subtext }}
            >
              Senior Product Designer
            </p>
          </Reveal>

          <HeroName startAnimation={startAnimation} />

          <Reveal delay={0.75} start={startAnimation}>
            <p
              className="mt-[clamp(28px,3.5vw,64px)] max-w-[300px] text-[clamp(16px,0.96vw,20px)] leading-[1.15]"
              style={{ color: colors.subtext }}
            >
              Delhi raised, Ontario based. Eight years of experience across{" "}
              <CyclingWord theme={theme} />
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}