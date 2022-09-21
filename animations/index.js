import { gsap } from "gsap";

export const changeSize = (element) => {
  gsap.fromTo(
    element,
    {
      scale: 0.5,
    },
    {
      scale: 1.5,
      ease: "bounce",
      yoyoEase: "power3",
    }
  );
};

export const changeColor = (element) => {
  gsap.fromTo(
    element,
    {
      scale: 1.75,
      opacity: 0,
      duration: 2,
      stagger: {
        each: 0.5,
        repeat: -1,
      },
    },
    {
      scale: 1.5,
      opacity: 1,
      duration: 2,
      stagger: {
        each: 0,
        repeat: 0,
      },
    }
  );
};

export const swim = (element, buttonRef) => {
  buttonRef.current.setAttribute("disabled", true);
  const timeline = gsap.timeline({
    defaults: { duration: 2.5, ease: "slow(0.3, 0.4, false)" },
  });
  timeline
    .fromTo(element, { x: 0, y: 0 }, { x: -50, y: 170 })
    .to(element, { x: -150, y: 220 })
    .to(element, { x: -275, y: 150 })
    .to(element, { rotationY: "180" })
    .to(element, { x: 50, y: 200, duration: 4.5 })
    .to(element, { x: 480, y: -100, duration: 4.5 })
    .to(element, { rotationY: "360" })
    .to(element, { x: 380, y: -300 })
    .to(element, { x: 280, y: -200 })
    .to(element, { x: 0, y: 0 })
    .to(element, {
      onComplete: () => buttonRef.current.removeAttribute("disabled"),
    });
};
