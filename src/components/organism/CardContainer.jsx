import React from 'react';
import {useState, useEffect} from 'react'
import Card from '../molecules/Card';
import data from '../../bdd/lodging.json';

const CardContainer = ()=>{

    const [cards, setCards] = useState([]);

    useEffect(()=>{
        setCards(data);
    },[])

    return(

        <section className='card-section'>

            {
                cards.map(props=>(
                    <Card key={props.id} title={props.title} cover={props.cover} id={props.id} />
                ))
            }
            

        </section>

    )

}

export default CardContainer;