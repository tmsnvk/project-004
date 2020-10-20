import React from "react";
import { LayoutContainer } from "components/commoncomponents/general";
import { PageInformation, RegisterForm } from "components/layoutcomponents/register";

const Register = () => {
  return (
    <LayoutContainer>
      <PageInformation />
      <RegisterForm />
    </LayoutContainer>
  );
};

export default Register;