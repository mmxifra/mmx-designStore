import { useEffect, useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [amount, setAmount] = useState(0);

    useEffect(() =>{
        setAmount(initial);
    },[]);

    const increment = () =>{
        if (amount < stock) {
            setAmount (amount +1);
        };
    };

    const decrement = () =>{
        if (amount > initial) {
            setAmount (amount -1);
        };
    };
    
    return(
        <div className="countDiv">
            <button className="countBtn" onClick={increment}>+</button>
            <span className="countAmount">{amount}</span>
            <button className="countBtn" onClick={decrement}>-</button>
            <button className="countBtn" disabled ={amount === 0} onClick={() => {onAdd(amount)}}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;