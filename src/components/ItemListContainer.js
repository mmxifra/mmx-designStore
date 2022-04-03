import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) =>{

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    };

    return (
        <div className="Row">
            <h2 className="title">{greeting}</h2>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    );
};

export default ItemListContainer;