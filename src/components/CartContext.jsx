import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

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

    const removeItem = (itemId) => {
        let result = cartList.filter (item => item.id != itemId);
        setCartList(result);
    };

    const emptyCart = () => {
        setCartList ([]);
    };

    return (
        <CartContext.Provider value ={{cartList, addToCart, removeItem, emptyCart}}>
            {children}
        </CartContext.Provider>
    );    
};

export default CartContextProvider;