import Image from "next/image";
import React from "react";

interface BoxProps {
  image: string;
  name: string;
}
const Box: React.FC<BoxProps> = ({ image, name }) => {
  return (
    <div className="px-8 py-4 rounded-md border-black border-2 border-solid cursor-pointer">
      <Image width={80} height={80} src={image} alt={name} />
      <p className="text-center mt-2 font-bold text-xl">{name}</p>
    </div>
  );
};

export default Box;
