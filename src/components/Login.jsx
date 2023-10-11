import React, { useState } from "react";
import "./Login.css";
import BalckAmazonLogo from "./images/Black-Amazon-Logo.png";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate=useNavigate();

	function signIn(e) {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				if(userCredential) navigate("/");
				const user = userCredential.user;
			})
			.catch((error) => {
				console.log(error.code);
				console.log(error.message);  
			});
	}

	function register(e) {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential);
				if (userCredential) navigate("/");
			})
			.catch((error) => {
				console.log(error.code); 
				console.log(error.message);  
			});
	}

	return (
		<div className="login">
			<Link to="/">
				<img className="login__logo" src={BalckAmazonLogo} alt="amazon logo" />
			</Link>

			<div className="login__container">
				<h1>Sign-in</h1>

				<form action="">
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						className="login__signInButton"
						type="submit"
						onClick={signIn}
					>
						Sign In
					</button>
				</form>

				<p>
					By continuing, you agree to Amazon's Conditions of Use and Privacy
					Notice.
				</p>

				<button 
				onClick={register} 
				className="login__registerButton">
					Create Your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
