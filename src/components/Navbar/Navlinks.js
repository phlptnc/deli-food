import React from "react"
import { NavLink } from "react-router-dom"
import { FiHome } from "react-icons/fi"
import { IoRestaurantOutline } from "react-icons/io5"
import { RxReader } from "react-icons/rx"
import { TiInfoLargeOutline } from "react-icons/ti"

function MenuLinks() {
    return (
        <>
            <NavLink
                to="/"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
                <FiHome className="icon" />
                Home
            </NavLink>
            <NavLink
                to="/menu"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
                <IoRestaurantOutline className="icon" />
                Menu
            </NavLink>
            <NavLink
                to="/blog"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
                <RxReader className="icon" />
                Blog
            </NavLink>
            <NavLink
                to="/about "
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
                <TiInfoLargeOutline className="icon" />
                About
            </NavLink>
        </>
    )
}

export default MenuLinks
