import React, { useEffect, useState } from "react"
import "./Navbar.scss"
import MenuLinks from "./Navlinks"
import Logo from "../../images/logo-2.png"
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai"
import { LuSearch } from "react-icons/lu"
import { CiMenuKebab } from "react-icons/ci"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleNav = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header>
            <div className="wrapper">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <h3>
                        <a href="/">
                            <span>Deli</span>Food
                        </a>
                    </h3>
                </div>

                {/* Mobile navigation menu */}
                {menuOpen && (
                    <div className="mobile-nav-container">
                        <MenuLinks className="mobile-navigation" />
                    </div>
                )}
                <div className="navigation">
                    <MenuLinks />
                </div>
                <div className="right-section">
                    <div className="search-bar">
                        <input placeholder="Search" type="text"></input>
                        <div className="search-icon">
                            <LuSearch />
                        </div>
                    </div>
                    <div className="shopping-cart">
                        <AiOutlineShoppingCart />
                    </div>
                    <div className="accounts">
                        <a href="" className="login-button">
                            Login
                        </a>
                        <a href="" className="sign-up-button">
                            Sign Up
                        </a>
                        <div className="nav-button" onClick={toggleNav}>
                            <CiMenuKebab />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
