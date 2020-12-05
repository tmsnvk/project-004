import React from "react";
import styled from "styled-components";
import { HorizontalLine } from "components/shared/general";
import { TileButton } from "components/shared/tile-related";
import Title from "./Title";
import Message from "./Message";

const ComponentContainer = styled.section`
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
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`;

const PageTopText = ({ isGameSaved, startNewStory, startSavedStory }) => {
  return (
    <ComponentContainer>
      <Title />
      <HorizontalLine width="50%" margin="1.25rem auto 2.5rem 0" />
      <Message />
      <InitiateAdventureButton onClick={startNewStory}>Start a new adventure</InitiateAdventureButton>
      {isGameSaved ? <InitiateAdventureButton onClick={startSavedStory}>Continue your saved adventure</InitiateAdventureButton> : null}
    </ComponentContainer>
  );
};

export default PageTopText;