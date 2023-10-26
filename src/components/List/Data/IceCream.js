const iceCreamData = [
    {
        id: 0,
        name: "Halo-Halo",
        price: "15",
    },
    {
        id: 0,
        name: "Strawberry Bingsu",
        price: "18",
    },
]

function IceCream() {
    return (
        <>
            {iceCreamData.map((icecream) => (
                <div className="food" key={icecream.id}>
                    <div className="wrapper">
                        <img
                            src={require("../../../images/food/" +
                                icecream.name +
                                ".jpg")}
                            alt=""
                        />
                        <div className="details">
                            <p className="name">{icecream.name}</p>
                            <p className="price">${icecream.price}</p>
                            <p className="button">Click Now</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default IceCream
