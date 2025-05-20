import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const barVariants = {
    initial: { scaleY: 0.5, opacity: 1 },
    animate: {
      scaleY: [0.1, 1, 0.1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "loop",
      },
    },
    exit: {
      scaleY: 0,
      opacity: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-light dark:bg-dark flex items-end justify-center gap-2 z-[9999]"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-[20vw] h-full bg-red-600"
              variants={barVariants}
              style={{ originY: 1 }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
