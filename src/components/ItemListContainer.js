import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
const { products } = require("../utils/products");


const ItemListContainer = ({greeting}) =>{
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch (2000, products)
            .then (result => setDatos(result))
            .catch(error => console.log (error))
    }, []);

    return (
        <>
            <h2 className="title">{greeting}</h2>
            <ItemList items = {datos}/>
        </>
    );
};

export default ItemListContainer;