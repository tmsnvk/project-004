import React from "react";
import { NavigationLink } from "components/commoncomponents/navigation-related";

const componentData = () => {
  return (
    <>Sign in below if you are already registered. If not - <NavigationLink to="/page/register">click here</NavigationLink> to register an account!</>
  );
};

export default componentData;