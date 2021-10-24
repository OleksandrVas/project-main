import React from "react";
import "../Main/Main.css";
import MainComponents from "../../components/MainComp/MainComponents";
import MainComponentAbout from "../../components/MainComp/MainComponentAbout";
import {Route} from "react-router";
const Main = () => {
  return (
    <>
    <Route path="/Home" component={MainComponents} />
    <Route path="/About" component={MainComponentAbout} />
    </>
  );
};


export default Main;
