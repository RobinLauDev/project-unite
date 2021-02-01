import React from 'react';

export const FilterTags = ({selectedTags, setselectedTags, tagClickHandler, children}) => {

  const tagElementsArray = selectedTags.map(item => {
    return <span key={item} value={item} onClick={(e)=>tagClickHandler(e)}>{item} x</span>;
  });

  return (
    <>  
        <div className="filterTagsCont">
           <div className="filterTags">
             {tagElementsArray}
             {children}
           </div>

       
                 </div>
    </>
  );
};                     
