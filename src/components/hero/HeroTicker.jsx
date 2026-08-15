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
        flex 
        h-[34px]
        sm:h-[36px]
        md:h-[clamp(38px,3.1vw,60px)]
        items-center gap-[clamp(28px,3vw,58px)]
        px-[clamp(14px,1.5vw,29px)]
        font-['Syne']
        text-[10px]
        sm:text-[10px]
        md:text-[12px]
        font-light uppercase
        tracking-[0.02em]
        whitespace-nowrap
      "
    >
      <span>CROSS FUNCTIONAL</span>
      <span>✦</span>
      <span>Design Systems</span>
      <span>✦</span>
      <span>0→1 Product Work</span>
      <span>✦</span>
      <span>Data-informed Design</span>
      <span>✦</span>
      <span>Prototyping</span>
      <span>✦</span>
      <span>A/B Testing</span>
      <span>✦</span>
      <span>Research & Synthesis</span>
      <span>✦</span>
      <span>Best Slack Memes</span>
      <span>✦</span>
      <span>Stakeholder Alignment</span>
      <span>✦</span>
      <span>Design × Engineering</span>
      <span>✦</span>
      <span>AI-assisted Workflows</span>
      <span>✦</span>
      <span>Product Strategy</span>
      <span>✦</span>
      <span>Good Vibes</span>
      <span>✦</span>
      <span>Systems Thinking</span>
      <span>✦</span>
    </div>
  );
}