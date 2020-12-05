import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
import { UserContextProvider } from "context/UserContext";
import { App } from "./components/main";

ReactGA.initialize(process.env.REACT_APP_GA_KEY);

ReactDOM.render(
  <BrowserRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);