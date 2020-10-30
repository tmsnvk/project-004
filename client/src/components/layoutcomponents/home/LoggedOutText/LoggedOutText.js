import React from "react";
import styled from "styled-components";
import { MessageText } from "components/commoncomponents/general";
import { NavigationLink } from "components/commoncomponents/navigation-related";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const LoggedOutText = () => {
  return (
    <ComponentContainer>
      <MessageText>
        Sign in below if you already have an account registered at Evrallas. If not - <NavigationLink to="/page/register">click here</NavigationLink> to register one!
      </MessageText>
    </ComponentContainer>
  );
};

export default LoggedOutText;