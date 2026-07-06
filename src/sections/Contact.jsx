import { useState } from "react";
import { Copy } from "lucide-react";
import { themeColors } from "../utils/theme";
import CyclingGreeting from "../components/contact/CyclingGreeting";
import MaskedLink from "../components/contact/MaskedLink";
import ContactForm from "../components/contact/ContactForm";
import DinoGame from "../components/contact/DinoGame";
import HeroTicker from "../components/hero/HeroTicker";

const email = "nikhilmawar0@gmail.com";

export default function Contact({ theme = "light" }) {
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
      className="relative h-[250vh] w-full"
      style={{
        backgroundColor: colors.bg,
        color: colors.heading,
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
      <div className="mx-auto w-full max-w-[1920px] px-[clamp(20px,2.6vw,50px)] py-[clamp(95px,6.8vw,130px)]">
        <p
          className="mb-[clamp(12px,1vw,18px)] text-[clamp(12px,0.83vw,16px)] font-medium uppercase tracking-[0.02em]"
          style={{ color: colors.subtext }}
        >
          Get in touch
        </p>

        <h2
          className="font-['Syne'] text-[clamp(64px,7vw,135px)] font-extrabold leading-[0.9] tracking-[-0.06em]"
          style={{ color: colors.heading }}
        >
          Say <CyclingGreeting />
        </h2>

        <div
          className="mt-[clamp(22px,1.8vw,34px)] h-px w-full"
          style={{ backgroundColor: colors.tertiary }}
        />

        <div className="grid grid-cols-12 gap-x-[clamp(24px,3vw,58px)] pt-[clamp(32px,2.6vw,50px)]">
          <div className="col-span-12 lg:col-span-6">
            <p
              className="max-w-[820px] font-['Inter'] text-[clamp(16px,1.04vw,20px)] leading-[1.18] tracking-[-0.02em]"
              style={{ color: colors.subtext }}
            >
              You have come to the right place. If you value close
              collaboration, clear communication and full transparency, I would
              love to hear from you.
            </p>

            <div className="mt-[clamp(38px,4vw,76px)] flex items-center gap-[clamp(16px,1.4vw,28px)]">
              <MaskedLink
                href={`mailto:${email}`}
                onClick={handleCopyEmail}
                theme={theme}
                arrowSize={24}
                disableMask={copied}  
                className="text-[clamp(30px,2.8vw,54px)]"
              >
                {copied ? "Copied" : email}
              </MaskedLink>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex h-[34px] w-[34px] items-center justify-center"
                style={{ color: colors.subtext }}
                aria-label="Copy email"
              >
                <Copy size={22} strokeWidth={1.8} />
              </button>
            </div>

            <div className="mt-[clamp(32px,3vw,58px)] flex flex-wrap gap-x-[clamp(28px,4vw,76px)] gap-y-[18px]">
              <MaskedLink href="#" theme={theme} className="text-[14px]">
                Linkedin
              </MaskedLink>
              <MaskedLink href="#" theme={theme} className="text-[14px]">
                Whatsapp
              </MaskedLink>
              <MaskedLink href="#" theme={theme} className="text-[14px]">
                Instagram
              </MaskedLink>
              <MaskedLink href="#" theme={theme} className="text-[14px]">
                Behance
              </MaskedLink>
            </div>

            {/*<div className="mt-[clamp(34px,3.5vw,70px)]">
              <DinoGame theme={theme} />
            </div>*/}
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          <div className="col-span-12 mt-[64px] lg:col-span-5 lg:mt-0">
            <ContactForm theme={theme} />
          </div>
        </div>
      </div>
      <HeroTicker theme={theme} />
      </div>
    </section>
  );
}