import Item from './Item';

const ItemList = ({items}) => {
    return (
        <div className='row body'>
        {
            items.length > 0
            ? items.map (item => <Item key = {item.id} id = {item.id} img = {item.img} title = {item.title} price = {item.price} stock = {item.stock} />)
            : <p> Cargando productos ...</p>
        }
        </div>
    );
};

export default ItemList;