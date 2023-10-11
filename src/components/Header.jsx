import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import amazonLogo from "./images/amazonLogo.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link, Outlet } from "react-router-dom";
import HeaderBottom from "./HeaderBottom";
import Footer from "./Footer";
import { useStateValue } from "./State/StateProvider";
import { auth } from "./firebase";

function Header() {	
	let [{ basket,user }, dispatch] = useStateValue();
	function handleAuthentication(){
		if(user){
			auth.signOut();
		}
	}
	return (
		<>
			<div className="header">
				<Link to="/">
					<img className="header__logo" src={amazonLogo} alt="amazon logo" />
				</Link>
				{console.log(user)}

				<div className="header__search">
					<input className="header__searchInput" type="text" placeholder="Search Amazon"/>
					<SearchIcon className="header__searchIcon" />
				</div>
				<div className="header__nav">
					<Link to="login" className="navLink">
						<div onClick={handleAuthentication}
						className="header__option">
							<span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
							<span className="header__optionLineTwo"> {user? 'Sign Out':'Sign In'}</span>
						</div>
					</Link>

					<div className="header__option">
						<span className="header__optionLineOne">Returns &</span>
						<span className="header__optionLineTwo">Orders</span>
					</div>
					<div className="header__optionBasket">
						<Link to="checkout">
							<ShoppingBasketIcon />
						</Link>

						<span className="header__optionLineTwo header__basketCount">
							{basket.length}
						</span>
					</div>
				</div>
			</div>
			<HeaderBottom />
			<Outlet />
			<Footer />
		</>
	);
}

export default Header;