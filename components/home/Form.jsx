import Image from "next/image";
import React, { useRef } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid";
import googleLogo from "../../assets/Google_2015_logo.svg.webp";
import { useRouter } from "next/router";

const Form = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
      <Image
        src={googleLogo}
        width={300}
        height={100}
        placeholder="blur"
        alt="google logo"
      />

      <div
        className="flex w-full mt-5 hover:shadow-lg 
          focus-within:shadow-lg max-w-md rounded-full
          border border-gray-200 px-5 py-3 items-center
          sm:max-w-xl lg:max-w-2xl"
      >
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <MicrophoneIcon className="h-5" />
      </div>

      <div
        className="flex flex-col w-1/2 space-y-2 justify-center 
          mt-8 sm:space-y-0 sm:flex-row sm:space-x-4"
      >
        <button onClick={search} className="btn">
          Google Search
        </button>
        <button onClick={search} className="btn">
          I&apos;m Feeling lucky
        </button>
      </div>
    </form>
  );
};

export default Form;
