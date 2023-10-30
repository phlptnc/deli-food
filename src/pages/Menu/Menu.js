import React from "react"
import "./Menu.scss"
import List from "../../components/List/List"
import Menu1 from "../../components/Menu/Menu"

function Menu() {
    return (
        <>
            <div className="menu-title">
                <h1>Menu</h1>
            </div>
            <div className="menu-wrapper">
                <List />
                <Menu1 />
            </div>
        </>
    )
}

export default Menu
