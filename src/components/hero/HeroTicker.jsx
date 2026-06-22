import { useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { themeColors } from "../../utils/theme";

const tickerItems = Array.from({ length: 24 }, (_, index) => index);

export default function HeroTicker({ theme = "light" }) {
  const colors = themeColors[theme];

  const baseX = useMotionValue(0);
  const speed = useSpring(30, {
    stiffness: 80,
    damping: 20,
    mass: 0.4,
  });

  const [contentWidth, setContentWidth] = useState(1);
  const trackRef = useRef(null);

  const x = useTransform(baseX, (value) => {
    return `-${value % contentWidth}px`;
  });

  useAnimationFrame((_, delta) => {
    const currentSpeed = speed.get();
    const moveBy = (currentSpeed * delta) / 1000;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="absolute bottom-0 left-0 z-20 w-full overflow-hidden border-y"
      style={{
        borderColor: colors.tertiary,
        color: colors.subtext,
      }}
      onMouseEnter={() => speed.set(10)}
      onMouseLeave={() => speed.set(35)}
    >
      <motion.div
        ref={trackRef}
        className="flex w-max items-center"
        style={{ x }}
      >
        <div
          className="flex w-max items-center"
          ref={(node) => {
            if (node) {
              setContentWidth(node.scrollWidth);
            }
          }}
        >
          {tickerItems.map((_, index) => (
            <TickerItem key={`a-${index}`} />
          ))}
        </div>

        <div className="flex w-max items-center" aria-hidden="true">
          {tickerItems.map((_, index) => (
            <TickerItem key={`b-${index}`} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function TickerItem() {
  return (
    <div
      className="
        flex h-[clamp(38px,3.1vw,60px)]
        items-center gap-[clamp(28px,3vw,58px)]
        px-[clamp(28px,3vw,58px)]
        font-['Syne']
        text-[12px]
        font-light uppercase
        tracking-[0.02em]
        whitespace-nowrap
      "
    >
      <span>UI UX DESIGN</span>
      <span>✦</span>
    </div>
  );
}