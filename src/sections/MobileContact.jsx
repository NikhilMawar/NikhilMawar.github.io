import { useState } from "react";
import { themeColors } from "../utils/theme";

import SectionReveal from "../components/common/SectionReveal";
import CyclingGreeting from "../components/contact/CyclingGreeting";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import HeroTicker from "../components/hero/HeroTicker";

const email = "nikhilmawar0@gmail.com";

export default function MobileContact({ theme = "light" }) {
    const colors = themeColors[theme];

    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async (event) => {
        event.preventDefault();

        try {
            await navigator.clipboard.writeText(email);

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 1600);
        } catch {
            window.location.href = `mailto:${email}`;
        }
    };

    return (
        <section
            id="contact"
            style={{
                backgroundColor: colors.bg,
                color: colors.heading,
            }}
        >
            <SectionReveal>

                <div className="mx-auto max-w-[640px] px-[24px] pt-[20px] pb-[96px]">

                    <p
                        className="text-[12px] font-medium uppercase tracking-[0.02em]"
                        style={{ color: colors.subtext }}
                    >
                        Get in touch
                    </p>

                    <h2
                        className="mt-2 font-['Syne'] text-[38px] font-extrabold leading-[1] tracking-[-0.06em]"
                    >
                        Say <br></br> <CyclingGreeting />
                    </h2>

                    <div
                        className="mt-4 h-px w-full"
                        style={{ backgroundColor: colors.tertiary }}
                    />

                    <div className="mt-6 space-y-6">

                        <p
                            className="text-[16px] leading-[1.35] tracking-[-0.02em]"
                            style={{ color: colors.subtext }}
                        >
                            You have come to the right place. If you value close
                            collaboration, clear communication and full transparency,
                            I would love to hear from you.
                        </p>

                        <ContactInfo
                            theme={theme}
                            email={email}
                            copied={copied}
                            onCopy={handleCopyEmail}
                        />

                    </div>

                    <div
                        className="my-10 h-px w-full"
                        style={{ backgroundColor: colors.tertiary }}
                    />

                    <ContactForm theme={theme} />

                </div>

            </SectionReveal>

            <div className="absolute inset-x-0">
                <HeroTicker theme={theme} />
            </div>
        </section>
    );
}