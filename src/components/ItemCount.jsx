import { useEffect, useState } from 'react';

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
        <div className='countDiv'>
            <button className='generalBtn' onClick={increment}>+</button>
            <span className='countAmount'>{amount}</span>
            <button className='generalBtn' onClick={decrement}>-</button>
            <button className='generalBtn' disabled ={amount === 0} onClick={() => {onAdd(amount)}}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;