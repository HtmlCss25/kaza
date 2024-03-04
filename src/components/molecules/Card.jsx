import React from 'react';
import CardTitle from '../atoms/CardTitle'
import Image from '../atoms/Image';

const Card = ({id,cover,title})=>{

    return(

        <a href={`/lodging/${id}`} className='card-link'>
            <article className='card'>
                <Image source={cover} alt = "Aperçu du logement"/>
                <CardTitle title = {title}/>
            </article>
        </a>

    )

}

export default Card;