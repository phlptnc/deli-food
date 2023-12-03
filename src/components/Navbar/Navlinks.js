import React from "react"
import { NavLink } from "react-router-dom"
import { FiHome } from "react-icons/fi"
import { IoRestaurantOutline } from "react-icons/io5"
import { RxReader } from "react-icons/rx"
import { HiOutlineSquare3Stack3D } from "react-icons/hi2"

function MenuLinks() {
    const goTop = () => {
        window.scroll({
            top: 0,
        })
    }

    return (
        <>
            <NavLink
                onClick={goTop}
                to="/"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
                <FiHome className="icon" />
                Home
            </NavLink>
            <NavLink
                onClick={goTop}
                to="/menu"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
                <IoRestaurantOutline className="icon" />
                Menu
            </NavLink>
            <NavLink
                onClick={goTop}
                to="/blog"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
                <RxReader className="icon" />
                Blog
            </NavLink>
            <NavLink
                onClick={goTop}
                to="/about "
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
                <HiOutlineSquare3Stack3D className="icon" />
                About
            </NavLink>
        </>
    )
}

export default MenuLinks
