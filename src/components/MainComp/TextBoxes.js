import React from "react";
import classes from "./MainComponentAbout.module.css";

const TextBoxes = (props) => {
    return (
        <>
            <div className={classes.textBoxes}>
                <div className={classes.textBox}>
                    <h4>{props.number}</h4>
                    <span>{props.text} </span>

                </div>
            </div>

        </>
    )
}
export default TextBoxes
