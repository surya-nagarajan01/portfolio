"use client";

import suryaImage from "@/assets/profile.png";
import Image from "next/image";

const AboutMeCardSection = () => {
  return (
    <div className="flex flex-col bg-[#050505] relative w-full h-screen items-center justify-start overflow-hidden">
      <h1 className="text-3xl md:text-5xl font-bold my-4 md:my-11 text-text">
        About Me
      </h1>
      ̵
      <div className="w-72 h-72 absolute z-10 bg-primary rounded-full -bottom-10 -left-10 opacity-20 blur-3xl"></div>
      <div className="w-72 h-72 absolute z-10 bg-green-500 rounded-full -right-10 -top-10 opacity-20 blur-3xl"></div>
      <div className="flex flex-wrap items-center justify-center p-4 w-full h-[90%]  md:w-[70%] md:h-[70%] cursor-pointer relative">
        <div className="w-full h-full flex flex-row items-center justify-center">
          <div className="relative m-4 w-full h-full group perspective-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-violet-200/20 rounded-xl backdrop-blur-lg shadow-xl transform transition-all duration-300 hover:scale-105">
              <div className="absolute inset-[2px] bg-white/10 rounded-xl border border-white/20 z-10"></div>
              <div className="relative flex  flex-col  items-center justify-center w-full h-full p-2 md:p-4 z-20">
                <div className="w-full md:w-[50%] h-full  flex-col items-center justify-center hidden md:flex">
                  <Image
                    src={suryaImage}
                    width={350}
                    height={350}
                    className="rounded-s-lg"
                    alt="hero-image"
                  ></Image>
                </div>

                <div className="w-full md:w-[50%] h-full flex flex-col items-center justify-center  md:hidden">
                  <Image
                    src={suryaImage}
                    width={250}
                    height={250}
                    className="rounded-s-lg"
                    alt="hero-image"
                  ></Image>
                </div>
                <div className="w-full  px-2 md:px-16 h-full  flex flex-col text-text items-start justify-center">
                  <h1 className="w-full text-l md:text-xl text-white font-medium text-center">
                    I have experience building scalable web and mobile
                    applications , with a strong focus on writing clean code and
                    ensuring seamless integration. I am dedicated to delivering
                    high-quality results while continuously improving my skills.
                    Passionate about problem-solving, I thrive in collaborative
                    environments and adapt quickly to new challenges. My
                    commitment to continuous learning and my ability to work
                    effectively within teams enable me to contribute positively
                    to any project and consistently meet goals and expectations.{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCardSection;
