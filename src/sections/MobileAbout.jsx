import SectionReveal from "../components/common/SectionReveal";
import Button from "../components/common/Button";
import { themeColors } from "../utils/theme";
import ResumeSection from "../components/about/ResumeSection";
import StatusPill from "../components/hero/StatusPill";

export default function MobileAbout({
    theme = "light",
}) {
    const colors = themeColors[theme];

    const experience = [
        {
            title: "Shyft Pvt. Ltd.",
            subtitle: "Product Designer",
            date: "Dec 2018 - Present",
        },
        {
            title: "KYLO",
            subtitle: "UI/UX Designer",
            date: "Jan 2024 - Aug 2024",
        },
        {
            title: "GRRAS",
            subtitle: "Graphic Designer",
            date: "Jun 2022 - Dec 2023",
        },
    ];

    const education = [
        {
            title: "Information Technology Business Analysis",
            subtitle: "Conestoga College",
            date: "2023 - 2025",
        },
    ];

    const awards = [
        {
            title: "Awwwards Young Jury",
            subtitle: "Design Evaluation / Jury",
            date: "2023 - 2025",
        },
    ];

    const skills = [
        "Figma",
        "Adobe XD",
        "Photoshop",
        "Illustrator",
        "Framer",
        "React",
        "HTML",
        "CSS",
    ];

    return (
        <section
            id="about"
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
                        My Story
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
                        About
                    </h2>

                    {/* Divider */}

                    <div
                        className="mt-4 h-px w-full"
                        style={{
                            backgroundColor: colors.tertiary,
                        }}
                    />

                    {/* Story */}

                    <div
                        className="mt-6 space-y-6"
                        style={{
                            color: colors.subtext,
                        }}
                    >
                        <p className="text-[16px] leading-[1.35]">
                            <b>What began as a freelance graphic design journey</b>,
                             soon evolved into a passion for product design.
                            Driven by curiosity and a desire to solve meaningful
                            problems, I progressed from small client projects
                            to designing complex digital products.
                        </p>

                        <p className="text-[16px] leading-[1.35]">
                            <b>Over the years</b>, I've worked across rental
                            marketplaces, fintech, healthcare, e-commerce and
                            AI experiences, refining my ability to transform
                            complexity into intuitive, user-centred solutions.
                        </p>

                        <p className="text-[16px] leading-[1.35]">
                            <b>Today</b>, I focus on designing products that balance
                            business goals with usability while creating
                            experiences that feel simple, scalable and
                            meaningful.
                        </p>
                    </div>

                    {/* CV */}

                    <div className="mt-8">

                        <Button
                            theme={theme}
                            href="/resume.pdf"
                            target="_blank"
                        >
                            View CV
                        </Button>

                    </div>

                    {/*Divider

                    <div
                        className="mt-12 h-px w-full"
                        style={{
                            backgroundColor: colors.tertiary,
                        }}
                    />*/}


                    {/* Experience */}

                    <ResumeSection
                        title="Experience"
                        items={experience}
                        theme={theme}
                        className="mt-12"
                    />

                    <ResumeSection
                        title="Education"
                        items={education}
                        theme={theme}
                        className="mt-12"
                    />

                    <ResumeSection
                        title="awards"
                        items={awards}
                        theme={theme}
                        className="mt-12"
                    />

                    <div className="mt-12">

                        <h3
                            className="
                                font-['Inter']
                                text-[12px]
                                uppercase
                                tracking-[0.03em]
                                font-medium
                            "
                            style={{
                                color: colors.heading,
                            }}
                        >
                            Skills
                        </h3>

                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">

                        {skills.map((skill) => (

                            <StatusPill
                                mobile
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
                </div>

            </SectionReveal>
        </section>
    );
}