import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import data from '../../bdd/lodging.json';
import Slider from '../organism/Slider';
import Ratings from '../molecules/Ratings';
import Collapse from '../molecules/Collapse';
import Image from '../atoms/Image';

const Lodging = ()=>{

    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // const id = searchParams.get('id');
    const navigate = useNavigate();
    const {id} = useParams();
    const lodgingData = data.find(item=>item.id===id);
    
    useEffect(()=>{
        if(!lodgingData){
            navigate('/notFound')
        }
    })
    
    if(lodgingData){
        return(

            <main className='lodging'>
    
            <Slider pictures = {lodgingData.pictures}/>
            <div className='row space-between lodging-container'>
                <div className='lodging-infos'>
                    <h2>{lodgingData.title}</h2>
                    <p className='subtitle' >{lodgingData.location}</p>
                    <div className='tags' >
                        {lodgingData.tags.map((item,i)=>(
                            <p className='tag' key={i} >{item}</p>
                        ))}
                    </div>
                </div>
                <div className='host-rate-container'>
                    <div className='host-infos row'>
                        <p className='host-name'>{lodgingData.host.name}</p>
                        <Image source={lodgingData.host.picture} alt = "Propriétaire du logement"/>
                    </div>
                    <Ratings rating={lodgingData.rating} />
                </div>
            </div>
            <div className='row space-between collapse-container'>
    
                <Collapse title="Description" content={lodgingData.description}/>
                <Collapse title="Équipements" content={lodgingData.equipments}/>
    
            </div>
    
    
            </main>
    
        )
    }


}

export default Lodging;