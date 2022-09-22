import React from "react";
import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const headerOptions = [
  {
    Icon: SearchIcon,
    title: "All",
  },
  {
    Icon: PhotographIcon,
    title: "Images",
  },
  {
    Icon: PlayIcon,
    title: "Videos",
  },
  {
    Icon: NewspaperIcon,
    title: "News",
  },
  {
    Icon: MapIcon,
    title: "Maps",
  },
  {
    Icon: DotsVerticalIcon,
    title: "More",
  },
];

const HeaderOptions = () => {
  return (
    <div
      className="flex w-full text-gray-700 justify-evenly 
      text-sm lg:text-base lg:justify-start lg:space-x-36 
      lg:pl-52 border-b-[1px]"
    >
      <ul className="flex space-x-6">
        {headerOptions.map((option, i) => (
          <HeaderOption
            selected={i === 0}
            key={option.title}
            Icon={option.Icon}
            title={option.title}
          />
        ))}
      </ul>

      <ul className="flex gap-4">
        <li className="link">
          <a>Settings</a>
        </li>
        <li className="link">
          <a>Tools</a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderOptions;
