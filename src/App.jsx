import React, { useEffect } from "react";
import "./App.css";
import Orders from "./components/Orders";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CheckOut from "./components/CheckOut";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { auth } from "./components/firebase";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStateValue } from "./components/State/StateProvider";

const promise = loadStripe(
	"pk_test_51Nz5hNG6CnHplDyCjgKB2X0EGBRqpmPxnIAgj3ArAir6BOX1J32wBs4Ajg2CKQnF3DCZ0Z7fca7g8FL1A7c4drj900r89tLnXg"
);

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((userauth) => {
			// console.log(userauth);
			if (userauth) {
				dispatch({
					type: "SET_USER",
					user: userauth,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Header />}>
						<Route path="/" element={<Home />} />
						<Route path="checkout" element={<CheckOut />} />
						<Route path="login" element={<Login />} />
						<Route
							path="/payment"
							element={
								<>
									<Elements stripe={promise}>
										<Payment />
									</Elements>
								</>
							}
						/>
						<Route path="orders" element={<Orders />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
