

const Item = ({id, img, title, price, stock}) => {
    return (
        <div className="col-lg-3 col-md-6 col-xs-12 itemContainer">
            <div className="cardData" key={id}>
				<img src= {img} className= "itemImg" />
				<h2 className= "itemTitle">{title}</h2>
				<p className= "itemPrice">$ {price}</p>
				<button className= "descriptionBtn">+ Detalles</button>
                <p className= "itemStock">{stock} kilos en stock</p>
			</div>
        </div>
    );
};

export default Item;