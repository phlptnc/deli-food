import React from "react"
import "./Account.scss"

function Account(props) {
    return (
        <>
            <div className="upper-section">
                <h3>Email</h3>
                <input type="email" />
                <h3>Password</h3>
                <input type="password" />
                <div className="button-wrapper">
                    <button>{props.name}</button>
                </div>
            </div>
        </>
    )
}

export default Account
