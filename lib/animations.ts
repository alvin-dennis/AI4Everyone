import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function initGSAP() {
  if (typeof window === "undefined") return;

  try {
    gsap.registerPlugin(ScrollTrigger);
  } catch (e) {
    // plugin already registered or running in an environment where it isn't available
  }

  // parallax-like slow translate for elements with .parallax
  gsap.utils.toArray(".parallax").forEach((el: any) => {
    gsap.to(el, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  // reveal story elements
  gsap.utils.toArray(".story-element").forEach((el: any) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // draw connectors between partner tiles (SVG paths with .connector-path)
  gsap.utils.toArray(".connector-path").forEach((el: any) => {
    try {
      const path: SVGPathElement = el as SVGPathElement;
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: path,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    } catch (e) {
      // ignore if not an SVG path or running in unsupported env
    }
  });
}
