import { useEffect, useRef } from "react";

const SECTION_IDS = ["hero", "work", "about", "process", "contact", "footer"];

const NEXT_THRESHOLD = 0.82;
const PREV_THRESHOLD = 0.02;
const SNAP_LOCK_MS = 1250;

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
      }, SNAP_LOCK_MS);
    };

    const getCurrentSectionIndex = (sections) => {
      const y = window.scrollY + 2;

      let currentIndex = 0;

      sections.forEach((section, index) => {
        const start = section.offsetTop;
        const end = start + section.offsetHeight;

        if (y >= start && y < end) {
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

      if (isSnappingRef.current || now - lastSnapTimeRef.current < SNAP_LOCK_MS) {
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

      const rawProgress =
        maxInternalScroll <= 0
          ? 1
          : (window.scrollY - sectionStart) / maxInternalScroll;

      const progress = Math.max(0, Math.min(1, rawProgress));

      const isLongSection = sectionHeight > viewportHeight * 1.4;

      const canGoNext =
        direction === 1 &&
        currentIndex < sections.length - 1 &&
        (!isLongSection || progress >= NEXT_THRESHOLD);

      const canGoPrev =
        direction === -1 &&
        currentIndex > 0 &&
        (!isLongSection || progress <= PREV_THRESHOLD);

      if (canGoNext) {
        event.preventDefault();
        scrollToSection(sections[currentIndex + 1]);
        return;
      }

      if (canGoPrev) {
        event.preventDefault();
        scrollToSection(sections[currentIndex - 1]);
        return;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return null;
}