import React from "react"
import "../Footer/footer.scss"
import logo from '../Header/YourHealth.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <div className="footer__img">
                    <img src={logo}></img>
                </div>
                <div className="footer__brand">
                    Your<br/>
                    <span>Health</span>
                </div>
            </div>
            <div className="footer__links">
                <div className="footer__instagram"></div>
                <div className="footer__facebook"></div>
                <div className="footer__Email"></div>
            </div>
            <div className="footer__contact">
                <div className="footer__phone"></div>
                <div className="footer__adress"></div>
            </div>
        </footer>
    )
}

export default Footer