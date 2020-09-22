import React from "react";
import styled from "styled-components";
import { NavigationLink } from "components/commoncomponents/navigation-related";
import { Message } from "components/commoncomponents/userauth-related";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const IntroAccount = () => {
  return (
    <ContainerComponent>
      <Message message={<>Visit your account & achievements <NavigationLink to="/page/profile">here</NavigationLink>.</>} />
    </ContainerComponent>
  );
};

export default IntroAccount;