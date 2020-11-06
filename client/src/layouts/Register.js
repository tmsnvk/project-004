import React from "react";
import { Helmet } from "react-helmet";
import { LayoutContainer } from "components/commoncomponents/general";
import { PageInformation, RegisterForm } from "components/layoutcomponents/register";

const Register = () => {
  return (
    <LayoutContainer>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <PageInformation />
      <RegisterForm />
    </LayoutContainer>
  );
};

export default Register;