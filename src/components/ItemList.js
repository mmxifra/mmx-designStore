import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row">
        {
            items.map (item =>
                <Item
                key = {item.id}
                img = {item.img}
                title = {item.title} 
                price = {item.price}
                stock = {item.stock} /> 
            )
        }
        </div>
    );
};

export default ItemList;