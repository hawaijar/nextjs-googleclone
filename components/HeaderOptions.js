import React from "react";
import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";

const HeaderOptions = () => {
  return (
    <div
      className={`flex w-full text-gray-700
				justify-evenly text-sm
				lg:text-base
				lg:justify-start
				lg:space-x-32
				lg:pl-52
				border-b
				`}
    >
      <div className={"flex space-x-6"}>
        {/*left section*/}
        <HeaderOption Icon={SearchIcon} title={"All"} selected />
        <HeaderOption Icon={BookmarkIcon} title={"Books"} />
        <HeaderOption Icon={NewspaperIcon} title={"News"} />
        <HeaderOption Icon={MapIcon} title={"Images"} />
        <HeaderOption Icon={PlayIcon} title={"Videos"} />
        <HeaderOption Icon={DotsVerticalIcon} title={"More"} />
      </div>
      {/*right section*/}
      <div className={"flex space-x-4"}>
        <p className={"link"}>Settings</p>
        <p className={"link"}>Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
