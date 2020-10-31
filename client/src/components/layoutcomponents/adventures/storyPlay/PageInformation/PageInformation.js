import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Message from "./Message";
import { HorizontalLine } from "components/commoncomponents/general";
import { TileButton } from "components/commoncomponents/tile-related";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-start: 3;
    grid-column-end: 4;
  }
`;

const InitiateAdventureButton = styled(TileButton)`
  width: fit-content;
  margin: 5rem 0 0 0;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`;

const PageTopText = ({ isGameSaved, startNewStory, startSavedStory }) => {
  return (
    <ComponentContainer>
      <Title />
      <HorizontalLine width="50%" margin="1.25rem auto 2.5rem 0" />
      <Message />
      <InitiateAdventureButton onClick={startNewStory}>Start a new journey</InitiateAdventureButton>
      {isGameSaved ? <InitiateAdventureButton onClick={startSavedStory}>Continue your saved journey</InitiateAdventureButton> : null}
    </ComponentContainer>
  );
};

export default PageTopText;