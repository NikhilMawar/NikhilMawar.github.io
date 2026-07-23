import { useEffect, useState } from "react";

function getDevice() {
  const width = window.innerWidth;

  return {
    width,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  };
}

export default function useDeviceType() {
  const [device, setDevice] = useState(getDevice);

  useEffect(() => {
    const onResize = () => {
      setDevice(getDevice());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return device;
}