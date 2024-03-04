import React from "react";

const Image = (props)=>{

    return(

        <img src={props.source} alt={props.alt ? props.alt : "Description indisponible, veuillez nous excuser pour la gêne occasionnée"}></img>

    )

}

export default Image;