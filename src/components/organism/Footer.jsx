import React from 'react';
import logoFooter from '../../images/logo-kasa-footer.png';
import Image from '../atoms/Image';

const Footer = ()=>{

    return(

        <footer>
            <Image source={logoFooter} alt = "Logo de kasa"/>
            <p><i className="fa-regular fa-copyright"></i> 2020 Kasa. All rights reserved</p>
        </footer>

    )

}

export default Footer;