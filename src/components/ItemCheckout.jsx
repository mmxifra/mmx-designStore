import { Link } from 'react-router-dom';

//boton para ir al carrito despues de confirmar la cantidad de productos en itemDetail
const ItemCheckout = () => {
    return (
        <>
        <Link to={'/cart'}><button className='generalBtn' >Ver Carrito</button></Link>
        </>
    );
};

export default ItemCheckout;