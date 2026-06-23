import { useEffect, useState } from "react";
import Preloader from "./components/preloader/Preloader";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import PortraitTest from "./components/journey/PortraitTest";

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

  return (
    <>
      <Hero
        startAnimation={heroReady}
        theme={theme}
        onThemeToggle={toggleTheme}
      />

      <Work theme={theme} />

      <div className="min-h-screen flex items-center justify-center">
        <PortraitTest />
      </div>

      {loading && <Preloader theme={theme} />}
    </>
  );
}

export default App;