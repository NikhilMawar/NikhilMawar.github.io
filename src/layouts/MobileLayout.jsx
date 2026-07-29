import MobileTopBar from "../components/mobile/MobileTopBar";

//import Hero from "../sections/Hero";
import MobileProcess from "../sections/MobileProcess";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

import MobileHero from "../sections/MobileHero";
import MobileWork from "../sections/MobileWork";
import MobileAbout from "../sections/MobileAbout";

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
        <MobileAbout theme={theme} />
        <MobileProcess theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />
      </main>
    </>
  );
}