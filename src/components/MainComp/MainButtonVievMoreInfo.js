import React from "react";
import {NavLink} from "react-router-dom";

const ButtonVievMoreInfo = ({link}) => {
    return (
        <>
            <NavLink to={link}>view more info</NavLink>
        </>
    );
};
export default ButtonVievMoreInfo
