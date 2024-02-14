import React from 'react';
import NavBar from '../molecules/NavBar';
import logo from '../../images/logo-kasa.png';

const Header = ()=>{

    return(

        <header className='top-header'>

            <img src={logo} alt="Logo de l'entreprise Kasa, le premier A est une maison"/>
            <NavBar/>

        </header>

    )

}

export default Header;