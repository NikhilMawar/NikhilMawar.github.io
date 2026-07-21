import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "../../assets/svg/logo.svg?react";
import { themeColors } from "../../utils/theme";

const navItems = ["Work", "About", "Contact"];

export default function Navbar({
  startAnimation = false,
  theme = "light",
}) {
  const colors = themeColors[theme];
  const { scrollY } = useScroll();

  const navWidth = useTransform(
    scrollY,
    [0, 140],
    ["100%", "min(48vw, 760px)"]
  );

  const bg = useTransform(scrollY, [0, 140], [
    "rgba(255,255,255,0)",
    colors.navGlass,
  ]);

  const borderColor = useTransform(scrollY, [0, 140], [
    "rgba(255,255,255,0)",
    colors.navBorder,
  ]);

  const shadow = useTransform(scrollY, [0, 140], [
    "0 0 0 rgba(0,0,0,0)",
    colors.navShadow,
  ]);

  const paddingLeft = useTransform(scrollY, [0, 140], ["0px", "30px"]);

  const paddingRight = useTransform(scrollY, [0, 140], [
    "clamp(90px, 7vw, 135px)",
    "30px",
  ]);

  const paddingY = useTransform(scrollY, [0, 140], ["0px", "14px"]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const targetTop = section.offsetTop;

    if (window.lenis?.scrollTo) {
      window.lenis.scrollTo(targetTop, {
        duration: 1.1,
        force: true,
        easing: (t) =>
          Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({
        top: targetTop,
        left: 0,
        behavior: "smooth",
      });
    }

    // Remove any existing hash from the URL.
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`
    );
  };

  const scrollToHome = () => {
    if (window.lenis?.scrollTo) {
      window.lenis.scrollTo(0, {
        duration: 1.1,
        force: true,
        easing: (t) =>
          Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`
    );
  };

  return (
    <header className="fixed left-0 top-[clamp(28px,2.8vw,44px)] z-[100] w-full px-[clamp(20px,2.6vw,50px)]">
      <div className="flex w-full justify-center overflow-visible">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={
            startAnimation
              ? { y: 0, opacity: 1 }
              : { y: -24, opacity: 0 }
          }
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            width: navWidth,
            paddingLeft,
            paddingRight,
            paddingTop: paddingY,
            paddingBottom: paddingY,
          }}
          className="relative flex items-center justify-between overflow-visible rounded-full"
        >
          {/*
            Glass background lives on an `absolute` child, not on this
            `motion.nav` itself. Safari 26's Liquid Glass tinting algorithm
            samples background-color/backdrop-filter set directly on fixed
            (or fixed-adjacent) elements to color the status bar/toolbar.
            Keeping this layer `absolute` makes it invisible to that
            sampling, so the pill looks identical but no longer forces a
            solid status-bar block. Same pattern already used in
            PrivacyModal.jsx.
          */}
          <motion.div
            aria-hidden="true"
            style={{
              backgroundColor: bg,
              borderColor,
              boxShadow: shadow,
            }}
            className="
              pointer-events-none absolute inset-0
              rounded-full border
              backdrop-blur-[80px]
              supports-[backdrop-filter]:bg-white/20
            "
          />

          <button
            type="button"
            data-cursor="link"
            onClick={scrollToHome}
            aria-label="Scroll to home"
            className="relative z-[1] flex items-center"
            style={{ color: colors.heading }}
          >
            <Logo className="h-[clamp(22px,1.56vw,30px)] w-auto" />
          </button>

          <div className="relative z-[1] hidden items-center gap-[clamp(22px,1.75vw,34px)] md:flex">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase();

              return (
                <button
                  type="button"
                  data-cursor="link"
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className="
                    group relative inline-block
                    h-[1em] overflow-hidden
                    text-[clamp(12px,0.83vw,16px)]
                    font-medium uppercase
                    leading-none
                    tracking-[-0.01em]
                  "
                  style={{ color: colors.subtext }}
                >
                  <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    {item}
                  </span>

                  <span
                    className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full"
                    style={{ color: colors.heading }}
                  >
                    {item}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.nav>
      </div>
    </header>
  );
}