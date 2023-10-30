import React from "react"
import "./Login.scss"
import { FaFacebook, FaApple } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

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
                    <div className="upper-section">
                        <h3>Email</h3>
                        <input type="email" />
                        <h3>Password</h3>
                        <input type="password" />
                        <div className="button-wrapper">
                            <button>Log in</button>
                        </div>
                        <p>Forgotten Password?</p>
                    </div>
                    <div className="divider">
                        <span></span>
                        Or
                        <span></span>
                    </div>
                    <div className="lower-section">
                        <button>
                            <FcGoogle className="icon" /> Continue with Google
                        </button>
                        <button>
                            <FaFacebook className="icon" /> Continue with
                            Facebook
                        </button>
                        <button>
                            <FaApple className="icon" />
                            Continue with Apple
                        </button>
                        <p>Get help signing in</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
