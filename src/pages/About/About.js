import React from "react"
import "./About.scss"
import ChooseUs from "../../components/ChooseUs/ChooseUs"
import AboutUs from "../../images/About.jpg"

function About() {
    return (
        <>
            <section className="about-us">
                <h1>About Us</h1>
                <div className="who-we-are">
                    <img src={AboutUs} alt="food preparation" />
                    <div className="right-section">
                        <h3>Who We Are</h3>
                        <h2>Passion for Food, Taste for life</h2>
                        <p>
                            At our core, we are defined by our unwavering
                            Passion for Food and our unrelenting commitment to
                            savoring every moment in life. Our journey is a
                            culinary adventure that transcends the boundaries of
                            the kitchen and takes you on a delectable
                            exploration of flavors, cultures, and experiences.
                        </p>
                        <p>
                            Our team of dedicated food enthusiasts, chefs, and
                            food lovers share an unbridled zeal for the art of
                            gastronomy. We believe that food is not just
                            sustenance; it's a vibrant expression of culture,
                            emotion, and connection. Every dish we create, every
                            meal we serve, is a testament to our love for food
                            and a celebration of the diverse tastes that life
                            has to offer.
                        </p>
                    </div>
                </div>
            </section>
            <ChooseUs />
        </>
    )
}

export default About
