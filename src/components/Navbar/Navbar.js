import React, { useState } from "react"
import "./Navbar.scss"
import MenuLinks from "./Navlinks"
import { NavLink } from "react-router-dom"
import Logo from "../../images/logo.png"
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import { LuSearch } from "react-icons/lu"
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleNav = () => {
        setMenuOpen(!menuOpen)
    }

    const goTop = () => {
        window.scroll({
            top: 0,
        })
    }

    return (
        <header>
            <div className="wrapper">
                <a href="/" className="logo">
                    <img src={Logo} alt="" />
                    <h3>
                        <span>Deli</span>Food
                    </h3>
                </a>

                <div className={`navigation ${menuOpen ? "active" : ""}`}>
                    <MenuLinks />
                    <NavLink
                        onClick={goTop}
                        to="/account"
                        className={"account-nav"}
                        style={{
                            alignItems: "center",
                            gap: "5px",
                        }}
                    >
                        <AiOutlineUser className="icon" />
                        Account
                    </NavLink>
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
                        <a href="account" className="login-button">
                            Login
                        </a>
                        <a href="signup" className="sign-up-button">
                            Sign Up
                        </a>
                        <div className="nav-button" onClick={toggleNav}>
                            <PiDotsThreeOutlineVerticalBold />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
