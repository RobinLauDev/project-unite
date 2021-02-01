import React from "react";

export function Pagination({ pagesAmount, setselectedStep, selectedStep }) {
  let LiArray = [];
  let LiArrayElements = [];

  //Convert amount of pagesAmount int to an array with clickable Li's
  for (let i = 1; i <= pagesAmount; i++) {
    LiArray.push(i);
  }

  const createPaginationElements = () => {    
    if (pagesAmount != 0) {
        if (pagesAmount < 7) {
            LiArrayElements = LiArray.map((item) => (
              <li
                key={item}
                onClick={() => setselectedStep(item)}
                className={`paginationLi ${item == selectedStep ? "activeLi" : ""}`}
              >
                {item}
              </li>
            ));
            return
          }

      if (selectedStep >= 5 && selectedStep <= pagesAmount - 3) {
        LiArrayElements = LiArray.filter(
          (item) =>
            item == selectedStep - 1 ||
            item == selectedStep ||
            item == selectedStep + 1
        ).map((item) => (
          <PaginationLi
            item={item}
            selectedStep={selectedStep}
            setselectedStep={setselectedStep}
          />
        ));

        LiArrayElements.splice(LiArrayElements.length, 0, [
          <PaginationDots />,
          <PaginationLi
            item={pagesAmount}
            selectedStep={selectedStep}
            setselectedStep={setselectedStep}
          />,
        ]);
        LiArrayElements.splice(0, 0, [
          <PaginationLi
            item="1"
            selectedStep={selectedStep}
            setselectedStep={setselectedStep}
          />,
          <PaginationDots />,
        ]);

        return
      }

      if (selectedStep < 5) {
        LiArrayElements = LiArray.filter((item) => item <= 5).map((item) => (
          <PaginationLi
            item={item}
            selectedStep={selectedStep}
            setselectedStep={setselectedStep}
          />
        ));

        LiArrayElements.splice(LiArrayElements.length, 0, [
          <PaginationDots />,
          <PaginationLi
            item={pagesAmount}
            selectedStep={selectedStep}
            setselectedStep={setselectedStep}
          />,
        ]);
        return
      }

      // console.log("page " , pagesAmount , "ding" , pagesAmount-4 )

      if (selectedStep > pagesAmount - 4) {    
        LiArrayElements = LiArray.filter(
          (item) => item >= pagesAmount - 4
        ).map((item) => (
          <PaginationLi
            item={item}
            selectedStep={selectedStep}
            setselectedStep={setselectedStep}
          />
        ));

        LiArrayElements.splice(0, 0, [
          <PaginationLi
            item="1"
            selectedStep={selectedStep}
            setselectedStep={setselectedStep}
          />,
          <PaginationDots />,
        ]);
        return
      }
    }
  };

  createPaginationElements();

  //

  return (
    <div className="paginationCont">
      <ul className="paginationUl">{LiArrayElements}</ul>
    </div>
  );
}

const PaginationLi = ({ item, selectedStep, setselectedStep }) => {
  return (
    <li
      key={item}
      onClick={() => setselectedStep(item)}
      className={`paginationLi ${item == selectedStep ? "activeLi" : ""}`}
    >
      {item}
    </li>
  );
};

const PaginationDots = () => {
  return <div className="pagination--item">...</div>;
};
