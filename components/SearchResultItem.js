import React from "react";

const SearchResultItem = ({ snippet, link, formattedUrl, title }) => {
  return (
    <div className={"max-w-xl mb-8"}>
      <div className={"group"}>
        <a href={link} className={"text-sm"}>
          {formattedUrl}
        </a>
        <a href={link}>
          <h2
            className={
              "truncate text-xl text-blue-900 font-medium group-hover:underline"
            }
          >
            {title}
          </h2>
        </a>
      </div>
      <p className={"line-clamp-2"}>{snippet}</p>
    </div>
  );
};

export default SearchResultItem;
