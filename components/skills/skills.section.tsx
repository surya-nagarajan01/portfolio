"use client";

import skills_constant from "@/constant/skills";
import Image from "next/image";

const SkillSection = () => {


  return (
    <div className="flex flex-col bg-[#050505] relative w-full h-screen items-center justify-start overflow-hidden">
        <h1 className="text-3xl md:text-5xl font-bold my-4 md:my-11 text-text">
        Technical Proficiencies
      </h1>
      <div className="w-72 h-72 absolute z-10 bg-primary rounded-full -bottom-10 -left-10 opacity-20 blur-3xl"></div>
      <div className="w-72 h-72 absolute z-10 bg-green-500 rounded-full -right-10 -top-10 opacity-20 blur-3xl"></div>

      <div
        className="flex flex-wrap items-center justify-center p-4 h-screen max-w-[1200px] cursor-pointer relative"
      >
        {skills_constant.map((item, index) => {
          return (
            <div
              className="relative m-4 w-20 h-20 md:w-28 md:h-28 group perspective-500 cursor-pointer"
              key={index}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-violet-200/20 rounded-xl backdrop-blur-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:rotate-2">
                <div className="absolute inset-[2px] bg-white/10 rounded-xl border border-white/20 z-10"></div>
                <div className="relative flex items-center justify-center w-full h-full p-4 z-20">
                  <Image
                    src={item?.icon}
                    alt={item?.name}
                    width={100}
                    height={100}
                    className="object-contain z-30 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* <div
          className="pointer-events-none fixed z-10 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: "120px",
            height: "120px",
            backgroundColor: "#9648ff",
            transform: "translate(-50%, -50%)",
          }}
        /> */}
      </div>
    </div>
  );
};

export default SkillSection;
