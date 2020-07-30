import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './ButtonLink';

function Menu(){
    return(
        <nav className= "Menu">
            <a href= "/">
                <img class="Logo" src={Logo} alt="jadsflix logo"/>
            </a>

           <Button className="ButtonLink"href="/">
            Novo Vídeo
           </Button>
        </nav>
    );
}

export default Menu;