import React from "react";
import ReactDOM from "react-dom/client";
import reducer, { initialState } from "./components/State/reducer";
import { StateProvider } from "./components/State/StateProvider";

import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StateProvider initialState={initialState} reducer={reducer}>
		<App />
	</StateProvider>
);
