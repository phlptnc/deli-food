import React from "react"
import "./SignUp.scss"
import Account from "../../components/Account/Account"
import Socials from "../../components/Socials/Socials"

function SignUp() {
    return (
        <>
            <section className="signup-section">
                <div className="signup-container">
                    <h2>Create an account</h2>
                    <div className="wrapper">
                        <p>Already have an account?</p>
                        <a href="/account">Sign in</a>
                    </div>
                    <Account name="Sign Up" />
                    <div className="divider">
                        <span></span>
                        Or
                        <span></span>
                    </div>
                    <Socials />
                </div>
            </section>
        </>
    )
}

export default SignUp
