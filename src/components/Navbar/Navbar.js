import React, { useState } from "react"
import "./Navbar.scss"
import MenuLinks from "./Navlinks"
import { NavLink } from "react-router-dom"
import Logo from "../../images/logo-2.png"
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
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

                <div className={`navigation ${menuOpen ? "active" : ""}`}>
                    <MenuLinks />
                    <NavLink
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
                        <a href="/" className="sign-up-button">
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
