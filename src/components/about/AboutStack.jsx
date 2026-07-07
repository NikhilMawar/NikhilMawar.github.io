import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import { themeColors } from "../../utils/theme";
import StatusPill from "../hero/StatusPill";

function ItemRow({ item, theme }) {
  const colors = themeColors[theme];

  return (
    <div
      className="grid grid-cols-12 border-b py-[clamp(18px,1.5vw,28px)]"
      style={{ borderColor: colors.tertiary }}
    >
      <div className="col-span-8">
        <h4
          className="font-['Syne'] text-[clamp(16px,1.04vw,20px)] font-bold leading-none tracking-[-0.03em]"
          style={{ color: colors.heading }}
        >
          {item.name}
        </h4>

        <p
          className="mt-[8px] font-['Inter'] text-[12px] leading-none"
          style={{ color: colors.subtext }}
        >
          {item.role}
        </p>
      </div>

      <p
        className="col-span-4 text-right font-['Inter'] text-[12px] leading-none"
        style={{ color: colors.subtext }}
      >
        {item.date}
      </p>
    </div>
  );
}

export default function AboutStack({ groups, theme = "light", progress }) {
  const colors = themeColors[theme];
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(progress, "change", (latest) => {
    if (latest < 0.28) setActiveIndex(0);
    else if (latest < 0.52) setActiveIndex(1);
    else if (latest < 0.76) setActiveIndex(2);
    else setActiveIndex(3);
  });

  const activeGroup = groups[activeIndex];

  return (
    <div className="relative h-[calc(100vh-330px)] overflow-hidden">
      {/* Stacked headings */}
      <div>
        {groups.slice(0, activeIndex + 1).map((group) => (
          <div
            key={group.title}
            className="
              border-b
              py-[clamp(14px,1vw,20px)]
              font-['Inter']
              text-[clamp(12px,0.83vw,16px)]
              font-medium uppercase tracking-[0.02em]
            "
            style={{
              color: colors.heading,
              /*backgroundColor: colors.bg,*/
              borderColor: colors.tertiary,
            }}
          >
            {group.title}
          </div>
        ))}
      </div>

      {/* Active content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeGroup.title}
          className="pt-[clamp(12px,1vw,20px)]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -28 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {activeGroup.type === "skills" ? (
            <div className="flex flex-wrap gap-[clamp(10px,0.8vw,16px)] pt-[clamp(16px,1.3vw,24px)]">
              {activeGroup.items.map((skill) => (
                <StatusPill
                  key={skill}
                  theme={theme}
                  borderColor="#A97213"
                  textColor="#A97213"
                  backgroundColor="#A9721308"
                >
                  {skill}
                </StatusPill>
              ))}
            </div>
          ) : (
            activeGroup.items.map((item) => (
              <ItemRow
                key={`${item.name}-${item.date}`}
                item={item}
                theme={theme}
              />
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}