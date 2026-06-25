import { useEffect, useRef } from "react";
import { themeColors } from "../../utils/theme";
import PortraitSvg from "../../assets/svg/portrait.svg?react";

export default function PortraitTest({ theme = "light", className = "" }) {
  const colors = themeColors[theme];
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const paths = wrapper.querySelectorAll("path");

    const preparePaths = () => {
      paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        path.style.animation = "none";
      });
    };

    const animatePaths = () => {
      setTimeout(() => {
        paths.forEach((path) => {
          path.style.animation = "portraitLineDraw 30s linear forwards";
        });
      }, 800);
    };

    preparePaths();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          preparePaths();
          animatePaths();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(wrapper);

    return () => observer.disconnect();
  }, [theme]);

  return (
    <div
      ref={wrapperRef}
      className={`relative z-[5] w-[clamp(260px,28vw,520px)] ${className}`}
      style={{ color: colors.subtext }}
    >

      <svg width="0" height="0" className="absolute">
        <filter id="brushTexture" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035"
            numOctaves="3"
            seed="8"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="2.2"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <PortraitSvg className="portrait-line-svg h-auto w-full" />
    </div>
  );
}