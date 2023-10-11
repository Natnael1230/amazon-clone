// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");

require("dotenv").config();
const stripe = require("stripe")(process.env.SECRET_KEY);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	//console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: parseInt(total), // subunits of the currency
			currency: "usd",
		});

		// OK - Created
		response.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error.message);
		response.status(500).send("something went wrong!");
	}
});

app.listen(5000, (err) => {
	if (!err) {
		console.log("server running on http://localhost:5000");
	}
});

// exports.api = functions.https.onRequest(app);
