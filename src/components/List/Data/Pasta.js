const pastaData = [
    {
        id: 0,
        name: "Spaghetti",
        price: "12",
    },
    {
        id: 0,
        name: "Carbonara",
        price: "15",
    },
]

function Pasta() {
    return (
        <>
            {pastaData.map((pasta) => (
                <div className="food" key={pasta.id}>
                    <div className="wrapper">
                        <img
                            src={require("../../../images/food/" +
                                pasta.name +
                                ".jpg")}
                            alt=""
                        />
                        <div className="details">
                            <p className="name">{pasta.name}</p>
                            <p className="price">${pasta.price}</p>
                            <p className="button">Click Now</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Pasta
