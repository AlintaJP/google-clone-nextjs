import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import googleLogo from "../../assets/Google_2015_logo.svg.webp";
import profilePic from "../../assets/Me_2.jpg";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "../home/Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchTermRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchTermRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          className="cursor-pointer"
          src={googleLogo}
          height={40}
          width={120}
          placeholder="blur"
          alt="google logo"
        />

        <form
          className="flex border border-gray-200 rounded-full 
          flex-grow shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5"
        >
          <input
            ref={searchTermRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition 
          duration-100 transform hover:scale-125"
            onClick={() => setSearchTerm("")}
          />
          <MicrophoneIcon
            className="h-6 mr-3 hidden sm:inline-flex 
          text-blue-500 border-l-2 pl-4 border-gray-300"
          />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="ml-auto" src={profilePic} />
      </div>

      <HeaderOptions />
    </header>
  );
};

export default Header;
