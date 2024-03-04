import React from 'react'
import Banner from '../organism/Banner'
import CardContainer from '../organism/CardContainer';

import Background from '../../images/background.png';

const Home = ()=>{

    return(

        <main className='home'>
            <Banner background={Background} text="Chez vous, partout et ailleurs"/>
            <CardContainer/>
        </main>

    )

}

export default Home;