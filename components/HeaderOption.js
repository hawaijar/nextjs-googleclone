import React from "react";

const HeaderOption = ({ Icon, selected, title }) => {
  return (
    <div
      className={`flex justify-center
				items-center border-b-4
				border-transparent
				hover:border-blue-500
				hover:text-blue-500 cursor-pointer
				pb-3
				${selected && "text-blue-500 border-blue-500"}

				`}
    >
      <Icon className={"h-4"} />
      <p className={"hidden sm:inline-flex pl-1"}>{title}</p>
    </div>
  );
};

export default HeaderOption;
