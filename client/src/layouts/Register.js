import React from "react";
import { ContainerLayoutWithMQ } from "components/commoncomponents/general";
import { RegisterForm, TopText } from "components/layoutcomponents/register";

const Register = () => {
  return (
    <ContainerLayoutWithMQ>
      <TopText />
      <RegisterForm />
    </ContainerLayoutWithMQ>
  );
};

export default Register;