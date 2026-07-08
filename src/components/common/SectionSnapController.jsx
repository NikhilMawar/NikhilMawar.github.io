import { useEffect, useRef } from "react";

const SECTION_IDS = ["hero", "work", "about", "process", "contact", "footer"];

export default function SectionSnapController() {
  const isSnappingRef = useRef(false);
  const lastSnapTimeRef = useRef(0);

  useEffect(() => {
    const getSections = () =>
      SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

    const scrollToSection = (section) => {
      if (!section) return;

      isSnappingRef.current = true;
      lastSnapTimeRef.current = Date.now();

      const targetTop = section.offsetTop;

      if (window.lenis?.scrollTo) {
        window.lenis.scrollTo(targetTop, {
          duration: 1.25,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        window.scrollTo({
          top: targetTop,
          behavior: "smooth",
        });
      }

      window.setTimeout(() => {
        isSnappingRef.current = false;
      }, 1200);
    };

    const getCurrentSectionIndex = (sections) => {
      const viewportMiddle = window.scrollY + window.innerHeight / 2;

      let currentIndex = 0;

      sections.forEach((section, index) => {
        const start = section.offsetTop;
        const end = start + section.offsetHeight;

        if (viewportMiddle >= start && viewportMiddle < end) {
          currentIndex = index;
        }
      });

      return currentIndex;
    };

    const handleWheel = (event) => {
      if (window.innerWidth < 1024) return;
      if (document.body.style.overflow === "hidden") return;

      const target = event.target;

      if (
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[contenteditable='true']") ||
        target.closest(".modal-scroll")
      ) {
        return;
      }

      const now = Date.now();

      if (isSnappingRef.current || now - lastSnapTimeRef.current < 900) {
        event.preventDefault();
        return;
      }

      const sections = getSections();
      if (!sections.length) return;

      const currentIndex = getCurrentSectionIndex(sections);
      const currentSection = sections[currentIndex];

      const direction = event.deltaY > 0 ? 1 : -1;

      const sectionStart = currentSection.offsetTop;
      const sectionHeight = currentSection.offsetHeight;
      const viewportHeight = window.innerHeight;
      const maxInternalScroll = sectionHeight - viewportHeight;

      const progress =
        maxInternalScroll <= 0
          ? 1
          : (window.scrollY - sectionStart) / maxInternalScroll;

      const isLongSection = sectionHeight > viewportHeight * 1.4;

      const canGoNext =
        direction === 1 &&
        currentIndex < sections.length - 1 &&
        (!isLongSection || progress >= 0.92);

      const canGoPrev =
        direction === -1 &&
        currentIndex > 0 &&
        (!isLongSection || progress <= 0.08);

      if (canGoNext) {
        event.preventDefault();
        scrollToSection(sections[currentIndex + 1]);
      }

      if (canGoPrev) {
        event.preventDefault();
        scrollToSection(sections[currentIndex - 1]);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return null;
}