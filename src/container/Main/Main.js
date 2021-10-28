import React from "react";
import "../Main/Main.css";
import MainComponents from "../../components/MainComp/MainComponents";
import MainComponentAbout from "../../components/MainComp/MainComponentAbout";
import {Route} from "react-router" ;
import MainComponentsServices from "../../components/MainComp/MainComponentsServices";
import MainComponentsGallery from "../../components/MainComp/MainComponentsGallery";
import MainComponentsBlog from "../../components/MainComp/MainComponentsBlog";

const Main = () => {
  return (
    <>
    <Route path="/Home" component={MainComponents} />
    <Route path="/About" component={MainComponentAbout} />
    <Route path="/Services" component={MainComponentsServices} />
    <Route path="/Gallery" component={MainComponentsGallery} />
    <Route path="/Blog" component={MainComponentsBlog} />
    </>
  );
};


export default Main;
