import { themeColors } from "../../utils/theme";

export default function AboutListSection({
  title,
  items = [],
  theme = "light",
  stackIndex = 0,
}) {
  const colors = themeColors[theme];

  return (
    <section className="relative">
      <h3
        className="
          sticky z-20
          border-b
          py-[clamp(14px,1vw,20px)]
          font-['Inter']
          text-[clamp(12px,0.83vw,16px)]
          font-medium uppercase tracking-[0.02em]
        "
        style={{
          top: `${stackIndex * 52}px`,
          color: colors.heading,
          borderColor: colors.tertiary,
        }}
      >
        {/*
          Background lives on an absolute child, not on this `sticky`
          element itself — same Safari 26 tint fix as the main sections
          (see Work.jsx). This header can land near the top edge as the
          person scrolls through About, so a direct background-color
          here would act as another flat-tint source.
        */}
        <span
          aria-hidden="true"
          style={{ backgroundColor: colors.bg }}
          className="pointer-events-none absolute inset-0 -z-10"
        />
        {title}
      </h3>

      <div className="pt-[clamp(12px,1vw,20px)]">
        {items.map((item) => (
          <div
            key={`${item.name}-${item.date}`}
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
        ))}
      </div>
    </section>
  );
}