const burgerData = [
    {
        id: 0,
        name: "Classic Burger",
        price: "10",
    },
    {
        id: 1,
        name: "Double Trouble",
        price: "17",
    },
]

function Burger() {
    return (
        <>
            {burgerData.map((burger) => (
                <div className="food" key={burger.id}>
                    <div className="wrapper">
                        <img
                            src={require("../../../images/food/" +
                                burger.name +
                                ".jpg")}
                            alt=""
                        />
                        <div className="details">
                            <p className="name">{burger.name}</p>
                            <p className="price">${burger.price}</p>
                            <p className="button">Click Now</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Burger
