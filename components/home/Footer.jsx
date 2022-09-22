import React from "react";
import { GlobeIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <footer
      className="grid w-full divide-y-[1px] divide-gray-300 
    bg-gray-100 text-sm text-gray-500"
    >
      <div className="px-8 py-3">
        <p>United States</p>
      </div>

      <div
        className="grid grid-cols-1 md:gri-cols-2 lg:grid-cols-3 
      gap-y-4 grid-flow-row-dense px-8 py-3"
      >
        <div
          className="flex justify-center items-center md:col-span-2 
          lg:col-span-1 lg:col-start-2"
        >
          <GlobeIcon className="h-5 mr-1 text-green-700" /> Carbon neutral since
          2007
        </div>
        <ul
          className="flex justify-center gap-3 whitespace-nowrap 
          md:justify-self-start"
        >
          <li>
            <a>Advertising</a>
          </li>
          <li>
            <a>Business</a>
          </li>
          <li>
            <a>How Search works</a>
          </li>
        </ul>
        <ul className="flex justify-center gap-3 md:ml-auto">
          <li>
            <a>Privacy</a>
          </li>
          <li>
            <a>Terms</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
