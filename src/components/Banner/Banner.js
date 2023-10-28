import React from "react"
import "./Banner.scss"
import banner from "../../images/food-banner.png"

function Banner() {
    return (
        <>
            <div className="banner-wrapper">
                <img src={banner} alt="" />
            </div>
        </>
    )
}

export default Banner
