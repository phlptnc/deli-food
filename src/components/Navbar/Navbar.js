import "./Navbar.scss"

import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai"
import { LuSearch } from "react-icons/lu"
import { CiMenuKebab } from "react-icons/ci"

const Navbar = () => {
    return (
        <header>
            <div className="wrapper">
                <h3>
                    <a href="">
                        <span>Deli</span>Food
                    </a>
                </h3>
                <div className="navigation">
                    <a href="">Home</a>
                    <a href="">Menu</a>
                    <a href="">Blog</a>
                    <a href="">About</a>
                    <button className="close-button">
                        <AiOutlineClose />
                    </button>
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
                        <button className="nav-button">
                            <CiMenuKebab />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
