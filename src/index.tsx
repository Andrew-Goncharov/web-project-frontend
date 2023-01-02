import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import {
  BrowserRouter,
  // createBrowserRouter
} from "react-router-dom";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { ModalProvider } from "./components";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ModalProvider>
      <BrowserRouter>
        <SnackbarProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </SnackbarProvider>
      </BrowserRouter>
    </ModalProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
