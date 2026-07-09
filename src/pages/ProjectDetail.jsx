import { projects } from "../data/projects";
import { themeColors } from "../utils/theme";
import Button from "../components/common/Button";
import StatusPill from "../components/hero/StatusPill";

export default function ProjectDetail({ theme = "light", slug = "arorent" }) {
  const colors = themeColors[theme];
  const project = projects.find((item) => item.slug === slug);

  if (!project) return null;

  return (
    <main
      className="min-h-screen w-full"
      style={{
        backgroundColor: colors.bg,
        color: colors.heading,
      }}
    >
      <section className="mx-auto w-full max-w-[1920px] px-[clamp(20px,2.6vw,50px)] py-[clamp(34px,4vw,76px)]">
        <div className="flex items-center justify-between">
          <a
            href="/#work"
            data-cursor="link"
            className="font-['Inter'] text-[clamp(12px,0.73vw,14px)] font-semibold uppercase"
            style={{ color: colors.subtext }}
          >
            ← Back to Work
          </a>

          <a
            href="/#work"
            data-cursor="link"
            className="font-['Inter'] text-[clamp(12px,0.73vw,14px)] font-semibold"
            style={{ color: colors.subtext }}
          >
            Close ×
          </a>
        </div>

        <div className="mt-[clamp(56px,5vw,96px)] grid grid-cols-12 items-center gap-x-[clamp(24px,4vw,76px)] gap-y-[60px]">
          <div className="col-span-12 lg:col-span-6">
            <StatusPill theme={theme} size="sm">
              {project.eyebrow}
            </StatusPill>

            <h1
              className="mt-[24px] font-['Syne'] text-[clamp(52px,5vw,96px)] font-bold leading-[0.95] tracking-[-0.06em]"
              style={{ color: colors.heading }}
            >
              {project.title}
            </h1>

            <p
              className="mt-[22px] max-w-[760px] font-['Inter'] text-[clamp(17px,1.15vw,22px)] leading-[1.2] tracking-[-0.02em]"
              style={{ color: colors.subtext }}
            >
              {project.subtitle}
            </p>

            <p
              className="mt-[18px] max-w-[820px] font-['Inter'] text-[clamp(14px,0.9vw,17px)] leading-[1.35]"
              style={{ color: colors.subtext }}
            >
              {project.description}
            </p>

            <div
              className="mt-[clamp(26px,2vw,38px)] h-px w-full"
              style={{ backgroundColor: colors.tertiary }}
            />

            <div className="mt-[22px] grid grid-cols-2 gap-[18px] sm:grid-cols-4">
              {project.meta.map((item) => (
                <div key={item.label}>
                  <p
                    className="font-['Inter'] text-[12px] uppercase"
                    style={{ color: colors.subtext }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="mt-[6px] font-['Inter'] text-[14px] font-semibold"
                    style={{ color: colors.heading }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-[24px] flex flex-wrap gap-[12px]">
              <Button theme={theme} href={project.links.behance} target="_blank">
                View on Behance
              </Button>
              <Button theme={theme} href={project.links.figma} target="_blank">
                View on Figma
              </Button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div
              className="relative flex min-h-[clamp(360px,35vw,680px)] items-center justify-center overflow-hidden rounded-[clamp(28px,2vw,44px)]"
              style={{ backgroundColor: colors.tertiary }}
            >
              <div
                className="absolute h-[72%] w-[72%] rounded-full opacity-60"
                style={{ backgroundColor: colors.bg }}
              />
              <img
                src={project.heroImage}
                alt={project.title}
                className="relative z-[1] h-full max-h-[640px] w-full object-cover"
                draggable="false"
              />
            </div>
          </div>
        </div>

        <div
          className="mt-[clamp(56px,5vw,96px)] h-px w-full"
          style={{ backgroundColor: colors.tertiary }}
        />

        <div className="grid grid-cols-12 gap-x-[clamp(24px,4vw,76px)] py-[clamp(34px,3vw,58px)]">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-['Syne'] text-[clamp(18px,1.25vw,24px)] font-bold">
              The Problem
            </h2>

            <ul
              className="mt-[22px] space-y-[8px] font-['Inter'] text-[clamp(14px,0.9vw,17px)] leading-[1.28]"
              style={{ color: colors.subtext }}
            >
              {project.problem.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 mt-[42px] lg:col-span-6 lg:mt-0">
            <h2 className="font-['Syne'] text-[clamp(18px,1.25vw,24px)] font-bold">
              My Role
            </h2>

            <p
              className="mt-[22px] max-w-[720px] font-['Inter'] text-[clamp(14px,0.9vw,17px)] leading-[1.35]"
              style={{ color: colors.subtext }}
            >
              {project.role}
            </p>

            <div className="mt-[24px] flex flex-wrap gap-[12px]">
              {project.roleTags.map((tag) => (
                <StatusPill key={tag} theme={theme} size="sm">
                  {tag}
                </StatusPill>
              ))}
            </div>
          </div>
        </div>

        <div
          className="h-px w-full"
          style={{ backgroundColor: colors.tertiary }}
        />

        <div className="grid grid-cols-12 gap-x-[clamp(24px,4vw,76px)] py-[clamp(34px,3vw,58px)]">
          <div className="col-span-12 lg:col-span-3">
            <h2 className="font-['Syne'] text-[clamp(18px,1.25vw,24px)] font-bold">
              The Solution
            </h2>

            <p
              className="mt-[20px] font-['Inter'] text-[clamp(14px,0.9vw,17px)] leading-[1.35]"
              style={{ color: colors.subtext }}
            >
              {project.solution}
            </p>

            <div className="mt-[24px] space-y-[14px]">
              {project.features.map((feature) => (
                <p
                  key={feature}
                  className="font-['Inter'] text-[14px]"
                  style={{ color: colors.subtext }}
                >
                  ○ {feature}
                </p>
              ))}
            </div>
          </div>

          <div className="col-span-12 mt-[42px] grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:col-span-9 lg:mt-0 lg:grid-cols-6">
            {project.screens.map((screen, index) => (
              <div key={screen}>
                <div
                  className="aspect-[9/18] overflow-hidden rounded-[22px] border"
                  style={{
                    borderColor: colors.tertiary,
                    backgroundColor: colors.bg,
                  }}
                >
                  <img
                    src={project.heroImage}
                    alt={screen}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p
                  className="mt-[10px] text-center font-['Inter'] text-[12px]"
                  style={{ color: colors.subtext }}
                >
                  {index + 1}. {screen}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="h-px w-full"
          style={{ backgroundColor: colors.tertiary }}
        />

        <a
          href="#"
          data-cursor="project"
          className="mt-[36px] grid min-h-[150px] grid-cols-12 overflow-hidden rounded-[clamp(24px,2vw,38px)] border"
          style={{
            borderColor: colors.tertiary,
            backgroundColor: colors.tertiary,
          }}
        >
          <div className="col-span-12 flex flex-col justify-center px-[clamp(24px,2vw,42px)] lg:col-span-5">
            <p
              className="font-['Inter'] text-[12px] font-semibold uppercase"
              style={{ color: colors.accent }}
            >
              • {project.nextProject.label}
            </p>

            <h3 className="mt-[12px] font-['Syne'] text-[clamp(32px,3vw,58px)] font-bold tracking-[-0.05em]">
              {project.nextProject.title}
            </h3>
          </div>

          <div className="col-span-12 hidden lg:col-span-7 lg:block">
            <img
              src={project.nextProject.image}
              alt={project.nextProject.title}
              className="h-full w-full object-cover"
            />
          </div>
        </a>
      </section>
    </main>
  );
}