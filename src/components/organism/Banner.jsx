import React from 'react';
import Image from '../atoms/Image';

const Banner = (props)=>{

    return(

        <figure className='banner'>
            <Image source={props.background} alt = "Paysage avec falaise et étendue d'eau"/>
            <figcaption>{props.text}</figcaption>
        </figure>


    )

}

export default Banner;