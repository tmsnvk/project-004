import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "context/UserContext";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/maincomponents";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);