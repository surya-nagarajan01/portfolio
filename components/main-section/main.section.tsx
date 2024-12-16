"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import AboutMeCardSection from "../about-me/about-me";
import ExperienceSection from "../experience/experience.section";
import SkillSection from "../skills/skills.section";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "power2.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1500 top",
          scrub: 4,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <SkillSection />
     <ExperienceSection />
      <AboutMeCardSection /> 
    </section>
    // <section className="scroll-section-outer overflow-hidden">
    //   <div ref={triggerRef}>
    //     <div ref={sectionRef} className="scroll-section-inner">
    //       <div className="scroll-section">
    //       </div>
    //       <div className="scroll-section">
    //       </div>
    //       <div className="scroll-section">
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default ScrollSection;
