import React from "react"
import "./Footer.scss"
import Logo from "../../images/logo-2.png"
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="logo-container">
                        <h2>
                            <a href="/" className="logo">
                                <img src={Logo} alt="website logo" />
                                <div>
                                    <span>Deli</span>Food
                                </div>
                            </a>
                        </h2>
                        <div className="lower-section">
                            <p className="short-description">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ducimus, itaque adipisci
                                sapiente quae commodi natus!
                            </p>
                            <p>
                                Inspired from
                                <a
                                    href="https://www.behance.net/gallery/170545439/Order-Food-Online-Website-Design-Concept?fbclid=IwAR0-cGokDA3MepNd1aryOgF8m_VyZK6EvsYl34Rlhg8RuhHel0m0KLB5vjo"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="design"
                                >
                                    Muhammad Bilal
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="newsletter-container">
                        <h3>Subscribe</h3>
                        <p>
                            Subscribe to stay tuned for promos and latest
                            updates!
                        </p>
                        <div className="email-wrapper">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                            ></input>
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div className="links-container">
                        <div className="about-section sections">
                            <h4>About</h4>
                            <div className="links">
                                <p>About Us</p>
                                <p>Features</p>
                                <p>News</p>
                                <p>Menu</p>
                            </div>
                        </div>
                        <div className="company-section sections">
                            <h4>Company</h4>
                            <div className="links">
                                <p>Why Food</p>
                                <p>Partner with Us</p>
                                <p>FAQ</p>
                                <p>Blog</p>
                            </div>
                        </div>
                        <div className="support-section sections">
                            <h4>Support</h4>
                            <div className="links">
                                <p>Account</p>
                                <p>Support</p>
                                <p>Feedback</p>
                                <p>Contact us</p>
                            </div>
                        </div>
                        <div className="socials-section sections">
                            <h4>Get in Touch</h4>
                            <div className="links">
                                <p>
                                    <FiFacebook />
                                </p>
                                <p>
                                    <FiTwitter />
                                </p>
                                <p>
                                    <FiInstagram />
                                </p>
                            </div>
                            <p>delifood@gmail.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
