import React from "react";

/**
 * Un composant de bouton simple.
 * @param {string} props.className - (la classe font awesome de l'icone).
 * @param {string} props.direction - (up/down/left/right).
 */

const Arrow = (props)=>{

    return(

        <svg className={props.className+ " " + props.direction} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClick && props.onClick}>
            <path d="M47.04 7.78319L39.92 0.703186L0.359985 40.3032L39.96 79.9032L47.04 72.8232L14.52 40.3032L47.04 7.78319Z" fill="white"/>
        </svg>

    )

}

export default Arrow;