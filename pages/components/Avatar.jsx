import Image from "next/image";
import React from "react";

const Avatar = ({ src, className }) => {
  return (
    <div
      className={`relative h-10 w-10 cursor-pointer 
      transition duration-150 transform hover:scale-110 ${className}`}
    >
      <Image
        className="rounded-full"
        src={src}
        alt="profile picture"
        layout="fill"
        placeholder="blur"
        objectFit="contain"
      />
    </div>
  );
};

export default Avatar;
