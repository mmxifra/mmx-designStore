import { useContext, useState } from 'react';
import swal from 'sweetalert';
import { CartContext } from '../context/CartContext';
import ItemCheckout from './ItemCheckout';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        swal ({
            title: 'Agregado al carrito',
            icon: 'success',
            Button: true,
            timer: 2500
        })
        setItemCount(qty);
        test.addToCart(item, qty)
    };
    
    return (
        <>
        {
            item && item.img
            ?
            <div className='row detailContainer body'>
                <div className='col-lg-5 col-md-5 col-xs-12 detailImg'>
                    <img src= {item.img} className= 'itemImg' alt= {item.title} />
                </div>
                <div className='col-lg-7 col-md-7 col-xs-12 detailImg'>
                    <h2 className= 'itemTitle'>{item.title}</h2>
                    <p className= 'itemDetail'>{item.description}</p>
                    <p className= 'itemPrice'>$ {item.price}</p>
                    <p className= 'itemStock'>{item.stock} kilos en stock</p>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <ItemCheckout />
                    }
                </div>    
            </div>
            : <p>Cargando producto...</p>
        }
        </>
    );
};

export default ItemDetail;
