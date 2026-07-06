import { useEffect } from "react";
import { X } from "lucide-react";
import { themeColors } from "../../utils/theme";

export default function PrivacyModal({ theme = "light", isOpen, onClose }) {
  const colors = themeColors[theme];

  const overlayColor =
  theme === "light"
    ? "rgba(15, 15, 14, 0.10)"      // Dark theme bg @ 10%
    : "rgba(239, 236, 228, 0.10)";

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center px-[20px]">
      <div
        className="absolute inset-0 z-[0] backdrop-blur-[12px]"
        style={{ backgroundColor: overlayColor }}
        onClick={onClose}
      />

      <div
        className="
            modal-scroll
            relative z-[1]
            max-h-[78vh] w-full max-w-[1520px]
            rounded-[clamp(28px,2.5vw,54px)]
        "
        style={{
            backgroundColor: colors.bg,
            color: colors.heading,
        }}
        >
        {/* Sticky header */}
        <div
            className="
            sticky top-0 z-[5]
            flex items-center justify-between
            px-[clamp(28px,7vw,150px)]
            pb-[24px]
            pt-[clamp(32px,4vw,70px)]
            "
            style={{ backgroundColor: colors.bg }}
        >
            <h2 className="font-['Syne'] text-[clamp(22px,1.6vw,32px)] font-bold tracking-[-0.04em]">
            Privacy Policy
            </h2>

            <button
            type="button"
            onClick={(e) => {
                e.stopPropagation();
                onClose();
            }}
            className="flex h-[36px] w-[36px] items-center justify-center rounded-full"
            style={{ color: colors.heading }}
            aria-label="Close privacy policy"
            >
            <X size={22} strokeWidth={2} />
            </button>
        </div>

        {/* Scroll content */}
        <div
            className="
            max-w-[100%]
            px-[clamp(28px,7vw,150px)]
            pb-[clamp(48px,7vw,140px)]
            "
        >
            <div
            className="space-y-[18px] font-['Inter'] text-[clamp(13px,0.83vw,16px)] leading-[1.35]"
            style={{ color: colors.subtext }}
            >
            {/* paragraphs here */}

            <p>
            This portfolio website is owned and maintained by Nikhil Mawar. Your privacy
            is important, and this Privacy Policy explains what information may be
            collected while using this website, how that information is handled, and your
            rights regarding any data you choose to share. This policy applies to all
            visitors regardless of device, browser, or location.
            </p>

            <p>
            Most areas of this website can be accessed without providing any personal
            information. You are free to browse projects, read case studies, and explore
            the portfolio anonymously. Personal information is only collected when you
            voluntarily choose to contact me through the contact form, email links, or
            any other communication method made available on this website.
            </p>

            <h3 className="font-['Syne'] text-[20px] font-bold" style={{ color: colors.heading }}>
            Information You Provide
            </h3>

            <p>
            When you send a message using the contact form, I may receive information such
            as your name, email address, company name, and any project details you choose
            to include. This information is used solely to respond to your inquiry,
            discuss potential collaborations, provide requested information, or continue a
            conversation that you initiated.
            </p>

            <p>
            I will never intentionally collect sensitive personal information such as
            government identification numbers, financial information, passwords, or any
            other confidential data through this website. Please avoid including such
            information in contact messages.
            </p>

            <h3 className="font-['Syne'] text-[20px] font-bold" style={{ color: colors.heading }}>
            Technical Information
            </h3>

            <p>
            Like most modern websites, this portfolio may automatically receive limited
            technical information from your browser. This may include browser type,
            operating system, screen resolution, device type, approximate geographic
            region, language settings, pages visited, referral sources, and general usage
            statistics. These analytics help improve performance, accessibility, and the
            overall user experience.
            </p>

            <p>
            Technical information is analyzed in aggregate whenever possible and is not
            used to personally identify individual visitors.
            </p>

            <h3 className="font-['Syne'] text-[20px] font-bold" style={{ color: colors.heading }}>
            Cookies
            </h3>

            <p>
            This website may use essential browser storage or cookies to remember user
            preferences such as theme selection, interface settings, or other convenience
            features. These technologies improve usability but are not used to build
            advertising profiles or sell personal information.
            </p>

            <p>
            You can disable cookies through your browser settings at any time, although
            some personalization features may no longer function as intended.
            </p>

            <h3 className="font-['Syne'] text-[20px] font-bold" style={{ color: colors.heading }}>
            Third-Party Services
            </h3>

            <p>
            This website may contain links to external platforms including LinkedIn,
            Behance, Instagram, GitHub, WhatsApp, email providers, or other third-party
            services. Once you leave this website, those services operate under their own
            privacy policies and terms of use. I am not responsible for the privacy
            practices or content of third-party websites.
            </p>

            <p>
            Embedded content, fonts, icons, or analytics tools may also be provided by
            trusted third-party services where necessary to improve the presentation or
            functionality of the website.
            </p>

            <h3 className="font-['Syne'] text-[20px] font-bold" style={{ color: colors.heading }}>
            Data Security
            </h3>

            <p>
            Reasonable technical and organizational measures are taken to protect any
            information you voluntarily provide. While every effort is made to safeguard
            personal information, no method of internet transmission or electronic storage
            can be guaranteed to be completely secure. Accordingly, absolute security
            cannot be guaranteed.
            </p>

            <h3 className="font-['Syne'] text-[20px] font-bold" style={{ color: colors.heading }}>
            Data Retention
            </h3>

            <p>
            Information submitted through this website is retained only for as long as
            reasonably necessary to respond to inquiries, maintain professional
            communication, comply with legal obligations, or resolve disputes where
            applicable. Information that is no longer required is deleted when practical.
            </p>

            <h3 className="font-['Syne'] text-[20px] font-bold" style={{ color: colors.heading }}>
            Your Rights
            </h3>

            <p>
            Depending on your location and applicable privacy laws, you may have the right
            to request access to your personal information, request corrections, request
            deletion of personal data, or withdraw consent for future communication. Such
            requests will be handled in accordance with applicable laws wherever
            reasonably possible.
            </p>

            <h3 className="font-['Syne'] text-[20px] font-bold" style={{ color: colors.heading }}>
            Changes to this Policy
            </h3>

            <p>
            This Privacy Policy may be updated periodically to reflect changes in the
            website, legal requirements, or improvements to privacy practices. Any updates
            will be reflected on this page with immediate effect upon publication.
            </p>

            <h3 className="font-['Syne'] text-[20px] font-bold" style={{ color: colors.heading }}>
            Contact
            </h3>

            <p>
            If you have any questions regarding this Privacy Policy, the handling of your
            information, or any aspect of this portfolio, you are welcome to contact me at
            <strong style={{ color: colors.heading }}>
                {" "}
                nikhilmawar0@gmail.com
            </strong>
            . I will make every reasonable effort to respond promptly and address any
            concerns regarding your privacy.
            </p>

            </div>
        </div>
        </div>
    </div>
  );
}