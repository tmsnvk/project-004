import React from "react";
import styled from "styled-components";
import { NavigationLink } from "components/commoncomponents/navigation-related";
import { MessageText } from "components/commoncomponents/general";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const RegisterText = () => {
  return (
    <ContainerComponent>
      <MessageText>
        Sign in below if you already have an account registered. If not - <NavigationLink to="/page/register">click here</NavigationLink> to register one!
      </MessageText>
    </ContainerComponent>
  );
};

export default RegisterText;