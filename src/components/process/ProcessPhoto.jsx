import portrait from "../../assets/images/process-portrait.webp";
import { themeColors } from "../../utils/theme";

export default function ProcessPhoto({ theme = "light" }) {
  const colors = themeColors[theme];

  const panelBg = theme === "dark" ? "#1A1A1A" : "#E3DFDA";

  return (
    <div
      className="
        relative h-full w-full overflow-hidden
        rounded-[clamp(18px,1.6vw,32px)]
        z-[0]
      "
      style={{ backgroundColor: panelBg }}
    >


      <img
        src={portrait}
        alt="Nikhil Mawar portrait"
        className="
          absolute bottom--20 left-1/2 z-[20]
          h-[200%] w-auto
          -translate-x-1/2
          object-contain
          filter grayscale
        "
        draggable="false"
      />
    </div>
  );
}