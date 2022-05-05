import '../styles/Cart.css';
import CartItemsDetail from './CartItemsDetail';
import CartOrder from './CartOrder';

const Cart = () => {
    return (
        <>
            <h3 className='cartTitles'>CARRITO</h3>
            <CartItemsDetail/>
            <CartOrder/>
        </>
    );
}

export default Cart;

