import React, { useContext } from "react";
import UserContext from "context/UserContext";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ path, component }) => {
  const { userData } = useContext(UserContext);

  

  console.log(userData);

  return (
    !userData.user ? (<Redirect to="/page/home" />) : (<Route path={path} component={component} />)
  );
};

export default  PrivateRoute;