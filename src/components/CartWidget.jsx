import { useContext } from 'react';
import cart from '../cart.svg';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const cartQty = useContext(CartContext);

    return (
        <div className='col-lg-3 col-md-3 col-xs-12 headerCart'>
            <button type='button' className='btn position-relative'>
                <img src={cart} className='cartIcon' alt='brand Logo' />
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{cartQty.cartList.length}</span>
            </button>
        </div>
    );
};

export default CartWidget;