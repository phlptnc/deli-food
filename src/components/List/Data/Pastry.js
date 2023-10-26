const pastryData = [
    {
        id: 0,
        name: "Fruit Tart",
        price: "10",
    },
    {
        id: 0,
        name: "Turtle Cheesecake",
        price: "17",
    },
]

function Pastry() {
    return (
        <>
            {pastryData.map((pastry) => (
                <div className="food" key={pastry.id}>
                    <div className="wrapper">
                        <img
                            src={require("../../../images/food/" +
                                pastry.name +
                                ".jpg")}
                            alt=""
                        />
                        <div className="details">
                            <p className="name">{pastry.name}</p>
                            <p className="price">${pastry.price}</p>
                            <p className="button">Click Now</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Pastry
