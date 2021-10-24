import React from "react";

const BoxTextView = (props) => {
    return (
        <>
            <img
                src={props.src}/>
            <h2>{props.heading}</h2>
            <p>{props.textingOne}</p>
            <p>{props.textingTwo}</p>
        </>
    )
}

export default BoxTextView