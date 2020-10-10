import React from "react";
import ReactDOM from "react-dom";
import { UserContextProvider } from "context/UserContext";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/maincomponents";

ReactDOM.render(
  <BrowserRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);