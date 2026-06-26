import { motion, useTransform } from "framer-motion";
import { themeColors } from "../../utils/theme";

export default function ProcessStep({
  step,
  index,
  progress,
  theme = "light",
}) {
  const colors = themeColors[theme];

    const revealEnd = 0.7;

    const threshold = (index / 4) * revealEnd;

  const colorProgress = useTransform(
    progress,
    [Math.max(0, threshold - 0.05), threshold],
    [0, 1]
  );

  const textColor = useTransform(colorProgress, [0, 1], [
    colors.tertiary,
    colors.heading,
  ]);

  const bodyColor = useTransform(colorProgress, [0, 1], [
    colors.tertiary,
    colors.subtext,
  ]);

  const borderColor = useTransform(colorProgress, [0, 1], [
    colors.tertiary,
    colors.heading,
  ]);

  return (
    <motion.div className="min-w-0">
      <motion.p
        className="mb-[10px] font-['Inter'] text-[clamp(13px,0.9vw,17px)] font-semibold leading-none"
        style={{ color: textColor }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.p>

      <motion.div
        className="
          mb-[clamp(12px,1vw,18px)]
          flex h-[clamp(34px,2.4vw,46px)]
          w-[clamp(34px,2.4vw,46px)]
          items-center justify-center
          rounded-[12px] border-[2px]
        "
        style={{ borderColor, color: textColor,}}
      >
        <step.Icon size={18} strokeWidth={2}/>
      </motion.div>

      <motion.h3
        className="font-['syne'] text-[clamp(16px,1.04vw,20px)] font-bold leading-none tracking-[-0.03em]"
        style={{ color: textColor }}
      >
        {step.title}
      </motion.h3>

      <motion.p
        className="mt-[10px] max-w-[180px] font-['Inter'] text-[clamp(12px,0.83vw,16px)] leading-[1.25]"
        style={{ color: bodyColor }}
      >
        {step.description}
      </motion.p>
    </motion.div>
  );
}