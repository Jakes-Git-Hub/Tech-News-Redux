import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(React.StrictMode, null,
    React.createElement(Provider, { store: store },
        React.createElement(App, null))));
serviceWorker.unregister();
