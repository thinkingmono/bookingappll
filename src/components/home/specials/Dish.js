const Dish = (props) => {

    let dishName = props.dishName;
    let dishPrice = props.dishPrice;
    let dishDescription = props.dishDescription;
    let dishImage = props.dishImage;

    return (
        <>
            <article>
                <div className="dish-img first">
                    <img src={dishImage} alt={dishName} />
                </div>
                <div className='dish-information'>
                    <div className="dishname-price">
                        <h4>{dishName}</h4>
                        <span>{dishPrice}</span>
                    </div>
                    <div className="dish-description">
                        <p>{dishDescription}</p>
                    </div>
                    <div className="dish-delivery">
                        <span>Order a delivery</span>
                        <i></i>
                    </div>
                </div>
            </article>
        </>
    );
}

export default Dish;