import cart from '../cart.svg';

const CartWidget = () => {
    return (
        <div className='col-lg-3 col-md-3 col-xs-12 headerCart'>
            <button type='button' class='btn position-relative'>
                <img src={cart} className='cartIcon' alt='brand Logo' />
                <span class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>8</span>
            </button>
        </div>
    );
};

export default CartWidget;