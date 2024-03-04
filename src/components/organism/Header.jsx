import React from 'react';
import NavBar from '../molecules/NavBar';
import logo from '../../images/logo-kasa.png';
import Image from '../atoms/Image';

const Header = ()=>{

    return(

        <header className='top-header'>
            
            <h1 className='hidden'>Kasa</h1>
            <Image source={logo} alt = "Logo de l'entreprise Kasa, le premier A est une maison"/>
            <NavBar/>

        </header>

    )

}

export default Header;