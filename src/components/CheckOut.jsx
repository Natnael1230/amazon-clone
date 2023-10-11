import React from "react";
import "./CheckOut.css";
import Subtotal from "./Subtotal";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./State/StateProvider";

function CheckOut() {
	let [{ basket }, dispatch] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
					alt=""
				/>
				<h3>Hello</h3>
				<h2 className="checkout__title">Your Shopping Basket</h2>

				{basket.map((item, index) => {
					let quantityCounter = 1;
					basket.map((secondItem, secondIndex) => {
						if (
							index !== secondIndex &&
							item.title == secondItem.title &&
							secondIndex > index &&
							secondIndex == basket.length - 1
						) {
							quantityCounter++;
							console.log("quantity is ", quantityCounter);
						}
					});

					return (
						<CheckOutProduct
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
							quantity={quantityCounter}
						/>
					);
				})}
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default CheckOut;
