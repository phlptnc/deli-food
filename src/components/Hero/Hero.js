import React from "react"
import "./Hero.scss"
import HeroBurger from "../../images/burger-splash.png"

function Hero() {
    return (
        <>
            <section className="hero">
                <div className="left-section">
                    <h1>
                        Food You Love
                        <br />
                        <span>Delivered</span> to You
                    </h1>
                    <p>
                        The taste of your food largely depends on the quality of
                        the ingredients. Use fresh seasonal products and
                        high-quality of meats and fish
                    </p>
                    <a href="">Order Now</a>
                </div>
                <div className="right-section">
                    <img src={HeroBurger} alt="image of a burger" />
                </div>
            </section>
        </>
    )
}

export default Hero
