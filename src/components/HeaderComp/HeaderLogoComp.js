import React from "react";
import Logo from "../../container/Header/img/stylist-logo.png"
import {NavLink} from "react-router-dom";

const HeaderLogo = () => {
  return (
    <>
      <div className="col-xs-4">
        <div className="header-logo">
          <NavLink to="Home">
            <img src={Logo} alt="" />
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default HeaderLogo;
