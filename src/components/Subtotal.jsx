import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./State/StateProvider";

function Subtotal() {
	let [{ basket }, dispatch] = useStateValue();
	const navigate = useNavigate();
	function getBasketTotal(basket) {
		return (
		basket?.reduce((amount, item) => item.price + amount, 0))
	}

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal ({basket.length} items):
							<strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
