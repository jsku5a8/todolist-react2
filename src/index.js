import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react/ApiProvider.js";
import { Provider } from "react-redux";
import store from "./api/store/store.js";
// import { api } from "./api/api.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <ApiProvider api={api}> */}
				<App />
			{/* </ApiProvider> */}
		</Provider>
	</React.StrictMode>
);
