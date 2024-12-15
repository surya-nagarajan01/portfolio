"use client";

import card_constant from "@/constant/card";
import Image from "next/image";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col bg-[#050505] relative w-full h-screen items-center justify-start overflow-hidden">
              <h1 className="text-3xl md:text-5xl font-bold my-4 md:my-11 text-text">
        Experience
      </h1>
      <div className="w-72 h-72 absolute z-10 bg-primary rounded-full -bottom-10 -left-10 opacity-20 blur-3xl"></div>
      <div className="w-72 h-72 absolute z-10 bg-green-500 rounded-full -right-10 -top-10 opacity-20 blur-3xl"></div>
      <div className="flex flex-wrap items-center w-full justify-center p-4  md:w-[70%] md:h-[50%] cursor-pointer relative">
        {card_constant.map((item, index) => {
          return (
            <div
              className="relative m-4 w-full h-[200px] md:h-[130px] group perspective-500"
              key={index}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-violet-200/20 rounded-xl backdrop-blur-lg shadow-2xl transform transition-all duration-300 hover:scale-105 ">
                <div className="absolute inset-[2px] bg-white/10 rounded-xl border border-white/20 z-10"></div>

                <div className="relative flex flex-col items-start justify-between w-full h-full p-2 md:p-4 z-20">
                  <div className="flex flex-col md:flex-row w-full justify-start items-center mb-4  p-2 md:p-4">
                    <Image
                      src={item.icon}
                      alt="Icon"
                      className="w-14 h-14 mr-4 rounded-full"
                      width={8}
                      height={8}
                    ></Image>
                    <div className="flex flex-col">
                      <div className="flex flex-col md:flex-row items-center justify-between">
                        <h3 className="text-2xl font-bold text-white text-center ">
                          {item.heading}
                        </h3>
                        <h6 className="text-lg font-semibold text-white italic">
                          {item.startDate} - {item.endDate}
                        </h6>
                      </div>

                      <p className="font text-md font-medium text-text my-1 hidden md:block">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;
