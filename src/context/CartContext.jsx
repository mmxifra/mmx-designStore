import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    // Agregar productos en carrito 
    const addToCart = (item, qty) =>{
        let isInCart = cartList.find (product => product.id === item.id);

        if (isInCart === undefined){
          setCartList ([
              ...cartList,
              {
                id: item.id,
                img: item.img,
                title: item.title, 
                price: item.price,
                itemQty: qty  
              }
          ]);  
        }else{
            isInCart.itemQty += qty;
        };   
    };

    // Borrar articulo del carrito
    const removeItem = (itemId) => {
        let result = cartList.filter (item => item.id !== itemId);
        setCartList(result);
    };

    // Vaciar Carrito
    const emptyCart = () => {
        setCartList ([]);
    };

    // Cantidad total en el carrito 
    const qtyOnCart = () => {
        let cartQty = cartList.map (item => item.itemQty);
        return cartQty.reduce (((prevValue, CurrentValue) => prevValue + CurrentValue), 0);
    };

    // Calcular costo total de cada articulo segun cantidad
    const totalCostItem = (id) => {
        let index = cartList.map ( item => item.id).indexOf(id);
        return cartList[index].price * cartList[index].itemQty;
    };

    // Calcular subtotal
    const cartSubTotal = () => {
        let costPerItem = cartList.map (item => totalCostItem(item.id));
        return costPerItem.reduce((prevValue, CurrentValue) => prevValue + CurrentValue);
    };

    // Calcular IVA
    const cartIva = () => {
        return Math.floor(cartSubTotal() * 0.21);
    };

    // Calcular total final
    const cartTotal = () => {
        return cartSubTotal() + cartIva();
    };

    return (
        <CartContext.Provider value ={{cartList, addToCart, removeItem, emptyCart, qtyOnCart, totalCostItem, cartSubTotal, cartIva, cartTotal}}>
            {children}
        </CartContext.Provider>
    );    
};

export default CartContextProvider;