import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const CartOrder = () => {

    const test = useContext(CartContext);

    const checkout = () => {
        
        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, 'products', item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.itemQty)
            });
        });

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
        console.log (order)

        const createOrderInFirestore = async () => {
            const newOrderRef = doc (collection (db,'orders'));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
            .then(result => alert('tu orden ha sido creada. Muchas gracias por tu compra.'))
            .catch(error => console.log (error))
        
        test.emptyCart();
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