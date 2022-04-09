import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
const { products } = require("../utils/products");

const ItemDetailContainer = () =>{
    const[dato, setDato] = useState({});

    useEffect (() => {
        customFetch (2000, products[1])
            .then(result => setDato(result))
            .catch(error => console.log (error))
    }, []);
    
    return (
            <ItemDetail item ={dato}/>

    );
};

export default ItemDetailContainer;
