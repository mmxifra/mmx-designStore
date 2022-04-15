import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
const { products } = require("../utils/products");

const ItemDetailContainer = () => {

    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch (2000, products.find (item => item.id === parseInt (idItem)))
            .then (result => setDato (result))
            .catch (error =>console.log (error))
    }, [idItem]);
    
    return (
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer;