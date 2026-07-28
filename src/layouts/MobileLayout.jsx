import MobileTopBar from "../components/mobile/MobileTopBar";

//import Hero from "../sections/Hero";
import Work from "../sections/Work";
import About from "../sections/About";
import Process from "../sections/Process";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

import MobileHero from "../sections/MobileHero";
import MobileWork from "../sections/MobileWork";

export default function MobileLayout({
  theme,
  toggleTheme,
  ...props
}) {
  return (
    <>
      <MobileTopBar
        theme={theme}
        onThemeToggle={toggleTheme}
      />

      <main>
        <MobileHero
            theme={theme}
            startAnimation={props.heroReady}
            onThemeToggle={toggleTheme}
            {...props}
        />
        <MobileWork theme={theme} />
        <About theme={theme} />
        <Process theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />
      </main>
    </>
  );
}