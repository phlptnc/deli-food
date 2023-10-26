const saladData = [
    {
        id: 0,
        name: "Greek Salad",
        price: "10",
    },
    {
        id: 0,
        name: "Pita Salad",
        price: "15",
    },
]

function Salad() {
    return (
        <>
            {saladData.map((salad) => (
                <div className="food" key={salad.id}>
                    <div className="wrapper">
                        <img
                            src={require("../../../images/food/" +
                                salad.name +
                                ".jpg")}
                            alt=""
                        />
                        <div className="details">
                            <p className="name">{salad.name}</p>
                            <p className="price">${salad.price}</p>
                            <p className="button">Click Now</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Salad
