import { useEffect, useState } from "react";
import { themeColors } from "../utils/theme";
import MaskedLink from "../components/contact/MaskedLink";
import PrivacyModal from "../components/footer/PrivacyModal";

export default function Footer({ theme = "light", setOverlayOpen }) {
  const colors = themeColors[theme];
  const [time, setTime] = useState("");
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const ontarioTime = new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Toronto",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());

      setTime(ontarioTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer
      className="relative z-[2] w-full"
      style={{
        backgroundColor: colors.bg,
        color: colors.heading,
      }}
    >
      <div className="mx-auto w-full max-w-[1920px] px-[clamp(20px,2.6vw,50px)] pb-[clamp(28px,2.5vw,48px)] pt-[clamp(36px,4vw,76px)]">
        <p
          className="font-['Inter'] text-[clamp(16px,1.04vw,20px)] leading-none tracking-[-0.02em]"
          style={{ color: colors.subtext }}
        >
          Made with ♥ and lots of Coffee.
        </p>

        <div className="mt-[clamp(30px,1.56vw,40px)] grid grid-cols-12 items-end gap-x-[clamp(24px,3vw,58px)] gap-y-[32px]">
          <div className="col-span-12 lg:col-span-6">
            <MaskedLink
              href="mailto:nikhilmawar0@gmail.com"
              theme={theme}
              className="text-[clamp(14px,0.73vw,14px)]"
            >
              nikhilmawar0@gmail.com
            </MaskedLink>

            <div className="mt-[14px]">
              <span
                className="
                  inline-flex items-center rounded-full border
                  px-[18px] py-[7px]
                  font-['Inter'] text-[clamp(14px,0.73vw,14px)]
                  font-medium uppercase tracking-[0.03em]
                  leading-none whitespace-nowrap
                "
                style={{
                  backgroundColor: colors.bg,
                  borderColor: colors.tertiary,
                  color: colors.subtext,
                }}
              >
                ONTARIO, CANADA
                <span
                  className="mx-[12px] h-[14px] w-px"
                  style={{ backgroundColor: colors.tertiary }}
                />
                {time}
              </span>
            </div>
          </div>

          <div className="col-span-12 flex flex-col items-start gap-[28px] lg:col-span-6 lg:items-end">
            <MaskedLink
              href="#"
              theme={theme}
              onClick={(e) => {
                e.preventDefault();
                setOverlayOpen?.(true);
                setPrivacyOpen(true);
              }}
              className="text-[clamp(14px,0.73vw,14px)]"
            >
              Privacy Policy
            </MaskedLink>

            <p
              className="font-['Inter'] text-[clamp(14px,0.73vw,14px)] font-semibold leading-none"
              style={{ color: colors.subtext }}
            >
              ©2026 Nikhil Mawar. All rights reserved
            </p>
          </div>
        </div>
      </div>

      <PrivacyModal
        theme={theme}
        isOpen={privacyOpen}
        onClose={() => 
            {
                setPrivacyOpen(false)
                setOverlayOpen?.(false)}
        }

      />
    </footer>
  );
}