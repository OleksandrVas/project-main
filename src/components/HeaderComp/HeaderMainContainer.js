import React from "react";
import HeaderLogo from "./HeaderLogoComp";
import BurgerMenu from "./HeaderBurgerMenuComp";
import HeaderBottomImg from "./HeaderBottomImgComp";
const MainContainer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <HeaderLogo />
          <BurgerMenu />
          <HeaderBottomImg />
        </div>
      </div>
    </>
  );
};
export default MainContainer;
