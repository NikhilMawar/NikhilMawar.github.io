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

/* kaimo internal img */
/* Kaimo internal images */
import kaimoHero from "../assets/images/kaimoHero.png";
import kaimoPhoneL from "../assets/images/kaimo-phone-L.png";
import kaimoPhoneR from "../assets/images/kaimo-phone-R.png";

import kaimoScreen01 from "../assets/images/kaimo/kaimo-screen-01.png";
import kaimoScreen02 from "../assets/images/kaimo/kaimo-screen-02.png";
import kaimoScreen03 from "../assets/images/kaimo/kaimo-screen-03.png";
import kaimoScreen04 from "../assets/images/kaimo/kaimo-screen-04.png";
import kaimoScreen05 from "../assets/images/kaimo/kaimo-screen-05.png";
import kaimoScreen06 from "../assets/images/kaimo/kaimo-screen-06.png";

export const projects = [
  {
    accentColor: "#F95019",

    workLabel: "Peer-to-Peer Goods Rental App",

    workDescription:
      "A product design case study focused on trust, browsing, listing flows and rental discovery.",

    workPills: [
      "Product Design",
      "Marketplace",
      "Mobile App",
    ],





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
      { label: "Business", value: "Company Project" },
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

      accentColor: "#244F9D",

      workLabel: "Self-Drive Car Rental Platform",

      workDescription:
        "A mobility experience focused on flexible booking, clear pricing and frictionless verification.",

      workPills: [
        "UX Research",
        "Mobility",
        "UI Design",
      ],


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
          label: "Business",
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
        slug: "kaimo",
        title: "Kaimo",
        label: "Next Project",
        image: kaimoHero,
        accentColor: "#348d78",
      },
    },

    {

      accentColor: "#348d78",

      workLabel: "AI Learning Ecosystem",

      workDescription:
        "An AI-powered education platform combining tutoring, social learning and gamified progress.",

      workPills: [
        "Product Design",
        "AI Experience",
        "EdTech",
      ],




      slug: "kaimo",

      title: "Kaimo",
      eyebrow: "Case Study",

      subtitle:
        "An AI-powered learning ecosystem designed to make digital education more engaging, social and rewarding.",

      description:
        "Kaimo replaces the clinical feel of traditional EdTech with a high-energy learning experience built around AI companionship, peer collaboration and gamified progress. The platform helps students stay motivated, clarify difficult concepts and manage their academic journey within one connected ecosystem.",

      heroImage: kaimoHero,

      heroPhones: {
        left: kaimoPhoneL,
        right: kaimoPhoneR,
      },

      meta: [
        {
          label: "Year",
          value: "2026",
        },
        {
          label: "Business",
          value: "Concept Project",
        },
        {
          label: "Duration",
          value: "4 Months",
        },
        {
          label: "Tools",
          value: "Figma + FigJam",
        },
      ],

      links: {
        behance: "#",
        figma: "#",
      },

      problem: [
        "Students often feel isolated and unmotivated while studying online.",
        "Traditional educational platforms feel clinical, fragmented and passive.",
        "Switching between multiple study tools creates cognitive overload.",
      ],

      role:
        "I led the end-to-end product design process, including user research, product strategy, information architecture, UX design, visual design, branding, prototyping and design system creation.",

      roleTags: [
        "UX Research",
        "Product Design",
        "AI Experience",
        "Visual Design",
        "Design System",
      ],

      solution:
        "A unified AI learning ecosystem that combines intelligent tutoring, peer collaboration, progress tracking and gamified rewards within a premium Liquid Glass interface.",

      features: [
        "MoBot AI study companion",
        "Peer collaboration and group chat",
        "Gamified progress and Kcoin rewards",
        "Academic dashboards and grade tracking",
        "Interactive learning content",
      ],

      screens: [
        {
          title: "Dashboard",
          image: kaimoScreen01,
        },
        {
          title: "Grade Book",
          image: kaimoScreen02,
        },
        {
          title: "MoBot AI",
          image: kaimoScreen03,
        },
        {
          title: "Study Groups",
          image: kaimoScreen04,
        },
        {
          title: "Progress Tracking",
          image: kaimoScreen05,
        },
        {
          title: "Profile",
          image: kaimoScreen06,
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