import React from 'react';
import './HeaderBottom.css';
import MenuIcon from "@mui/icons-material/Menu";
function HeaderBottom() {
  return (
		<div className="mainDiv">
			<ul>
				<MenuIcon />
				<li className='firstLi'>All</li>
				<li>Today's Deals</li>
				<li>Customer Service</li>
				<li>Registry</li>
				<li>Gift Cards</li>
				<li>Sell</li>
			</ul>
		</div>
	);
}

export default HeaderBottom;
