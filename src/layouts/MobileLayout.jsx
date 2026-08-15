import MobileTopBar from "../components/mobile/MobileTopBar";

//import Hero from "../sections/Hero";

import Footer from "../sections/Footer";

import MobileHero from "../sections/MobileHero";
import MobileWork from "../sections/MobileWork";
import MobileAbout from "../sections/MobileAbout";
import MobileProcess from "../sections/MobileProcess";
import MobileContact from "../sections/MobileContact"

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
        <MobileContact theme={theme} />
        <Footer theme={theme} />
      </main>
    </>
  );
}