import React, { Component } from 'react';
import logo from './../images/logo@2x.png';


class Header extends Component {
    render() {
        return(
            <div className="App-header">
                <div className="header-content">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="hamburger">
                    <div className="bars top-bar"></div>
                    <div className="bars middle-bar"></div>
                    <div className="bars bottom-bar"></div>
                </div>
                <nav>
                    <ul className="main-nav">
                        <li>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                About
                            </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                Products
                            </a>                           
                        </li>
                        <li>
                            <a href="#">
                                Help  
                            </a>                               
                        </li>
                    </ul>
                </nav>
                <h1 className="title">This is a Headline</h1>
                </div>  
            </div>
        )
        
    }
}

export default Header;
