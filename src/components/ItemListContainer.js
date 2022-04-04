import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { data } from "./data";
import { useEffect, useState } from "react";
import customFetch from "./customFetch";

const ItemListContainer = ({greeting}) =>{
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch (2000, data)
            .then (result => setDatos(result))
            .catch(error => console.log (error))
    }, []);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    };

    return (
        <>
            <h2 className="title">{greeting}</h2>
            <ItemList items = {data}/>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
};

export default ItemListContainer;