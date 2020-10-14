import React from "react";
import { LayoutContainer } from "components/commoncomponents/general";
import { PageTopText, RegisterForm } from "components/layoutcomponents/register";

const Register = () => {
  return (
    <LayoutContainer>
      <PageTopText />
      <RegisterForm />
    </LayoutContainer>
  );
};

export default Register;