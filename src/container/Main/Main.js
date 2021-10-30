import React from "react";
import "../Main/Main.css";
import MainComponents from "../../components/MainComp/MainComponents";
import MainComponentAbout from "../../components/MainComp/MainComponentAbout";
import {Route} from "react-router" ;
import MainComponentsServices from "../../components/MainComp/MainComponentsServices";
import MainComponentsGallery from "../../components/MainComp/MainComponentsGallery";
import MainComponentsBlog from "../../components/MainComp/MainComponentsBlog";
import MainComponentsPost from "../../components/MainComp/MainComponentsPost";

const Main = () => {
    return (
        <>
            <Route path="/" exact component={MainComponents}/>
            <Route path="/About" exact component={MainComponentAbout}/>
            <Route path="/Services" exact component={MainComponentsServices}/>
            <Route path="/Gallery" exact component={MainComponentsGallery}/>
            <Route path="/Blog" exact component={MainComponentsBlog}/>
            <Route path="/Post" exact component={MainComponentsPost}/>
        </>
    );
};


export default Main;
