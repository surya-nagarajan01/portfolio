"use client";
import social_constant from "@/constant/social.constant";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin);

const CreativeTextAnimation: React.FC = () => {
  const roleRef = useRef<HTMLHeadingElement>(null);
  const developerRef = useRef<HTMLHeadingElement>(null);
  const innovationRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!roleRef.current || !developerRef.current || !innovationRef.current)
      return;
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
        duration: 1.5,
      },
    });

    tl.to(roleRef.current, {
      duration: 1,
      text: "👋 Hi there, I'm a Surya",
    });
    tl.to(developerRef.current, {
      duration: 1,
      text: "Building Scalable Solutions",
    });

    tl.to(innovationRef.current, {
      duration: 2,
      text: "Shaping the Future of Technology!",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div className="w-96 h-96 absolute z-10 bg-primary rounded-full -bottom-20 -left-10 md:-bottom-10 md-left-10 opacity-20 blur-3xl"></div>
      <div className="w-96 h-96 absolute z-10 bg-green-500 rounded-full -top-20 -right-10 md:-right-10 md:-top-10 opacity-20 blur-3xl"></div>
      <div className="flex flex-col justify-center items-center p-4 h-[100vh] max-w-[1400px] mx-auto gap-8 md:gap-6 relative overflow-hidden">
        <div className="w-full flex flex-col items-center justify-center">
          <h1
            className="text-5xl text-center md:text-6xl text-primary font-bold leading-relaxed md:leading-normal"
            ref={roleRef}
          ></h1>

          <h1
            className="text-4xl text-center md:text-6xl text-black font-bold leading-relaxed md:leading-normal"
            ref={developerRef}
          ></h1>
          <h1
            className="text-4xl text-center md:text-6xl text-primary font-bold leading-relaxed md:leading-normal"
            ref={innovationRef}
          ></h1>
        </div>
        <div>
          <div className="flex flex-row gap-4">
            {social_constant.map((each, index) => {
              return (
                <div
                  key={index}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center  hover:animate-pulse cursor-pointer"
                >
                  <Link href={each.link} target="_blank">
                    <Image
                      src={each.icon}
                      width={80}
                      height={80}
                      alt="hero-image"
                      className=""
                    ></Image>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeTextAnimation;
