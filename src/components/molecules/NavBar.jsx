import React from 'react';
import Link from '../atoms/Link'

const NavBar = ()=>{

    return(

        <nav>
            <Link url="/" text="Accueil" modificator="primary" />
            <Link url="/about" text="A Propos" modificator="primary" />
        </nav>

    )

}

export default NavBar;