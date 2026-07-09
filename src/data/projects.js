import arorentHero from "../assets/images/arorent-placeholder.png";

export const projects = [
  {
    slug: "arorent",
    title: "AroRent",
    eyebrow: "Case Study",
    subtitle:
      "A peer-to-peer rental platform that makes access smarter, more affordable and more trustworthy.",
    description:
      "AroRent connects people who need products with people who own them. The platform helps users rent or list items locally with confidence — saving money, earning passive income and reducing unnecessary purchases.",
    heroImage: arorentHero,
    meta: [
      { label: "Year", value: "2024" },
      { label: "Type", value: "Company Project" },
      { label: "Duration", value: "3 Months" },
      { label: "Tool", value: "Figma" },
    ],
    links: {
      behance: "#",
      figma: "#",
    },
    problem: [
      "Buying products for short-term use is expensive and inefficient.",
      "Renting locally is fragmented, untrustworthy and time-consuming.",
      "Lenders struggle with pricing, security and managing rentals.",
    ],
    role:
      "As the sole designer, I was responsible for user research, UX strategy, UI design, prototyping and design system creation.",
    roleTags: ["UX Research", "UI Design", "Prototyping", "Design System"],
    solution:
      "A clean, intuitive and trust-driven experience that helps users rent or list products in just a few steps.",
    features: [
      "Category-based browsing",
      "Secure payments & deposits",
      "Transparent pricing",
      "Real-time chat & notifications",
      "Trust & safety at every step",
    ],
    screens: [
      "Browse",
      "Filter and Explore",
      "Product Details",
      "Booking",
      "Payment",
      "Confirmation",
    ],
    nextProject: {
      title: "Kaimo",
      label: "Next Project",
      image: arorentHero,
    },
  },
];