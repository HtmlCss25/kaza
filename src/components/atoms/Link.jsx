import React from 'react';
import { NavLink } from 'react-router-dom';


const Link = (props)=>{

    return (

        <NavLink to={props.url} className="link">{props.text}</NavLink>
        // {/* <a href={props.url} className={`link ${isActive(props.url)}`}>{props.text}</a> */}

    )

}

export default Link;