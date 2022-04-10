import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";
const { products } = require("../utils/products");


const ItemListContainer = () =>{
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        if (idCategory === undefined) {
            customFetch (2000, products)
                .then (result => setDatos(result))
                .catch(error => console.log (error))
        } else {
            customFetch (2000, products.filter(item => item.categoryId === (idCategory)))
                .then (result => setDatos(result))
                .catch(error => console.log (error))
        };
    }, [datos]);

    return (
        <>
            <ItemList items = {datos}/>
        </>
    );
};

export default ItemListContainer;