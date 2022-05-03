import '../styles/Cart.css';
import CartDetail from './CartDetail';
import CartOrder from './CartOrder';

const Cart = () => {
    return (
        <>
            <h3 className='cartTitles'>CARRITO</h3>
            <CartDetail/>
            <CartOrder/>
        </>
    );
}

export default Cart;

