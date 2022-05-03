import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartDetail = () => {

    const test = useContext(CartContext);

    return (
        //si el carrito tiene algo muestra los productos en el carrito
        <>
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
                : <div className='body'>
                    <p>El carrito esta vacío</p>
                    <Link to ='/'><button className='generalBtn cartBtn'>Agregar productos</button></Link>
                </div>
            } 
            <hr/>
            {/*si no hay productos muestra boton para agregar productos */}
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
                            <button className='deleteBtn' onClick={() => test.removeItem(item.id)}>Eliminar producto</button>
                        </div>
                        <div className='col-lg-3 col-md-3 col-xs-12 cartItemPrice'>
                            <p>Total: $ {test.totalCostItem(item.id)}</p>
                        </div>
                        <hr/>
                    </div>
                    ))
                )
            }
        </>
    );
};

export default CartDetail;