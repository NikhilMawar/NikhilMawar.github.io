import { useEffect, useState } from "react";
import Preloader from "./components/preloader/Preloader";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import PortraitTest from "./components/about/PortraitTest";
import GlobeFlight from "./components/about/GlobeFlight";
import About from "./sections/About";
import { themeColors } from "./utils/theme";
import Process from "./sections/Process";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CustomCursor from "./components/common/CustomCursor";

function App() {
  const [loading, setLoading] = useState(true);
  const [heroReady, setHeroReady] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setHeroReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const colors = themeColors[theme];

  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <main
      className="relative isolate min-h-screen"
      style={{ backgroundColor: colors.bg }}
    > 

      <CustomCursor theme={theme} />

      <div className="relative z-[2]">
        <Hero
          startAnimation={heroReady}
          theme={theme}
          onThemeToggle={toggleTheme}
          hideChrome={overlayOpen}
        />

        <Work theme={theme} />

        <About theme={theme} />

        <Process theme={theme} />

        <Contact theme={theme} />

        <Footer theme={theme} setOverlayOpen={setOverlayOpen} />

        

        {/*<PortraitTest theme={theme} className="mx-auto max-w-[420px]" />

        <div className="relative z-[3] flex min-h-screen items-center justify-center">
          <GlobeFlight theme={theme} />
        </div>*/}
      </div>

      {loading && <Preloader theme={theme} />}
    </main>
  );
}

export default App;