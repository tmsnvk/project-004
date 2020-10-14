import React from "react";
import styled from "styled-components";
import { MessageText } from "components/commoncomponents/general";
import { NavigationLink } from "components/commoncomponents/navigation-related";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const LoggedInText = () => {
  return (
    <ContainerComponent>
      <MessageText padding="5rem 0 0 0">
        First timer? Try the <NavigationLink to="/page/adventures/tutorial">tutorial</NavigationLink> to get the feel of the game.
      </MessageText>
      <MessageText padding="2rem 0 0 0">
        Start a game <NavigationLink to="/page/adventures">here</NavigationLink> - replay the same story multiple times to discover the different outcomes & earn milestone achievements.
      </MessageText>
      <MessageText padding="2rem 0 0 0">
        Visit your account <NavigationLink to="/page/achievements">here</NavigationLink> & see which achievements you have unlocked.
      </MessageText>
    </ContainerComponent>
  );
};

export default LoggedInText;