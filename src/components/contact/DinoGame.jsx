import { themeColors } from "../../utils/theme";

export default function DinoGame({ theme = "light" }) {
  const colors = themeColors[theme];

  return (
    <div className="relative h-[clamp(90px,8vw,150px)] w-full overflow-hidden">
      <div
        className="absolute bottom-[28px] left-0 h-px w-full"
        style={{ backgroundColor: colors.subtext }}
      />

      <div
        className="absolute bottom-[30px] left-[6%] font-mono text-[clamp(28px,3vw,52px)] leading-none"
        style={{ color: colors.subtext }}
      >
        🦖
      </div>

      <div
        className="absolute bottom-[30px] left-[42%] font-mono text-[clamp(22px,2vw,36px)] leading-none"
        style={{ color: colors.subtext }}
      >
        🌵
      </div>

      <p
        className="absolute right-0 top-0 font-mono text-[clamp(12px,0.8vw,15px)]"
        style={{ color: colors.subtext }}
      >
        HI 00145 00045
      </p>
    </div>
  );
}