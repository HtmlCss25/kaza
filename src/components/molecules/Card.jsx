import React from 'react';
import CardTitle from '../atoms/CardTitle'

const Card = (props)=>{

    return(

        <a href="/lodging" className='card-link'>
            <article className='card'>
                <img src={props.cover} alt="Aperçu du logement" />
                <CardTitle title = {props.title}/>
            </article>
        </a>

    )

}

export default Card;