import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//import Hero from "../sections/Hero";
import DesktopWork from "../sections/DesktopWork";
import About from "../sections/About";
import Process from "../sections/Process";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

import SectionSnapController from "../components/common/SectionSnapController";
import DesktopHero from "../sections/DesktopHero";

export default function DesktopLayout({
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

      <DesktopHero
          startAnimation={heroReady}
          theme={theme}
          onThemeToggle={toggleTheme}
          hideChrome={overlayOpen}
      />

      <DesktopWork theme={theme} />
      <About theme={theme} />
      <Process theme={theme} />
      <Contact theme={theme} />
      <Footer
        theme={theme}
        setOverlayOpen={setOverlayOpen}
      />
    </>
  );
}