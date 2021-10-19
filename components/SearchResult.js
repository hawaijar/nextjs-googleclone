import React from "react";
import SearchResultItem from "./SearchResultItem";
import PaginationButtons from "./PaginationButtons";

const SearchResult = ({ results }) => {
  const { searchInformation } = results;
  const { formattedSearchTime, totalResults } = searchInformation;
  return (
    <div className={"mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-[52]"}>
      <p className={`text-gray-600 text-sm mt-3 mb-5`}>
        {`About ${totalResults} results (${formattedSearchTime} seconds)`}
      </p>
      {results.items.map((item) => (
        <SearchResultItem key={item.link} {...item} />
      ))}
      {/*Pagination buttons*/}
      <PaginationButtons />
    </div>
  );
};

export default SearchResult;
