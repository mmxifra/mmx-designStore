import { useContext } from 'react';
import cart from '../assets/cart.svg';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const cartTotalQty = useContext(CartContext);

    return (
        
        cartTotalQty.qtyOnCart() > 0 
        ?        
        <div className='col-lg-3 col-md-3 col-xs-12 headerCart'>
            <button type='button' className='btn position-relative'>
                <img src={cart} className='cartIcon' alt='brand Logo' />
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{cartTotalQty.qtyOnCart()}</span>
            </button>
        </div>
        : <></>
    );
};

export default CartWidget;