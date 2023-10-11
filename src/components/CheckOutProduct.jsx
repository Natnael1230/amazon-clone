import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "./State/StateProvider";

let arr1 = [];
function CheckOutProduct({
	id,
	image,
	title,
	price,
	rating,
	quantity,
	hideButton,
}) {
	let [{ baket }, dispatch] = useStateValue();
	function removerFromBasket() {
		dispatch({
			type: "REMOVER_FROM_BASKET",
			id: id,
		});
	}

	return (
		<>
			<div className="checkoutProduct">
				<img className="checkoutProduct__image" src={image} alt="" />
				<div className="checkoutProduct__info">
					<p className="checkoutProduct__title">{title}</p>
					<p className="checkoutProduct__price">
						<small>$</small>
						<strong>{price}</strong>
					</p>
					<div className="checkoutProduct__rating">
						{Array(rating)
							.fill()
							.map((_, i) => (
								<p>🌟</p>
							))}
					</div>
					{/* <p>Quantity {quantity}</p> */}
					{!hideButton && (
						<button onClick={removerFromBasket}>Remove from Basket</button>
					)}
				</div>
			</div>
		</>
	);
}

export default CheckOutProduct;
