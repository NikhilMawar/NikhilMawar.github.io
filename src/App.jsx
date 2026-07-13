import { useEffect, useState } from "react";
import {Routes, 
        Route,
        useLocation,
        useNavigate, } from "react-router-dom";

import Preloader from "./components/preloader/Preloader";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import About from "./sections/About";
import Process from "./sections/Process";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CustomCursor from "./components/common/CustomCursor";
import SectionSnapController from "./components/common/SectionSnapController";
import ProjectDetail from "./pages/ProjectDetail";
import { themeColors } from "./utils/theme";

function HomePage({
  theme,
  heroReady,
  toggleTheme,
  overlayOpen,
  setOverlayOpen,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (!sectionId) return;

    const scrollToRequestedSection = () => {
      const section = document.getElementById(sectionId);

      if (!section) return;

      const targetTop = section.offsetTop;

      if (window.lenis?.scrollTo) {
        window.lenis.scrollTo(targetTop, {
          immediate: true,
          force: true,
        });
      } else {
        window.scrollTo({
          top: targetTop,
          left: 0,
          behavior: "instant",
        });
      }

      // Clear the navigation instruction so it doesn't run again.
      navigate("/", {
        replace: true,
        state: null,
      });
    };

    const frameOne = requestAnimationFrame(() => {
      const frameTwo = requestAnimationFrame(scrollToRequestedSection);

      return () => cancelAnimationFrame(frameTwo);
    });

    return () => cancelAnimationFrame(frameOne);
  }, [location.state, navigate]);

  return (
    <>
      <SectionSnapController />

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
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [heroReady, setHeroReady] = useState(false);
  const [theme, setTheme] = useState("light");
  const [overlayOpen, setOverlayOpen] = useState(false);

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

  return (
    <main
      className="relative isolate min-h-screen"
      style={{ backgroundColor: colors.bg }}
    >
      <CustomCursor theme={theme} />

      <div className="relative z-[2]">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                theme={theme}
                heroReady={heroReady}
                toggleTheme={toggleTheme}
                overlayOpen={overlayOpen}
                setOverlayOpen={setOverlayOpen}
              />
            }
          />

          <Route
            path="/work/:slug"
            element={<ProjectDetail theme={theme} />}
          />
        </Routes>
      </div>

      {loading && <Preloader theme={theme} />}
    </main>
  );
}

export default App;