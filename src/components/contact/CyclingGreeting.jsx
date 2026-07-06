import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const greetings = [ "Hello!", "Ciao!", "Hallo!", "Bonjour!", "Namaste!", "Salaam!", "Hola!", "Konnichiwa!", "Hey!", "Shalom!", "Hi!" ];

export default function CyclingGreeting() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((current) => (current + 1) % greetings.length);
    }, 1700);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className="inline-grid overflow-hidden min-w-[3.8em] pr-[0.12em] align-baseline leading-[0.9]">
      <AnimatePresence mode="wait">
        <motion.span
          key={greetings[index]}
          className="col-start-1 row-start-1 inline-block leading-[0.9]"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          
        {greetings[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}