import '../styles/Cart.css';
import CartItemsDetail from './CartItemsDetail';
import CartOrder from './CartOrder';

const Cart = () => {
    return (
            // Modified Cart as a container with 2 components in it: 
            // CartItemsDetail: each product information 
            // CartOrder: order totals, taxes and shipping fees
        <>
            <h3 className='cartTitles'>CARRITO</h3>
            <CartItemsDetail/> 
            <CartOrder/>
        </>
    );
}

export default Cart;

