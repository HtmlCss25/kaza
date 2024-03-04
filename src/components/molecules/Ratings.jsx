import React from "react";

const Ratings = (props)=>{
    const rating = parseInt(props.rating);
    const stars = [];

    for(let i=0 ; i < 5 ; i++ ){

        if(i < rating){
            stars.push(<i className="fa-solid fa-star full" key={i}></i>)
        }
        else{
            stars.push(<i className="fa-solid fa-star" key={i}></i>)
        }

    }


    return(

        <div className="ratings">
            {stars}
        </div>

    )

}

export default Ratings;