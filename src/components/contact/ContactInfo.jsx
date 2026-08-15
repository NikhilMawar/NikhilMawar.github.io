import { Copy } from "lucide-react";
import MaskedLink from "./MaskedLink";
import { themeColors } from "../../utils/theme";

export default function ContactInfo({
    theme = "light",
    email,
    copied,
    onCopy,
}) {
    const colors = themeColors[theme];

    return (
        <div>

            {/* Email */}

            <div className="flex items-center justify-between">

                <a
                    href={`mailto:${email}`}
                    onClick={onCopy}
                    className="
                        font-['Inter']
                        text-[24px]
                        font-semibold
                        tracking-[-0.02em]
                        break-all
                    "
                    style={{
                        color: colors.subtext,
                    }}
                >
                    {copied ? "Copied" : email}
                </a>

                <button
                    type="button"
                    onClick={onCopy}
                    aria-label="Copy email"
                    className="
                        ml-4
                        shrink-0
                    "
                    style={{
                        color: colors.subtext,
                    }}
                >
                    <Copy
                        size={22}
                        strokeWidth={1.8}
                    />
                </button>

            </div>

            {/* Social Links */}

            <div
                className="
                    mt-10
                    grid
                    grid-cols-2
                    gap-y-8
                "
            >

                <MaskedLink
                    href="#"
                    theme={theme}
                    className="text-[14px]"
                >
                    Linkedin
                </MaskedLink>

                <MaskedLink
                    href="#"
                    theme={theme}
                    className="justify-self-end text-[14px]"
                >
                    Instagram
                </MaskedLink>

                <MaskedLink
                    href="#"
                    theme={theme}
                    className="text-[14px]"
                >
                    Whatsapp
                </MaskedLink>

                <MaskedLink
                    href="#"
                    theme={theme}
                    className="justify-self-end text-[14px]"
                >
                    Behance
                </MaskedLink>

            </div>

        </div>
    );
}