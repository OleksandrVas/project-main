import React from "react";
import "../Main/Main.css";
import MainComponents from "../../components/MainComp/MainComponents";
import MainComponentAbout from "../../components/MainComp/MainComponentAbout";
import {Route} from "react-router" ;
import MainComponentsServices from "../../components/MainComp/MainComponentsServices";
const Main = () => {
  return (
    <>
    <Route path="/Home" component={MainComponents} />
    <Route path="/About" component={MainComponentAbout} />
    <Route path="/Services" component={MainComponentsServices} />
    </>
  );
};


export default Main;
