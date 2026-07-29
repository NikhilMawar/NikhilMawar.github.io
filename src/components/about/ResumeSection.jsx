import { themeColors } from "../../utils/theme";

export default function ResumeSection({
  title,
  items = [],
  theme = "light",
  className = "",
}) {
  const colors = themeColors[theme];

  return (
    <section className={className}>
        <h3
            className="
                font-['Inter']
                text-[12px]
                font-medium
                uppercase
                tracking-[0.03em]
            "
            style={{
                color: colors.heading,
            }}
            >
            {title}
        </h3>
        <div className="mt-4">
        {items.map((item) => (
            <div
            key={`${item.title}-${item.date}`}
            className="border-b py-3"
            style={{
                borderColor: colors.tertiary,
            }}
            >
                <div className="flex justify-between items-start gap-5">

                    <div className="min-w-0">

                    <h4
                        className="
                        font-['Syne']
                        text-[16px]
                        font-bold
                        leading-none
                        tracking-[-0.03em]
                        "
                        style={{
                        color: colors.heading,
                        }}
                    >
                        {item.title}
                    </h4>

                    <p
                        className="mt-2 text-[12px]"
                        style={{
                        color: colors.subtext,
                        }}
                    >
                        {item.subtitle}
                    </p>

                    </div>

                    <p
                    className="
                        shrink-0
                        text-right
                        text-[10px]
                    "
                    style={{
                        color: colors.subtext,
                    }}
                    >
                    {item.date}
                    </p>

                </div>
                </div>
            ))}
        </div>
    </section>
  );
}