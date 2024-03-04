import React from 'react';
import { useLocation } from 'react-router-dom';


const Link = (props)=>{

    const location = useLocation()

    const isActive = (path)=>{
        
        return location.pathname === path ? 'active' : '';

    }

    return (

        <a href={props.url} className={`link ${isActive(props.url)}`}>{props.text}</a>

    )

}

export default Link;