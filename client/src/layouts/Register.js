import React from "react";
import { LayoutContainer } from "components/commoncomponents/general";
import { RegisterForm, TopText } from "components/layoutcomponents/register";

const Register = () => {
  return (
    <LayoutContainer>
      <TopText />
      <RegisterForm />
    </LayoutContainer>
  );
};

export default Register;