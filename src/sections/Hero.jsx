import { useEffect, useState } from "react";
import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";

export default function Hero(props) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile
    ? <MobileHero {...props} />
    : <DesktopHero {...props} />;
}