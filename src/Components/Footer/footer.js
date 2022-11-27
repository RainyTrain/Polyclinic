import React from "react"
import "../Footer/footer.scss"
import logo from '../Header/YourHealth.png'
import {BsFacebook, BsInstagram} from "react-icons/bs"
import {FiMail} from "react-icons/fi"

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
            <div className="footer__info">
                <div className="footer__links">
                    <div className="footer__instagram">
                        <BsInstagram />
                        <a >Instagram</a>
                    </div>
                    <div className="footer__facebook">
                        <BsFacebook />
                        <a>Facebook</a>
                    </div>
                    <div className="footer__email">
                        <FiMail />
                        <a>yourhealth@gmail.com</a>
                    </div>
                </div>
                <div className="footer__contact">
                    <div className="footer__phone">
                        +48-xxx-xxx-xxx
                    </div>
                    <div className="footer__adress">
                        Nowoursynowska 161 <br/>
                        Warsaw, Poland
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer