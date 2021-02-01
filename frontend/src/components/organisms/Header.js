import { logDOM } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import { MenuPopout } from "../molecules/MenuPopout";
import {ReactComponent as Logo} from "../../images/logo.svg";

export const Header = () => {
  return (
    <div className="navigationHeader container">
      <div className="logoCont">
        <Link to="/">
          LOGO{/* <Logo className="logo"/> */}
          {/* <img src={logo} className="logo"/> */}
        </Link>
      </div>
      <MenuPopout/>
    </div>
  );
};
