import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "context/UserContext";

const PrivateRoute = ({ path, component }) => {
  const { userData } = useContext(UserContext);

  return (
    userData.user !== undefined ? (<Route path={path} component={component} />) : (<Redirect to="/page/home" />)
  );
};

export default PrivateRoute;