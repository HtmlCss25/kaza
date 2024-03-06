import React from "react";
import { useState } from "react";
import Arrow from "../atoms/Arrow";
import CollapseContent from "../atoms/CollapseContent";

/**
 * 
 * @param {string} props.title - Titre affiché dans le head
 * @param {string | array} props.content - contenu : p si type string / ul li si array
 */

const Collapse = (props)=>{

    const [isClosed,setIsClosed] = useState(true)

    const handleCollapseClick = ()=>{
        setIsClosed(!isClosed)
    }

    return(



        <div className={`collapse ${isClosed && 'collapsed'}`}>
                <span className='head' onClick={handleCollapseClick}>
                    <p>{props.title}</p>
                    {isClosed ? <Arrow direction="up"/> : <Arrow direction="down"/> }
                </span>
                <CollapseContent content={props.content}/>
                    
        </div>

    )

}

export default Collapse;