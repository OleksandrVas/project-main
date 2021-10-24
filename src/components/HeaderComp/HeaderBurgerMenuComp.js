import React from "react";
import {NavLink} from "react-router-dom";

const BurgerMenu = () => {
    return (
        <>
            <div className="col-xs-8 burger-menu">
                <div className="menu">
                    <ul>
                        <li>
                            <NavLink to="/Home" >Home</NavLink>
                        </li>
                        <li><NavLink to="/About">About</NavLink></li>
                        <li><NavLink to="/Services">Services</NavLink></li>
                        <li><NavLink to="/Gallery">Gallery</NavLink> </li>
                        <li><NavLink to="/Blog">Blog</NavLink> </li>
                        <li><NavLink to="Buy now">Buy now</NavLink> </li>
                    </ul>
                </div>
                {/*<div className="burger" >*/}
                {/*    <span></span>*/}
                {/*    <span></span>*/}
                {/*    <span></span>*/}
                {/*</div>*/}
            </div>
        </>
    );
};
export default BurgerMenu
