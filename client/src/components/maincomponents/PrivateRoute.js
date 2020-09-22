import React, { useContext } from "react";
import UserContext from "context/UserContext";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ path, component }) => {
  const { userData } = useContext(UserContext);

  return (
    userData.token !== undefined ? (<Route path={path} component={component} />) : (<Redirect to="/page/home" />)
  );
};

export default  PrivateRoute;