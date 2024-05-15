import React from 'react';
import Banner from '../organism/Banner';

import Background from '../../images/background2.png';
import Collapse from '../molecules/Collapse';

import aboutData from '../../bdd/about.json'

const datas = aboutData;

const About = ()=>{

    return(

        <main className='home'>
            
            <Banner background={Background}/>

            <section className='collapse-section'>
                {datas.map(data=>(
                    <Collapse title ={data.title} content={data.content} key={data.content+"-"+data.title}/>
                ))}
            </section>

        </main>

    )

}

export default About;