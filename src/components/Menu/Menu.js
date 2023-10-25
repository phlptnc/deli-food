import React, { useState } from "react"
import "./Menu.scss"
import breakfastData from "./Breakfast"
import lunchData from "./Lunch"
import dinnerData from "./Dinner"

function Menu() {
    const [toggled, setToggled] = useState(1)

    //Switch menu
    const toggleMenu = (index) => {
        setToggled(index)
    }

    return (
        <>
            <section className="menu-section">
                <div className="header-container">
                    <h2>Full Menu</h2>
                    <p>
                        From classic favorites to innovative new dishes our menu
                        has something for everyone
                    </p>
                </div>
                <div className="wrapper">
                    <div className="selections">
                        <div
                            className={
                                toggled === 1
                                    ? "active-menu-button"
                                    : "menu-button"
                            }
                            onClick={() => toggleMenu(1)}
                        >
                            Breakfast
                        </div>
                        <div
                            className={
                                toggled === 2
                                    ? "active-menu-button"
                                    : "menu-button"
                            }
                            onClick={() => toggleMenu(2)}
                        >
                            Lunch
                        </div>
                        <div
                            className={
                                toggled === 3
                                    ? "active-menu-button"
                                    : "menu-button"
                            }
                            onClick={() => toggleMenu(3)}
                        >
                            Dinner
                        </div>
                    </div>
                </div>

                <div className="menu-body">
                    <div
                        className={
                            toggled === 1 ? "active-menu-list" : "menu-list"
                        }
                    >
                        {breakfastData.map((item) => (
                            <div className="food">
                                <div className="top-section">
                                    <img
                                        src={require("../../images/breakfast/" +
                                            item.name +
                                            ".jpg")}
                                        alt="food"
                                    />
                                </div>
                                <div className="lower-section">
                                    <h3>{item.name}</h3>
                                    <p className="description">
                                        {item.description}
                                    </p>
                                    <div className="rate-wrapper">
                                        <img
                                            src={require("../../images/ratings/rating-" +
                                                item.stars * 10 +
                                                ".png")}
                                            alt="rating by stars"
                                        />
                                        <p>({item.reviews}) Reviews</p>
                                    </div>
                                    <div className="price-wrapper">
                                        <p>${item.price}</p>
                                        <button>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className={
                            toggled === 2 ? "active-menu-list" : "menu-list"
                        }
                    >
                        {lunchData.map((item) => (
                            <div className="food">
                                <div className="top-section">
                                    <img
                                        src={require("../../images/lunch/" +
                                            item.name +
                                            ".jpg")}
                                        alt="food"
                                    />
                                </div>
                                <div className="lower-section">
                                    <h3>{item.name}</h3>
                                    <p className="description">
                                        {item.description}
                                    </p>
                                    <div className="rate-wrapper">
                                        <img
                                            src={require("../../images/ratings/rating-" +
                                                item.stars * 10 +
                                                ".png")}
                                            alt="rating by stars"
                                        />
                                        <p>({item.reviews}) Reviews</p>
                                    </div>
                                    <div className="price-wrapper">
                                        <p>${item.price}</p>
                                        <button>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className={
                            toggled === 3 ? "active-menu-list" : "menu-list"
                        }
                    >
                        {dinnerData.map((item) => (
                            <div className="food">
                                <div className="top-section">
                                    <img
                                        src={require("../../images/dinner/" +
                                            item.name +
                                            ".jpg")}
                                        alt="food"
                                    />
                                </div>
                                <div className="lower-section">
                                    <h3>{item.name}</h3>
                                    <p className="description">
                                        {item.description}
                                    </p>
                                    <div className="rate-wrapper">
                                        <img
                                            src={require("../../images/ratings/rating-" +
                                                item.stars * 10 +
                                                ".png")}
                                            alt="rating by stars"
                                        />
                                        <p>({item.reviews}) Reviews</p>
                                    </div>
                                    <div className="price-wrapper">
                                        <p>${item.price}</p>
                                        <button>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu
