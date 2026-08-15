import SectionReveal from "../components/common/SectionReveal";
import { themeColors } from "../utils/theme";
import ProcessPhoto from "../components/process/ProcessPhoto";
import MobileProcessStep from "../components/process/MobileProcessStep";

export default function MobileProcess({
    theme = "light",
}) {
    const colors = themeColors[theme];

    const steps = [
        {
            number: "01",
            title: "Discover",
            description:
                "Researching users, contexts and problems to find the right insights.",
        },
        {
            number: "02",
            title: "Define",
            description:
                "Turning insights into clear problems and opportunities.",
        },
        {
            number: "03",
            title: "Dive",
            description:
                "Exploring ideas, sketching concepts and shaping solutions.",
        },
        {
            number: "04",
            title: "Design",
            description:
                "Crafting clean, intuitive interfaces with focus on usability and detail.",
        },
        {
            number: "05",
            title: "Deliver",
            description:
                "Collaborating with dev and testing to ship impactful products.",
        },
    ];

    return (
        <section
            id="process"
            className="relative w-full"
            style={{
                backgroundColor: colors.bg,
                color: colors.heading,
            }}
        >
            <SectionReveal blur={8}>

                <div
                    className="
                        mx-auto
                        w-full
                        max-w-[640px]
                        px-[24px]
                        pt-[20px]
                        pb-[96px]
                    "
                >

                    {/* Eyebrow */}

                    <p
                        className="
                            text-[12px]
                            font-medium
                            uppercase
                            tracking-[0.02em]
                        "
                        style={{
                            color: colors.subtext,
                        }}
                    >
                        Structure meets creative freedom
                    </p>

                    {/* Heading */}

                    <h2
                        className="
                            mt-2
                            font-['Syne']
                            text-[38px]
                            font-extrabold
                            leading-[0.88]
                            tracking-[-0.06em]
                        "
                    >
                        Process
                    </h2>

                    {/* Divider */}

                    <div
                        className="mt-4 h-px w-full"
                        style={{
                            backgroundColor: colors.tertiary,
                        }}
                    />

                    {/* Intro */}

                    <div
                        className="mt-6 space-y-6"
                        style={{
                            color: colors.subtext,
                        }}
                    >
                        <p className="text-[16px] leading-[1.35]">
                            <b>Eight years in product design</b>, building
                            digital experiences across banking, fitness,
                            streaming, food tech, healthcare and e-commerce.
                        </p>

                        <p className="text-[16px] leading-[1.35]">
                            <b>My process is research-first.</b> I want to
                            understand why users behave the way they do before
                            I open Figma.
                        </p>

                        <p className="text-[16px] leading-[1.35]">
                            <b>I own the full design scope</b>, from early
                            research to shipped components, with decisions
                            debated properly instead of handed down.
                        </p>
                    </div>


                    {/* Portrait */}

                    <div className="mt-10">
                        <ProcessPhoto
                            theme={theme}
                            mobile
                        />
                    </div>

                    {/* Process Steps */}

                    <div className="mt-6">

                        {steps.map((step, index) => (
                            <MobileProcessStep
                                key={step.number}
                                step={step}
                                theme={theme}
                                isLast={index === steps.length - 1}
                            />
                        ))}

                    </div>

                </div>

            </SectionReveal>
        </section>
    );
}