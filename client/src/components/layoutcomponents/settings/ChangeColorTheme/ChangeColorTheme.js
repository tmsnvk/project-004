import React from "react";
import styled from "styled-components";
import { MessageText, MessageTitle } from "components/commoncomponents/general";
import ChangeTiles from "./ChangeTiles";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  margin: 5rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const ChangeColorTheme = () => {

  return (
    <ComponentContainer>
      <MessageTitle>
        Change page theme
      </MessageTitle>
      <MessageText>
        Change your page color theme. The active theme is highlighted.
      </MessageText>
      <ChangeTiles />
    </ComponentContainer>
  );
};

export default ChangeColorTheme;