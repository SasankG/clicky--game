import React from "react";

const Images = (props) => (
    <img src = {props.src} alt = {props.name} className = "img-thumbnail myImg" onClick={() => props.picking(props.name)}/>

)

export default Images;