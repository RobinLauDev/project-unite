import React, { useState } from "react";
import { SearchInput } from "../atoms/SearchInput";
import { Autocomplete } from "../molecules/SearchAutocomplete";
import { useClickOutside } from "../../hooks/useClickOutside";

export const SearchFilter = ({
  allSuggestedItems,
  selectedTags,
  autoCompleteClickHandler,
  children,
}) => {
  const [searchbarValue, setsearchbarValue] = useState("");

  const [autoCompleteIsMounted, setautoCompleteIsMounted] = useState(false);

  //Hook with callback on click outside Ref element
  const ref = useClickOutside(() => closeMenu());

  //Resets searchbar value and unmounts autocomplete
  const closeMenu = () => {
    setsearchbarValue("");
    setautoCompleteIsMounted(!autoCompleteIsMounted);
  };

  //Remove currently selected items from the suggestions
  const filterallSuggestedItems = (allSuggestedItems, selectedTags) => {
    const filteredSuggestedItems = allSuggestedItems.filter((item) => {
      return selectedTags.includes(item) ? false : true;
    });

    return filteredSuggestedItems;
  };

  return (
    <div className="d-flex justify-content-center inputCont" ref={ref}>
      <div className="inputAndUl">
        <SearchInput
          setsearchbarValue={setsearchbarValue}
          setautoCompleteIsMounted={setautoCompleteIsMounted}
          searchbarValue={searchbarValue}
        />

        {searchbarValue !== "" && autoCompleteIsMounted && (
          <>
            {/* AUTOMCPLETE NEEMT LIJST VAN ALREADY FILTERED BY SELECTION ITEMS */}
            <Autocomplete
              filteredSuggestedItems={filterallSuggestedItems(
                allSuggestedItems,
                selectedTags
              )}
              autoCompleteClickHandler={autoCompleteClickHandler}
              searchbarValue={searchbarValue}
              setsearchbarValue={setsearchbarValue}
            />
          </>
        )}
      </div>
      {/* HIER KOMT CHILDREN DIE GEBRUIKT KAN WORDEN VOOR TAGS */}
      {children}
    </div>
  );
};
