/* arorent internal img */
import arorentHero from "../assets/images/arorent-placeholder.png";
import arorentPhoneR from "../assets/images/arorent-phone-R.png";
import arorentPhoneL from "../assets/images/arorent-phone-L.png";
import aroRentBrowse from "../assets/images/arorent/browse.png";
import aroRentFilter from "../assets/images/arorent/product-filter.png";
import aroRentProduct from "../assets/images/arorent/product-details.png";
import aroRentBooking from "../assets/images/arorent/booking.png";
import aroRentPayment from "../assets/images/arorent/payment.png";
import aroRentConfirmation from "../assets/images/arorent/confirmation.png";

/* Zeta internal img */
import zetaHero from "../assets/images/zetaHero.png";
import zetaPhoneR from "../assets/images/zeta-phone-R.png";
import zetaPhoneL from "../assets/images/zeta-phone-L.png";
import zetaScreen01 from "../assets/images/zeta/zeta-screen-01.png";
import zetaScreen02 from "../assets/images/zeta/zeta-screen-02.png";
import zetaScreen03 from "../assets/images/zeta/zeta-screen-03.png";
import zetaScreen04 from "../assets/images/zeta/zeta-screen-04.png";
import zetaScreen05 from "../assets/images/zeta/zeta-screen-05.png";
import zetaScreen06 from "../assets/images/zeta/zeta-screen-06.png";

export const projects = [
  {
    slug: "arorent",
    title: "AroRent",
    eyebrow: "Case Study",
    subtitle:
      "A peer-to-peer rental platform that makes access smarter, more affordable and more trustworthy.",
    description:
      "AroRent connects people who need products with people who own them. The platform helps users rent or list items locally with confidence — saving money, earning passive income and reducing unnecessary purchases.",
    heroPhones: {
      right: arorentPhoneR,
      left: arorentPhoneL,
    },
    heroImage: arorentHero,
    meta: [
      { label: "Year", value: "2024" },
      { label: "Type", value: "Company Project" },
      { label: "Duration", value: "3 Months" },
      { label: "Tool", value: "Figma" },
    ],
    links: {
      behance: "https://www.behance.net/gallery/243251001/AroRent-UIUX-Case-Study",
      figma: "https://www.figma.com/proto/02JT690FbkMaBbzB3YxqVv/Aorent?node-id=976-3257&t=xZ0Ag6aRkqRCdgHP-1&scaling=min-zoom&content-scaling=fixed&page-id=976%3A966&starting-point-node-id=976%3A3257&show-proto-sidebar=1",
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
      {
        title: "Browse",
        image: aroRentBrowse,
      },
      {
        title: "Filter and Explore",
        image: aroRentFilter,
      },
      {
        title: "Product Details",
        image: aroRentProduct,
      },
      {
        title: "Booking",
        image: aroRentBooking,
      },
      {
        title: "Payment",
        image: aroRentPayment,
      },
      {
        title: "Confirmation",
        image: aroRentConfirmation,
      },
    ],
    nextProject: {
      slug: "zeta",
      title: "Zeta",
      label: "Next Project",
      image: zetaHero,
      accentColor: "#244F9D",
    },
  },


    /*Zeta*/

    {
      slug: "zeta",

      title: "Zeta",
      eyebrow: "Case Study",

      subtitle:
        "A self-drive car rental platform built around trust, flexibility and frictionless mobility.",

      description:
        "Zeta reimagines self-drive rentals through a mobile-first experience focused on transparent pricing, simplified verification and flexible booking. The platform helps users discover, book and manage vehicles without the heavy deposits and complicated paperwork common in traditional rentals.",

      heroImage: zetaHero,

      heroPhones: {
        left: zetaPhoneL,
        right: zetaPhoneR,
      },

      meta: [
        {
          label: "Year",
          value: "2024",
        },
        {
          label: "Type",
          value: "Company Project",
        },
        {
          label: "Duration",
          value: "3 Months",
        },
        {
          label: "Tools",
          value: "Figma + Photoshop",
        },
      ],

      links: {
        behance: "#",
        figma: "#",
      },

      problem: [
        "Traditional self-drive rentals require large deposits and extensive paperwork.",
        "Complicated booking and KYC flows create friction for first-time renters.",
        "Hidden costs and unclear rental terms reduce user trust.",
      ],

      role:
        "I led the end-to-end UI/UX and brand identity work, including research, information architecture, user flows, visual design, prototyping and the creation of a scalable component system.",

      roleTags: [
        "UX Research",
        "UI Design",
        "Brand Identity",
        "Prototyping",
      ],

      solution:
        "A streamlined, trust-driven rental experience that simplifies vehicle discovery, identity verification, booking and trip management.",

      features: [
        "Transparent pricing and rental terms",
        "Streamlined booking flow",
        "Paperless identity verification",
        "Flexible rental duration",
        "Doorstep vehicle delivery",
      ],

      screens: [
        {
          title: "Authentication",
          image: zetaScreen01,
        },
        {
          title: "Onboarding",
          image: zetaScreen02,
        },
        {
          title: "Car Discovery",
          image: zetaScreen03,
        },
        {
          title: "Booking Details",
          image: zetaScreen04,
        },
        {
          title: "Payment",
          image: zetaScreen05,
        },
        {
          title: "Trip Management",
          image: zetaScreen06,
        },
      ],

      nextProject: {
        slug: "arorent",
        title: "AroRent",
        label: "Next Project",
        image: arorentHero,
        accentColor: "#F95019",
      },
    },
];