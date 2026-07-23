import { useEffect, useState } from "react";
import {Routes, 
        Route,
        useLocation,
        useNavigate, } from "react-router-dom";

import Preloader from "./components/preloader/Preloader";
{/*import Hero from "./sections/Hero";
import Work from "./sections/Work";
import About from "./sections/About";
import Process from "./sections/Process";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import SectionSnapController from "./components/common/SectionSnapController";*/}
import CustomCursor from "./components/common/CustomCursor";
import ProjectDetail from "./pages/ProjectDetail";
import { themeColors } from "./utils/theme";
import SafariTintShim from "./components/common/SafariTintShim";
import Home from "./pages/Home";

function HomePage({
  theme,
  heroReady,
  toggleTheme,
  overlayOpen,
  setOverlayOpen,
}) {
  const location = useLocation();
  const navigate = useNavigate();


  const [showSafariShim, setShowSafariShim] = useState(false);

  useEffect(() => {
    const enableShim = () => {
      setShowSafariShim(true);

      window.removeEventListener("scroll", enableShim);
      window.removeEventListener("touchmove", enableShim);
    };

    window.addEventListener("scroll", enableShim, {
      passive: true,
    });

    window.addEventListener("touchmove", enableShim, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", enableShim);
      window.removeEventListener("touchmove", enableShim);
    };
  }, []);

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

      {showSafariShim && (
        <SafariTintShim theme={theme} />
      )}

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
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [overlayOpen, setOverlayOpen] = useState(false);

  {/*useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);*/}

  const colors = themeColors[theme];

  useEffect(() => {
    const backgroundColor = themeColors[theme].bg;
    const isDark = theme === "dark";

    localStorage.setItem("theme", theme);

    // Used by index.css to keep html, body and #root synchronized.
    document.documentElement.dataset.theme = theme;

    document.documentElement.style.setProperty(
      "--page-bg",
      colors.bg
    );

    document.documentElement.style.setProperty(
      "--page-heading",
      colors.heading
    );

    //document.documentElement.style.backgroundColor = backgroundColor;
    document.body.style.backgroundColor = backgroundColor;

    document.documentElement.style.colorScheme = isDark
      ? "dark"
      : "light";

    document.body.style.colorScheme = isDark
      ? "dark"
      : "light";

    // Replacing the element forces Safari to repaint more reliably.
    const oldThemeMeta = document.querySelector(
      'meta[name="theme-color"]'
    );

    const newThemeMeta = document.createElement("meta");

    newThemeMeta.setAttribute("name", "theme-color");
    newThemeMeta.setAttribute("content", backgroundColor);

    if (oldThemeMeta) {
      oldThemeMeta.replaceWith(newThemeMeta);
    } else {
      document.head.appendChild(newThemeMeta);
    }

    // Safari sometimes recalculates its toolbar after a frame.
    //const frame = requestAnimationFrame(() => {
      //document.documentElement.style.backgroundColor = backgroundColor;
      //document.body.style.backgroundColor = backgroundColor;
    //});

    const frame = requestAnimationFrame(() => {
        document.body.style.backgroundColor = backgroundColor;
    });

    return () => cancelAnimationFrame(frame);
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

  

  return (
    <main
      className="relative isolate min-h-[100dvh] w-full"
      style={{ backgroundColor: colors.bg }}
    >

      <CustomCursor theme={theme} />

      <div className="relative z-[2] min-h-[100dvh] w-full"
            style={{backgroundColor: colors.bg}}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
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