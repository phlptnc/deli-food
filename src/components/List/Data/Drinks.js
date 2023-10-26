const drinksData = [
    {
        id: 0,
        name: "Spanish Coffee",
        price: "15",
    },
    {
        id: 0,
        name: "Matcha Latte",
        price: "15",
    },
]

function Drinks() {
    return (
        <>
            {drinksData.map((drinks) => (
                <div className="food" key={drinks.id}>
                    <div className="wrapper">
                        <img
                            src={require("../../../images/food/" +
                                drinks.name +
                                ".jpg")}
                            alt=""
                        />
                        <div className="details">
                            <p className="name">{drinks.name}</p>
                            <p className="price">${drinks.price}</p>
                            <p className="button">Click Now</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Drinks
