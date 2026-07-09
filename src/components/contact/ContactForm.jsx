import { useState } from "react";
import { themeColors } from "../../utils/theme";
import Button from "../common/Button";

const ACCESS_KEY = "64c5ef91-c105-48a8-817d-6702b2432655";

export default function ContactForm({ theme = "light" }) {
  const colors = themeColors[theme];
  const [status, setStatus] = useState("idle");

  const isSending = status === "sending";

  const inputBase =
    "w-full bg-transparent pb-[14px] font-['Inter'] text-[clamp(14px,0.9vw,17px)] outline-none placeholder:opacity-45 disabled:opacity-60";

  const fieldStyle = {
    borderColor: colors.tertiary,
    color: colors.heading,
    "--active": colors.heading,
    "--field-bg": colors.bg,
  };

  const resetStatusLater = (delay = 3500) => {
    setTimeout(() => {
      setStatus("idle");
    }, delay);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (isSending) return;

    setStatus("sending");

    const formData = new FormData(form);

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !message) {
      setStatus("validation");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);

      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatus("invalid-email");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);

      return;
    }

    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New portfolio message from nikhilmawar.github.io");
    formData.append("from_name", "Portfolio Website");
    formData.append("replyto", formData.get("email"));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success === true) {
        setStatus("sent");
        form.reset();
        resetStatusLater(3500);
      } else {
        setStatus("error");
        resetStatusLater(4500);
      }
    } catch {
      setStatus("error");
      resetStatusLater(4500);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" />

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
              disabled={isSending}
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
              disabled={isSending}
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
              disabled={isSending}
              data-cursor="type"
              placeholder="Tell me about your project"
              rows={1}
              className={`${inputBase} resize-none`}
              style={{ color: colors.heading }}
            />
          </div>
        </label>
      </div>

      <div className="mt-[clamp(28px,2.4vw,46px)] flex items-center gap-[16px]">
        <Button
          as="button"
          type="submit"
          theme={theme}
          disabled={isSending}
        >
          {isSending ? "Sending" : "Submit"}
        </Button>

        {status !== "idle" && (
          <p
            className="font-['Inter'] text-[14px] leading-none"
            style={{
              color:
                status === "sent"
                  ? colors.green
                  : status === "sending"
                  ? colors.subtext
                  : colors.accent
            }}
          > 
            {status === "sending" && "Sending..."}
            {status === "validation" && "Please complete all fields."}
            {status === "invalid-email" && "Invalid email address."}
            {status === "sent" && "Message received. I’ll reach out soon."}
            {status === "error" && "Something went wrong."}
          </p>
        )}
      </div>
    </form>
  );
}