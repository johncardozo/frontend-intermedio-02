// React
import React from "react";
import ReactDOM from "react-dom/client";

// Redux Toolkit
import { Provider } from "react-redux";
import { store } from "./store";

// Estilos
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
