import { motion } from "framer-motion";
import { themeColors } from "../../utils/theme";
import ArrowIcon from "../../assets/svg/arrow-2.svg?react";

export default function MaskedLink({
  href = "#",
  children,
  theme = "light",
  className = "",
  target = "_self",
  onClick,
  arrowSize = 12,
  disableMask = false,
}) {
  const colors = themeColors[theme];

  return (
    <motion.a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      onClick={onClick}
      className={`
        group inline-flex items-center
        font-['Inter']
        font-semibold
        leading-none
        tracking-[-0.02em]
        ${className}
      `}
      style={{ color: colors.subtext }}
      variants={{
        rest: { color: colors.subtext },
        hover: { color: colors.heading },
      }}
      initial="rest"
      animate="rest"
      whileHover="hover"
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {disableMask ? (
        <span className="py-[0.08em]">{children}</span>
      ) : (
        <span className="inline-grid overflow-hidden py-[0.08em]">
          <motion.span
            className="col-start-1 row-start-1 block"
            variants={{
              rest: { y: "0%" },
              hover: { y: "-200%" },
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {children}
          </motion.span>

          <motion.span
            className="col-start-1 row-start-1 block"
            variants={{
              rest: { y: "200%" },
              hover: { y: "0%" },
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {children}
          </motion.span>
        </span>
      )}

      <motion.span
        className="ml-[8px] inline-flex"
        style={{
          width: arrowSize,
          height: arrowSize,
        }}
        variants={{
          rest: { x: 0 },
          hover: { x: 5 },
        }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 20,
        }}
      >
        <ArrowIcon className="h-full w-full" />
      </motion.span>
    </motion.a>
  );
}