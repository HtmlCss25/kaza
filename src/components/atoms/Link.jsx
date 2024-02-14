import React from 'react';
import {useNavigate} from "react-router-dom";

const Link = (props)=>{

    const handleClick = e=>{
        e.preventDefault();
        useNavigate(props.url);
    }

    return (

        <a href={props.url} onClick={handleClick} className={`link ${props.modificator ? `link--${props.modificator}` : ''}`}>{props.text}</a>

    )

}
