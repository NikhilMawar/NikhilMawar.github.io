import { themeColors } from "../../utils/theme";
import Button from "../common/Button";

export default function ContactForm({ theme = "light" }) {
  const colors = themeColors[theme];

  const inputBase =
    "w-full bg-transparent pb-[14px] font-['Inter'] text-[clamp(14px,0.9vw,17px)] outline-none placeholder:opacity-45";

  const fieldStyle = {
    borderColor: colors.tertiary,
    color: colors.heading,
    "--active": colors.heading,
  };

  return (
    <form className="w-full">
      <div className="space-y-[clamp(14px,0.9vw,17px)]">
        <label className="block">
          <span
            className="mb-[10px] block font-['Syne'] text-[clamp(16px,1.04vw,20px)] font-bold tracking-[-0.03em]"
            style={{ color: colors.heading }}
          >
            Name
          </span>

          <div className="contact-field border-b" style={fieldStyle}>
            <input
              type="text"
              data-cursor="type"
              placeholder="Enter your name"
              className={inputBase}
              style={{ color: colors.heading }}
            />
          </div>
        </label>

        <label className="block">
          <span
            className="mb-[10px] block font-['Syne'] text-[clamp(16px,1.04vw,20px)] font-bold tracking-[-0.03em]"
            style={{ color: colors.heading }}
          >
            Email
          </span>

          <div className="contact-field border-b" style={fieldStyle}>
            <input
              type="email"
              data-cursor="type"
              placeholder="Enter your email"
              className={inputBase}
              style={{ color: colors.heading }}
            />
          </div>
        </label>

        <label className="block">
          <span
            className="mb-[10px] block font-['Syne'] text-[clamp(16px,1.04vw,20px)] font-bold tracking-[-0.03em]"
            style={{ color: colors.heading }}
          >
            Your Project
          </span>

          <div className="contact-field border-b" style={fieldStyle}>
            <textarea
              data-cursor="type"
              placeholder="Tell me about your project"
              rows={1}
              className={`${inputBase} resize-none`}
              style={{ color: colors.heading }}
            />
          </div>
        </label>
      </div>

      <div className="mt-[clamp(28px,2.4vw,46px)]">
        <Button theme={theme} href="#">
          Submit
        </Button>
      </div>
    </form>
  );
}