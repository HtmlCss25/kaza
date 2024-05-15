import React from 'react';
import CardTitle from '../atoms/CardTitle'
import Image from '../atoms/Image';
import { Link } from 'react-router-dom';

const Card = ({id,cover,title})=>{

    return(

        <Link to={`/lodging/${id}`} className='card-link'>
            <article className='card'>
                <Image source={cover} alt = "Aperçu du logement"/>
                <CardTitle title = {title}/>
            </article>
        </Link>

    )

}

export default Card;