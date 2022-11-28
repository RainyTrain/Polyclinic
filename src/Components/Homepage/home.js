import React from "react"
import "../Homepage/home.scss"

function Home() {
    return (
        <div className="homepage">
            <div className="homepage__description">
                <div className=" homepage__text">
                    YOUR HEALTH - new smart polyclinic that will help you in the most convenient way to make an appointment with a doctor from the comfort of your home. We provide a wide range of quality services thanks to our specialists.
                </div>
            </div>
            <article className="homepage__article">
                <div className="article">
                    <div className="article__img">
                        <img src="https://img.freepik.com/free-photo/portrait-hansome-young-male-doctor-man_171337-5068.jpg?w=1800&t=st=1669413318~exp=1669413918~hmac=514f5d1bb97364c163b446e412fe1928b97b70e22d2aa2a91edb54ce8f7d872c"></img>
                    </div>
                    <div style={{textAlign:'start'}} className="article__description">
                        Our clinic employs the best doctors of the country with the highest category
                    </div>
                </div>
                <div className="article">
                    <div style={{textAlign:'end'}} className="article__description">
                        Medical care at the best prices for our patients
                    </div>
                    <div className="article__img">
                        <img src="https://img.freepik.com/free-photo/isolated-shotof-happy-successful-mature-senior-physician-wearing-medical-unifrom-stethoscope-having-cheerful-facial-expression-smiling-broadly-keeping-arms-crossed-chest_343059-2254.jpg?w=1800&t=st=1669415260~exp=1669415860~hmac=3e8e701d9d187fa2667970598d8c117394bd8af2647e6092650b44c11c73120b"></img>
                    </div>
                </div>
            </article>
            <section className="section">
                <div className="section__description">
                    Check out our services
                </div>
                <div className="section__button">
                    <a href="/services"><button>Services</button></a>
                </div>
            </section>
        </div>
    )
}

export default Home