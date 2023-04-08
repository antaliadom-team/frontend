import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./services/app-context";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <AppContext>
                    <App />
                </AppContext>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);
