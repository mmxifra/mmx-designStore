import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import db from '../utils/firebaseConfig';
import swal from 'sweetalert';

const CartOrder = () => {
    const test = useContext(CartContext);

    const checkout = () => {
        // Update stock in firestore after order is placed
        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, 'products', item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.itemQty)
            });
        });

        // Fields requies to create order in firestore
        let order = {
            buyer: {
                name: 'María Xifra',
                email:'maria@gmail.com',
                phone: '123456789'
            },
            date: serverTimestamp(),
            items: test.cartList.map( item =>({
                id: item.id,
                title: item.title,
                price: item.price,
                qty: item.itemQty
            })),
            total: test.cartTotal()
        }
        // Create new collection where orders will be placed in firestore
        const createOrderInFirestore = async () => {
            const newOrderRef = doc (collection (db,'orders'));
            await setDoc(newOrderRef, order); // Create new order inside collection 'orders'
            return newOrderRef;
        }
        
        createOrderInFirestore()
            .then(result => swal ({
                text: 'Tu pedido ha sido confirmado',
                title: 'Gracias por tu compra',
                icon: 'success',
                Button: 'Ok',
            }))
            .catch(error => console.log (error))
        test.emptyCart(); // After order is created in firestore empty cart
    };

    return (
        <>
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
                        <div className='col-lg-12 col-md-12 col-xs-12 summaryCart'>
                            <p>Envio </p>
                            {
                               test.shipping() === 0
                               ? <p>Gratuito</p>
                               : <p>$ {test.shipping()}</p>
                            }
                        </div>
                        <div className='col-lg-12 col-md-12 col-xs-12 summaryCart summaryCartTotal'>
                            <p>Total</p>
                            <p>$ {test.cartTotal()} </p>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xs-12 summaryCart'>
                            <button onClick={checkout} className='generalBtn shopBtn endPurchaseBtn'>Terminar compra</button>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default CartOrder;