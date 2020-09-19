import React from "react";
import styled from "styled-components";
import { NavigationLink } from "components/commoncomponents";
import { Message } from "components/commoncomponents/authenticationrelated";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const IntroAccount = () => {
  return (
    <ContainerComponent>
      <Message message={<>Visit your account & achievements <NavigationLink to="/useraccount">here</NavigationLink>.</>} />
    </ContainerComponent>
  );
};

export default IntroAccount;