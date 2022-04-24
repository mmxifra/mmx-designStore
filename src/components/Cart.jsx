import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


const Cart = () => {
    const test = useContext(CartContext);
    return (
        <>
            <h3 className='cartTitles'>CARRITO</h3>
            {
                test.cartList.length > 0
                ? <div className='row'>
                    <div className='col-lg-6 col-md-6 col-xs-6 '>
                        <Link to ='/'><button className='generalBtn shopBtn'>Seguir comprando</button></Link>   
                    </div>
                    <div className='col-lg-6 col-md-6 col-xs-6 '>
                        <button className='generalBtn emptyBtn' onClick ={test.emptyCart}>Vaciar carrito</button>  
                    </div>  
                </div>                
                : <div>
                    <p>El carrito esta vacío</p>
                    <Link to ='/'><button className='generalBtn cartBtn'>Agregar productos</button></Link>
                </div>
            } 
            <hr/>
            {
                test.cartList.length > 0 && (
                test.cartList.map (item =>(
                    <div  className='row cartItemContainer' key={item.id}>
                        <div className='col-lg-3 col-md-3 col-xs-12 CartImgContiner'>
                        <Link to= {`/item/${item.id}`}><img src={item.img} className='imgCart' alt={item.title}/></Link>
                        </div>
                        <div className='col-lg-6 col-md-6 col-xs-12 cartItemData'>
                            <Link to= {`/item/${item.id}`}><h3 className= 'cartTitle'>{item.title}</h3></Link>
                            <p>{item.itemQty} kilos / ${item.price} por kilo</p>
                            <button className='generalBtn deleteBtn' onClick={() => test.removeItem(item.id)}>Eliminar producto</button>
                        </div>
                        <div className='col-lg-3 col-md-3 col-xs-12 cartItemPrice'>
                            <p>Total: $ {test.totalCostItem(item.id)}</p>
                        </div>
                        <hr/>
                    </div>
                    ))
                )
            }
            
            {
                test.cartList.length > 0 && (
                    <div className='row CartTotal'>
                        <h3 className='cartTitles'>Detalle de compra</h3>
                        <div className='col-lg-12 col-md-12 col-xs-12 summaryCart'>
                            <p>Subtotal</p>
                            <p>$ {test.cartSubTotal()} </p>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xs-12 summaryCart'>
                            <p>IVA (21%) </p>
                            <p>$ {test.cartIva()} </p>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xs-12 summaryCart summaryCartTotal'>
                            <p>Total</p>
                            <p>$ {test.cartTotal()} </p>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xs-12 summaryCart'>
                            <button className='generalBtn shopBtn endPurchaseBtn'>Terminar compra</button>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Cart;

