import React, { useReducer } from "react";
import { Menu } from "./Menu";
import { routeMap } from "../../routeMap";
import { menuReducer, menuState } from "../../contextReducers/menuReducer";

export const MenuPopout = () => {
    const [eersteState, dispatch] = useReducer(menuReducer, menuState)
    
  return (
    <>
        <div className="menuContWrapper">
            <div className="menuCont" onClick={() => dispatch("OPEN MENU")}>
            {!eersteState.showMenu && (
                <>
                <div className="menuLine"></div>
                <div className="menuLine"></div>
                <div className="menuLine"></div>
                </>
            )}
            </div>
            {eersteState.showMenu && (
            <div className="menuCrossWrapper">
                <div className="menuCross">⨉</div>
            </div>
            )}
        </div>

      {eersteState.showMenu && (
        <Menu routeMap={routeMap} dispatch={() => dispatch("CLOSE MENU")} />
      )}
    </>
  );
};
