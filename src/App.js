/* eslint-disable import/extensions, no-shadow */
import React from "react";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

// Redux, rotas
import { store, persistor } from "./hooks";
import Routes from "./routes";
import history from "./services/history";

// Themes e styles
import "./assets/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          {/* Rotas */}
          <Routes />
          {/* Alertas */}
          <ToastContainer autoClose={5000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
