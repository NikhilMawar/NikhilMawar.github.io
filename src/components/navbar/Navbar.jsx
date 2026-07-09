import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "../../assets/svg/logo.svg?react";
import Reveal from "../common/Reveal";
import {themeColors} from "../../utils/theme";

const navItems = ["Work", "About", "Contact"];

export default function Navbar({ startAnimation = false, theme = "light" }) {
  const colors = themeColors[theme];
  const { scrollY } = useScroll();

  const navWidth = useTransform(scrollY, [0, 140], ["100%", "min(48vw, 760px)"]);
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
              backgroundColor: bg,
              borderColor,
              boxShadow: shadow,
              paddingLeft,
              paddingRight,
              paddingTop: paddingY,
              paddingBottom: paddingY,
            }}
            className="
              relative flex items-center justify-between
              rounded-full border
              backdrop-blur-[80px]
              overflow-visible
              supports-[backdrop-filter]:bg-white/20
            "
          >
            <a data-cursor="link" href="#" aria-label="Home" className="flex items-center" style={{ color: colors.heading }}>
              <Logo className="h-[clamp(22px,1.56vw,30px)] w-auto" />
            </a>

            <div  className="flex items-center gap-[clamp(22px,1.75vw,34px)]">
              {navItems.map((item) => (
                <a
                  data-cursor="link"
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
                    group relative inline-block 
                    h-[1.0em] overflow-hidden
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
                </a>
              ))}
            </div>
          </motion.nav>
        </div>
    </header>
  );
}