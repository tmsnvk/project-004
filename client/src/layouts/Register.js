import React from "react";
import { LayoutContainer } from "components/commoncomponents/general";
import { FormRegister, PageTopText } from "components/layoutcomponents/register";

const Register = () => {
  return (
    <LayoutContainer>
      <PageTopText />
      <FormRegister />
    </LayoutContainer>
  );
};

export default Register;