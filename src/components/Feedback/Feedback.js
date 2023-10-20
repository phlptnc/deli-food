import React from "react"
import Slider from "react-slick"
import "./Feedback.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import feedbackData from "./Data"
import Quotation from "../../images/qoutation mark.png"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
}

function Feedback() {
    return (
        <>
            <section className="feedback-section">
                <div className="feedback-header">
                    <h2>Food Lovers Feedback</h2>
                    <p>
                        High-quality ingredients: Fresh, seasonal and locally
                        sourced ingredients often make a big difference in taste
                        and overall enjoyment of a dish
                    </p>
                </div>
                <Slider {...settings} className="feedback-body">
                    {feedbackData.map((item) => (
                        <div className="feedback-container">
                            <div className="details">
                                <div className="profile-picture">
                                    <img
                                        src={require("../../images/customer/" +
                                            item.picture +
                                            ".jpg")}
                                        alt="picture of customer"
                                        className="image"
                                    />
                                </div>
                                <div className="info">
                                    <p className="name">{item.name}</p>
                                    <p className="hobby">{item.hobby}</p>
                                    <div className="rating">
                                        <img
                                            src={require("../../images/ratings/rating-" +
                                                item.rate * 10 +
                                                ".png")}
                                            alt="rating"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="qoute">
                                    <img
                                        src={Quotation}
                                        alt="image of quotation mark"
                                    />
                                </div>
                                <p>{item.comment}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </>
    )
}

export default Feedback
