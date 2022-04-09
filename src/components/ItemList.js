import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row">
        {
            items.length > 0
            ? items.map (item =>
                <Item 
                key = {item.id}
                img = {item.img}
                title = {item.title} 
                price = {item.price}
                stock = {item.stock} /> 
            )
            : <p> Cargando productos ...</p>
        }
        </div>
    );
};

export default ItemList;