import React from "react";

const CollapseContent = (props)=>{

    return(

        <div className='content'>
            {Array.isArray(props.content) ? 
                <ul>
                    {props.content.map((item,index)=><li key={index+"-"+item}>{item}</li>)}
                </ul> 
            : 
                <p>{props.content}</p>
            }
        </div>

    )

}

export default CollapseContent;