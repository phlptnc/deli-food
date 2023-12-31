import React from "react"
import "./Login.scss"
import Account from "../../components/Account/Account"
import Socials from "../../components/Socials/Socials"

function Login() {
    return (
        <>
            <section className="login-section">
                <div className="login-container">
                    <h2>Sign In</h2>
                    <div className="wrapper">
                        <p>New user?</p>
                        <a href="/signup">Create an account</a>
                    </div>
                    <Account name="Login" />
                    <p className="forgotten">Forgotten Password?</p>
                    <div className="divider">
                        <span></span>
                        Or
                        <span></span>
                    </div>
                    <Socials />
                    <p className="help-link">Get help signing in</p>
                </div>
            </section>
        </>
    )
}

export default Login
