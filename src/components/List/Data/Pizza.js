const pizzaData = [
    {
        id: 0,
        name: "Pepperoni Pizza",
        price: "15",
    },
    {
        id: 0,
        name: "Overload Pizza",
        price: "25",
    },
]

function Pizza() {
    return (
        <>
            {pizzaData.map((pizza) => (
                <div className="food" key={pizza.id}>
                    <div className="wrapper">
                        <img
                            src={require("../../../images/food/" +
                                pizza.name +
                                ".jpg")}
                            alt=""
                        />
                        <div className="details">
                            <p className="name">{pizza.name}</p>
                            <p className="price">${pizza.price}</p>
                            <p className="button">Click Now</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Pizza
