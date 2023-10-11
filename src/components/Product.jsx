import React from "react";
import "./Product.css";
import { useStateValue } from "./State/StateProvider";

function Product({ id, rating, image, title, price }) {

	let [{basket}, dispatch] = useStateValue();
	

	function addToBasket(){
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			}
		})
	}

	return (
		<div className="product">
			<div className="product__info">
				<h2>{title}</h2>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map(() => (
							<p>🌟</p>
						))}
				</div>
				<img className="" src={image} alt="" />
			</div>
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
