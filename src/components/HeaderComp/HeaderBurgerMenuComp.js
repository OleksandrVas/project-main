import React from "react";
import {NavLink} from "react-router-dom";

const BurgerMenu = () => {
    return (
        <>
            <div className="col-xs-8 burger-menu">
                <div className="menu">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li><NavLink to="/About">About</NavLink></li>
                        <li><NavLink to="/Services">Services</NavLink></li>
                        <li><NavLink to="/Gallery">Gallery</NavLink></li>
                        <li><NavLink to="/Blog">Blog</NavLink></li>
                        <li><a
                            href="https://themeforest.net/item/betheme-responsive-multipurpose-wordpress-theme/7758048?clickid=x8gzE0zr0xyIUgg3y0R%3AYzP4UkG0UWTtCWh0xQ0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1289117&mp_value1=&utm_campaign=af_impact_radius_1289117&utm_medium=affiliate&utm_source=impact_radius&irgwc=1&clickid=x8gzE0zr0xyIUgg3y0R%3AYzP4UkG0UWTtCWh0xQ0&iradid=275988&irpid=1289117&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1289117&utm_medium=affiliate&utm_source=impact_radius">Buy
                            now</a></li>
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
