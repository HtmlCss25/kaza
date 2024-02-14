import React from 'react';
import Background from '../../images/background.png';

const Banner = ()=>{

    return(

        <figure className='banner'>

            <img src={Background} alt="Paysage avec falaise et étendue d'eau"/>
            <figcaption>Chez vous, partout et ailleurs</figcaption>

        </figure>


    )

}

export default Banner;