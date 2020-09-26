import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ path, component }) => {
  return (
    localStorage.getItem("auth-token") !== "" ? (<Route path={path} component={component} />) : (<Redirect to="/page/home" />)
  );
};

export default PrivateRoute;