import portrait from "../../assets/images/process-portrait.webp";

export default function ProcessPhoto({
      theme = "light",
      mobile = false,
  }) {
  const panelBg = theme === "dark" ? "#1A1A1A" : "#E3DFDA";

  return (
    <div
        className={
            mobile
                ? `
                    relative
                    mt-10
                    w-full
                    aspect-[4/3]
                    overflow-hidden
                    rounded-[24px]
                `
                : `
                    relative
                    z-[10]
                    h-full
                    w-full
                    overflow-hidden
                    rounded-[clamp(18px,1.6vw,32px)]
                `
        }
        style={{
            backgroundColor: panelBg,
        }}
    >
      <img
        src={portrait}
        alt="Nikhil Mawar portrait"
        className="
          absolute left-1/2 z-[20]
          h-[180%] w-auto
          -translate-x-1/2
          object-contain
          grayscale
        "
        draggable="false"
      />
    </div>
  );
}