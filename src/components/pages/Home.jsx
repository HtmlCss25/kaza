import React from 'react'
import Banner from '../organism/Banner'
import CardContainer from '../organism/CardContainer';

const Home = ()=>{

    return(

        <main className='home'>
            <Banner/>
            <h1 className='hidden'>Kasa</h1>
            <CardContainer/>
        </main>

    )

}

export default Home;