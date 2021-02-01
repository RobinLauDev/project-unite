import React, { useState, useEffect, useRef } from 'react';

export const SearchInput = ({searchbarValue, setsearchbarValue, setautoCompleteIsMounted}) => {

  const changeVal = (e) => { setsearchbarValue(e.target.value); };
  const [isClicked, updateisClicked] = useState(0);
  const isMounted = useRef(false);
  const inputFocus = useRef(null);

  //??
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      inputFocus.current === document.activeElement &&
        setautoCompleteIsMounted(true);
    }
  }, [isClicked]);

  const clicked = () => updateisClicked(isClicked + 1);

  return (
    <div className="input">
      <input type="text" ref={inputFocus} placeholder="Search projects by skills or name" onClick={clicked} value={searchbarValue} onChange={changeVal} />
    </div>
  );
};
