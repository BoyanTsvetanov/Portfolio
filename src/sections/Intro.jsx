import { useEffect, useState } from "react";

export default function Intro() {
  const [exit, setExit] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Start exit animation after 4.5s
    const exitTimer = setTimeout(() => setExit(true), 4500);

    // Remove from DOM after exit animation (1.5s after exit starts)
    const hideTimer = setTimeout(() => setHide(true), 6000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hide) return null; // Completely removes the intro

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-light dark:bg-dark flex items-end justify-center gap-2 z-[9999] transition-all duration-1000 ${
        exit ? "opacity-0" : "opacity-100"
      }`}
    >
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-[20vw] h-[10%] bg-red-600 transition-all ${
            exit
              ? "animate-[shrinkFade_1.5s_ease-in-out_forwards]"
              : "animate-[grow_1.5s_ease-in-out_infinite]"
          }`}
          style={{ animationDelay: `${i * 0.3}s` }}
        ></div>
      ))}
    </div>
  );
}
