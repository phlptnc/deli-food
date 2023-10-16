import React from "react"
import { NavLink } from "react-router-dom"

function MenuLinks() {
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about ">About</NavLink>
        </>
    )
}

export default MenuLinks
