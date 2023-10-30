import React from "react"
import "./Socials.scss"
import { FaFacebook, FaApple } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

function Socials() {
    return (
        <>
            <div className="socials-button">
                <button>
                    <FcGoogle className="icon" /> Continue with Google
                </button>
                <button>
                    <FaFacebook className="icon" /> Continue with Facebook
                </button>
                <button>
                    <FaApple className="icon" />
                    Continue with Apple
                </button>
            </div>
        </>
    )
}

export default Socials
