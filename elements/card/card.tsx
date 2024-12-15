import Image from "next/image";
import React from "react";

interface CardProps {
  image: any;
  number: string;
  company: string;
  description: string;
  id: number;
  icons: Array<any>;
}

export const Card: React.FC<CardProps> = ({
  image,
  number,
  company,
  description,
  id,
  icons
}) => {

  return (
    <div
      className={`w-full h-[600px] md:h-[350px] flex flex-col md:flex-row items-center md:items-start justify-center gap-8 max-w-[1200px]   ${
        id % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
      key={id}
    >
      <div
        className={`w-full md:w-[50%] flex flex-col items-center ${
          id % 2 === 0 ? "md:items-end" : "md:items-start"
        }  justify-center relative`}
      >
        <div className="relative m-4  h-28 w-28 md:w-52 md:h-52 group perspective-500" key={id}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-violet-200/20 rounded-xl backdrop-blur-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:rotate-2">
            <div className="absolute inset-[2px] bg-white/10 rounded-xl border border-white/20 z-10"></div>
            <div className="rounded-full relative flex items-center justify-center w-full h-full p-4 z-20">
              <Image
                src={image}
                width={150}
                height={150}
                alt="hero-image"
                className=""
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[50%] flex flex-col items-center md:items-start justify-center gap-4">
        <h1 className="text-white text-5xl text-center md:text-left font-bold">{number}</h1>
        <h1 className="text-white text-3xl text-center md:text-left">{company}</h1>
        <h4 className="text-[#71717A] text-xl text-center md:text-left p-2">{description}</h4>
        <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
        {icons.map((each,index)=>{
          return(
            <div key={index} className="w-10 h-10 bg-white/10 rounded-full flex flex-wrap items-center justify-center  hover:animate-spin cursor-pointer">
              <Image
                src={each}
                width={30}
                height={30}
                alt="hero-image"
                className=""
              ></Image>
            </div>
          )
        })}
      </div>
      </div>
  
    </div>
  );
};
