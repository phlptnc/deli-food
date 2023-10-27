import React from "react"
import "./ChooseUs.scss"

function ChooseUs() {
    const data = [
        {
            id: 0,
            name: "Easy to Order",
            description:
                "No time to wait, no time to waste. Order now for fast food haste.",
        },
        {
            id: 0,
            name: "Fast Delivery",
            description: "Delicious food delivered straight to your door.",
        },
        {
            id: 0,
            name: "Best Chefs",
            description: "Preparing your favorite food with the best chefs.",
        },
    ]

    return (
        <>
            <section className="choose-us-section">
                <h2>Why Choose Us</h2>
                <div className="wrapper">
                    {data.map((item) => (
                        <div className="container">
                            <img
                                src={require("../../images/" +
                                    item.name +
                                    ".png")}
                                alt=""
                            />
                            <div className="description">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ChooseUs
