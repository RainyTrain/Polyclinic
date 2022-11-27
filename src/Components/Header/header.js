import React from "react"
import  "../Header/header.scss"
import logo from '../Header/YourHealth.png'

function Header(){
    return(
        <header className="header">
            <div className="header__logo">
                <div className="header__img">
                    <img src={logo}></img>
                </div>
                <div className="header__brand">
                    Your<br/>
                    <span>Health</span>
                </div>
            </div>
            <div className="header__links">
                <ul className="header__list">
                    <li className="header__item"><a href="/">Home</a></li>
                    <li className="header__item"><a href="/services">Services</a>
                        <div className="item__dropdown">
                            <a>One</a><br/>
                            <a>One</a><br/>
                            <a>One</a><br/>
                            <button>click me</button>
                        </div>
                    </li>
                    <li className="header__item"><a href="/specialists">Our specialists</a></li>
                    <li className="header__item"><a href="/contact">Contact</a></li>
                    <li className="header__item"><a href="/about">About us</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header