import { Link } from "react-router-dom";


const ItemCheckout = () => {
    return (
        <>
        <Link to={'/cart'}><button className="countBtn" >Ver Carrito</button></Link>
        </>
    );
};

export default ItemCheckout;