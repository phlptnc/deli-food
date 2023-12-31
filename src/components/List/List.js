import React, { useState } from "react"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6"
import "./List.scss"
import category from "./Categories"
import Burger from "./Data/Burger"
import Pasta from "./Data/Pasta"
import Pastry from "./Data/Pastry"
import Pizza from "./Data/Pizza"
import IceCream from "./Data/IceCream"
import Salad from "./Data/Salad"
import Drinks from "./Data/Drinks"

function List() {
    const [toggled, setToggled] = useState(0)

    const toggleMenu = (index) => {
        setToggled(index)
    }

    return (
        <>
            <section className="list-section">
                <div className="header-container">
                    <h2>
                        Menu that makes
                        <br />
                        you eat unstoppable
                    </h2>
                </div>
                <div className="list-body">
                    <div className="lists">
                        <div className="wrapper">
                            {category.map((food) => (
                                <div
                                    className={
                                        toggled === food.id
                                            ? ".food active"
                                            : "food"
                                    }
                                    key={food.id}
                                    onClick={() => toggleMenu(food.id)}
                                >
                                    <div className="img-container">
                                        <img
                                            src={require("../../images/icons/" +
                                                food.name +
                                                ".png")}
                                            alt="icon"
                                        />
                                    </div>
                                    <p>{food.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="food-section">
                        <div className="button-wrapper">
                            <div className="previous-button">
                                <FaChevronLeft />
                            </div>
                            <div className="next-button">
                                <FaChevronRight />
                            </div>
                        </div>
                        <div
                            className={
                                toggled === 0
                                    ? "food-display active"
                                    : "food-display hidden"
                            }
                        >
                            <Burger />
                        </div>
                        <div
                            className={
                                toggled === 1
                                    ? "food-display active"
                                    : "food-display hidden"
                            }
                        >
                            <Pasta />
                        </div>
                        <div
                            className={
                                toggled === 2
                                    ? "food-display active"
                                    : "food-display hidden"
                            }
                        >
                            <Pastry />
                        </div>
                        <div
                            className={
                                toggled === 3
                                    ? "food-display active"
                                    : "food-display hidden"
                            }
                        >
                            <Pizza />
                        </div>
                        <div
                            className={
                                toggled === 4
                                    ? "food-display active"
                                    : "food-display hidden"
                            }
                        >
                            <IceCream />
                        </div>
                        <div
                            className={
                                toggled === 5
                                    ? "food-display active"
                                    : "food-display hidden"
                            }
                        >
                            <Salad />
                        </div>

                        <div
                            className={
                                toggled === 6
                                    ? "food-display active"
                                    : "food-display hidden"
                            }
                        >
                            <Drinks />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default List
