import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import { Link } from "react-router-dom";

let counter = 0;
function Home() {
	let images = [img1, img2, img3, img4, img5];

	let [value, setValue] = useState([images[0]]);

	function funForward() {
		if (counter >= 4) counter = -1;
		counter++;
		setValue(images[counter]);
	}

	function funBackward() {
		if (counter <= 0) counter = 5;
		counter--;
		setValue(images[counter]);
	}

	return (
		<>
			<div className="home" id="top">
				<div className="home__container">
					<img className="home__image" src={value} alt="Home Image" />
					<div className="buttonWrapper">
						<button onClick={funBackward}>
							<ArrowBackIosSharpIcon fontSize="large" />
						</button>
						<button onClick={funForward}>
							<ArrowForwardIosSharpIcon fontSize="large" />
						</button>
					</div>
					<div className="home__row">
						<Product
							id="12321311"
							title="Gaming accessories"
							price={1100.0}
							rating={5}
							image="https://m.media-amazon.com/images/I/31JaiPXYI8L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
						/>

						<Product
							id="12321312"
							title="Toys Under $30"
							price={114.0}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg"
						/>

						<Product
							id="12321313"
							title="Electronics"
							price={800.0}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
						/>
					</div>
					<div className="home__row">
						<Product
							id="12321314"
							title="Home & Kitchen Under $30"
							price={2354.0}
							rating={4}
							image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_379x304_1X_en_US._SY304_CB609304299_.jpg"
						/>

						<Product
							id="12321315"
							title="Health & Personal Care"
							price={734.0}
							rating={4}
							image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
						/>

						<Product
							id="12321316"
							title="Shop deals in Fashion"
							price={210.0}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
						/>
					</div>
					<div className="home__row">
						<Product
							id="12321317"
							title="Beauty picks"
							price={410.0}
							rating={4}
							image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
						/>

						<Product
							id="12321317"
							title="New arrivals in Toys"
							price={70.0}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"
						/>

						<Product
							id="12321317"
							title="Shop Laptops & Tablets"
							price={838.0}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
						/>
					</div>

					<div className="home__row">
						<Product
							id="12321317"
							title="Shop activity trackers and smartwatches"
							price={600.0}
							rating={4}
							image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
						/>

						<Product
							id="12321317"
							title="Home refresh ideas"
							price={112.0}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/SpringEvent2023/XCM_CUTTLE_1559454_3018199_379x304_1X_en_US._SY304_CB592739737_.jpg"
						/>

						<Product
							id="12321317"
							title="Create with strip lights"
							price={230.0}
							rating={4}
							image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
						/>
					</div>

					<div className="home__row">
						<Product
							id="12321317"
							title="Shop activity trackers and smartwatches"
							price={10.0}
							rating={5}
							image="https://m.media-amazon.com/images/I/51ivLToN0YL._AC_SY200_.jpg"
						/>

						<Product
							id="12321317"
							title="Home refresh ideas"
							price={12.0}
							rating={5}
							image="https://m.media-amazon.com/images/I/71zGqz2eCqL._AC_SY200_.jpg"
						/>

						<Product
							id="12321317"
							title="Create with strip lights"
							price={20}
							rating={3}
							image="https://m.media-amazon.com/images/I/613IJTfd4JL._AC_SY200_.jpg"
						/>

						<Product
							id="12321317"
							title="Home refresh ideas"
							price={11.0}
							rating={5}
							image="https://m.media-amazon.com/images/I/61QkPJlxnwL._AC_SY200_.jpg"
						/>

						<Product
							id="12321317"
							title="Create with strip lights"
							price={9.0}
							rating={5}
							image="https://m.media-amazon.com/images/I/617dyYIEL7L._AC_SY200_.jpg"
						/>
					</div>
					<div className="home__row">
						<Product
							id="12321317"
							title="Create with strip lights"
							price={2400.0}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
						/>
					</div>
				</div>
			</div>
			{/* <div class="top">
				<Link to="/">
					<p>Back to top</p>
				</Link>
			</div> */}
		</>
	);
}

export default Home;
