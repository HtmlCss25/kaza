import React from "react";
import { useState } from "react";
import Image from "../atoms/Image";
import Arrow from "../atoms/Arrow";

const Slider = ({pictures})=>{
    
    const [selected,setSelected] = useState(0);
    const [picture, setPicture] = useState(pictures[0])
    
    
    const handleClick = (number)=>{
        
        let nextImage = selected + number;
        
        if(nextImage>pictures.length-1){
            nextImage = 0;
        }
        else if(nextImage<0){
            nextImage = pictures.length-1;
        }
        setSelected(nextImage);
        setPicture(pictures[nextImage]);
    }

    return(

        <div className="slider" >

            <div className="controls" >
                <Arrow direction="left" onClick={()=>{handleClick(-1)}}/>
                <Arrow direction="right" onClick={()=>{handleClick(1)}}/>
            </div>
            <Image source={picture} alt = "Pièce du logement"/>

        </div>

    )

}

export default Slider;