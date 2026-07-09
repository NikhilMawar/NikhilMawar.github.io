import { useState } from "react";
import { themeColors } from "../../utils/theme";
import Button from "../common/Button";

const ACCESS_KEY = "64c5ef91-c105-48a8-817d-6702b2432655";

export default function ContactForm({ theme = "light" }) {
  const colors = themeColors[theme];
  const [status, setStatus] = useState("idle");

  const inputBase =
    "w-full bg-transparent pb-[14px] font-['Inter'] text-[clamp(14px,0.9vw,17px)] outline-none placeholder:opacity-45";

  const fieldStyle = {
    borderColor: colors.tertiary,
    color: colors.heading,
    "--active": colors.heading,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New portfolio message from nikhilmawar.github.io");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        event.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
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
              name="name"
              type="text"
              required
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
              name="email"
              type="email"
              required
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
              name="message"
              required
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
        <Button
          as="button"
          type="submit"
          theme={theme}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending" : "Submit"}
        </Button>
      </div>

      {status !== "idle" && (
        <p
          className="mt-[16px] font-['Inter'] text-[14px]"
          style={{ color: status === "error" ? colors.accent : colors.subtext }}
        >
          {status === "sent" && "Message sent. I’ll get back to you soon."}
          {status === "error" && "Something went wrong. Please email me directly."}
        </p>
      )}
    </form>
  );
}