import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksReducer from "./Reducer/booksSlice.js"
import themeReducer from "./Reducer/themeSlice.js"
import commentReducer from "./Reducer/commentsSlice.js"


 export const reducer = combineReducers({
  booksData: booksReducer,
  theme: themeReducer,
  comment: commentReducer
});

export const store = configureStore({ reducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
