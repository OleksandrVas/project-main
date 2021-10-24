import React from "react";
import ReactDOM from "react-dom";
import Header from "./container/Header/Header";
import Main from "./container/Main/Main";
import Footer from "./container/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
        </BrowserRouter>

    );
};
ReactDOM.render(<App/>, document.getElementById("root"));
