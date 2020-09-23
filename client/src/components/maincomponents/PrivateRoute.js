import React from "react";
import { Redirect, Route } from "react-router-dom";

// const PrivateRoute = ({component: Component, ...rest}) => {
//   return (
    // <Route {...rest} render={props => {
    //   if (localStorage.getItem("isValid")) {
    //     return <Component {...props} />

    //   } else {
    //     return <Redirect to={{
    //       pathname: "/page/home",
    //       state: {
    //         from: props.location
    //       }
    //     }} />
    //   }
    // }}
    // />
//   )
// }
const PrivateRoute = ({ path, component }) => {
  return (
    localStorage.getItem("auth-token") !== "" ? (<Route path={path} component={component} />) : (<Redirect to="/page/home" />)
  );
};

export default  PrivateRoute;