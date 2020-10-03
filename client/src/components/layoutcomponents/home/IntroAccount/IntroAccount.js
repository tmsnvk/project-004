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

const IntroMessage = styled(MessageText)`
  padding: 2.5rem 0 0 0;
`;

const IntroAccount = () => {
  return (
    <ContainerComponent>
      <IntroMessage>
        First timer? Try the <NavigationLink to="/page/tutorial">tutorial</NavigationLink> to get the feel of the game.
      </IntroMessage>
      <IntroMessage>
        Start a game <NavigationLink to="/page/adventures">here</NavigationLink> - that's why you are probably here after all.
      </IntroMessage>
      <IntroMessage>
        Visit your account & achievements <NavigationLink to="/page/profile">here</NavigationLink>.
      </IntroMessage>
    </ContainerComponent>
  );
};

export default IntroAccount;