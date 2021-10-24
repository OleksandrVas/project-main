import React from "react";
import Logo from "../../container/Header/img/stylist-logo.png"

const HeaderLogo = () => {
  return (
    <>
      <div className="col-xs-4">
        <div className="header-logo">
          <a href="">
            <img src={Logo} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};
export default HeaderLogo;
