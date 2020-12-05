import React from "react";
import { Helmet } from "react-helmet";
import { LayoutContainer } from "components/shared/general";
import { PageInformation, RegisterForm } from "components/page/register";

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