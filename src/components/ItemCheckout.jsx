import { Link } from "react-router-dom";


const ItemCheckout = () => {
    return (
        <>
        <Link to={'/cart'}><button className="generalBtn" >Ver Carrito</button></Link>
        </>
    );
};

export default ItemCheckout;