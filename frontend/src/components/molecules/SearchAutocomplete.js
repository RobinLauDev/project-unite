import React from "react";

//Dit component neemt searchbarValue en lijst van items en output een filterd lijst waarbij de inputvalue letters overeenkomen met items
export const Autocomplete = ({
  filteredSuggestedItems,
  autoCompleteClickHandler,
  searchbarValue,
  setsearchbarValue
}) => {
  //Filter filteredSuggestedItems adhv input en push in Li Array
  const itemsContainingSearchbarValue = filteredSuggestedItems.filter((item) =>
    item.toLowerCase().includes(searchbarValue.toLowerCase())
  );

  const liList = itemsContainingSearchbarValue.map((item) => (
    <li value={item} onClick={(e) => { autoCompleteClickHandler(e); setsearchbarValue("")}}>
      {item}
    </li>
  ));

  return (
    <ul>
      {/* Next Line can be used with with different filter categories like project names */}
      {liList.length > 0 && <li className="searchCategory">Skills</li>}
      {liList}
    </ul>
  );
};
