import React from 'react';
import Link from '../atoms/Link'

const NavBar = ()=>{

    return(

        <nav className='navbar'>
            <Link url="/" text="Accueil" modificator="primary" />
            <Link url="/about" text="A Propos" modificator="primary" />
        </nav>

    )

}

export default NavBar;