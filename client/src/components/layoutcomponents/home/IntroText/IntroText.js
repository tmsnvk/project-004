import React from "react";
import styled from "styled-components";
import { MessageText, MessageTitle } from "components/commoncomponents/general";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const IntroText = () => {
  return (
    <ContainerComponent>
      <MessageTitle>
        Welcome, adventurer!
      </MessageTitle>
      <MessageText>
        Evrallas is a classic choose-your-adventure type of game in which the decisions you make directly affect the story's progress and final outcome.
      </MessageText>
    </ContainerComponent>
  );
};

export default IntroText;