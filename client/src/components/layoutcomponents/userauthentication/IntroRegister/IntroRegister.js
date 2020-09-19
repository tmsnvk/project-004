import React from "react";
import styled from "styled-components";
import { NavigationLink } from "components/commoncomponents";
import { Message } from "components/commoncomponents/userauth-related";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const IntroRegister = () => {
  return (
    <ContainerComponent>
      <Message message={<>Sign in below if you are already registered. If not - <NavigationLink to="/userregister">click here</NavigationLink> to register an account!</>} />
    </ContainerComponent>
  );
};

export default IntroRegister;