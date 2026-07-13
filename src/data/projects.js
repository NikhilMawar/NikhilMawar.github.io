/* arorent internal img */
import arorentHero from "../assets/images/arorent-placeholder.png";
import arorentPhoneR from "../assets/images/arorent-phone-R.png";
import arorentPhoneL from "../assets/images/arorent-phone-L.png";
import aroRentBrowse from "../assets/images/arorent/browse.png";
import aroRentFilter from "../assets/images/arorent/filter.png";
import aroRentProduct from "../assets/images/arorent/product-details.png";
import aroRentBooking from "../assets/images/arorent/booking.png";
import aroRentPayment from "../assets/images/arorent/payment.png";
import aroRentConfirmation from "../assets/images/arorent/confirmation.png";

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
      slug: "kaimo",
      title: "Kaimo",
      label: "Next Project",
      image: arorentHero,
      accentColor: "#168A45",
    }, 
  },
];