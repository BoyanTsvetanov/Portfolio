import { gsap } from "gsap";

/**
 * OPTION A: Direct color change (Mimics `setTheme`)
 * Use this inside onEnter / onLeave callbacks.
 */
export const changeBackgroundColor = (color, duration = 0.5) => {
  // By grabbing the element directly, we bypass GSAP's component scoping
  const bgElement = document.getElementById("global-bg-color");

  if (bgElement) {
    gsap.to(bgElement, {
      backgroundColor: color,
      duration: duration,
      ease: "power2.out",
    });
  }
};

/**
 * OPTION B: Scrubbed color change
 * Use this if you want the color to slowly transition as the user scrolls.
 */
export const scrubBackgroundColor = (
  triggerRef,
  color,
  start = "top center",
  end = "bottom center",
) => {
  return gsap.to("#global-bg-color", {
    backgroundColor: color,
    ease: "none",
    scrollTrigger: {
      trigger: triggerRef.current,
      start: start,
      end: end,
      scrub: true,
    },
  });
};
