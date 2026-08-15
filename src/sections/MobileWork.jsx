import { themeColors } from "../utils/theme";
import { projects } from "../data/projects";
import MobileProjectCard from "../components/work/MobileProjectCard";
import SectionReveal from "../components/common/SectionReveal";

export default function MobileWork({
    theme = "light",
    startAnimation,
    }) 
{
  const colors = themeColors[theme];

  return (
    <section
      id="work"
      className="relative w-full"
      style={{
        backgroundColor: colors.bg,
        color: colors.heading,
      }}
    >
      <div
        className="
          
          mx-auto
          w-full
          max-w-[640px]
          px-[24px]
          pt-[80px]
          pb-[96px]
        "
      >
        <SectionReveal blur={2}>
        {/* Header */}

        <p
          className="
            text-[12px]
            uppercase
            tracking-[0.02em]
          "
          style={{
            color: colors.subtext,
          }}
        >
          Selected
        </p>

        <h2
          className="
            mt-[8px]
            font-['Syne']
            text-[38px]
            font-extrabold
            leading-[0.9]
            tracking-[-0.05em]
          "
        >
          Work
        </h2>

        <div
          className="mt-[16px] h-px w-full"
          style={{
            backgroundColor: colors.tertiary,
          }}
        />

        {/* Cards */}
        <div className="mt-[32px] space-y-[28px]">
          {projects.map((project) => (
            <MobileProjectCard
              key={project.slug}
              project={project}
              theme={theme}
            />
          ))}
        </div>
        </SectionReveal>
      </div>
    </section>
  );
}