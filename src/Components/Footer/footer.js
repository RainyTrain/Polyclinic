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
            <div className="footer__info">
                <div className="footer__links">
                    <div className="footer__instagram">Instagram</div>
                    <div className="footer__facebook">Facebook</div>
                    <div className="footer__Email">yourhealth@gmail.com</div>
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