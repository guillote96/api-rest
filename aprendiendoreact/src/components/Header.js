import React,{ Component } from 'react';
import logo from '../assets/images/logo.svg';
class Header extends Component{
    render(){
        return(
            <header id="header"> 
                <div className="center">
                    {/*logo*/}
                <div id="logo">
                    <img src={logo} className="app-logo" alt="logotipo"/>
                    <span id="brand">
                        <strong>Master</strong>JS
                    </span>
                </div>

                    <nav id="menu">
                        <ul>
                            <li> <a href="index.html">Inicio</a></li>
                            <li> <a href="blog.html">Blog</a></li>
                            <li> <a href="formulario.html">Formulario</a></li>
                        </ul>
                    </nav>
                    <div className="clearfix"></div>
                </div>
        </header> 
       );
    }
}

export default Header;