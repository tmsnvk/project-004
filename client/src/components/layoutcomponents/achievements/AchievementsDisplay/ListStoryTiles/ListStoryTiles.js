import React from "react";
import styled from "styled-components";
import StoryTile from "./StoryTile";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 5;
  display: flex;
  flex-direction: column;
  margin: 5rem auto 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
    margin: 5rem 0 0 0;
  }
`;

const StoryTilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  width: fit-content;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 35rem;
  }
`;

const ListStoryTiles = ({ displayStoryTiles, getStoryTile }) => {
  const renderStoryTiles = displayStoryTiles.map((element) => {
    if (element?.id === undefined) return null;

    return (
      <StoryTilesWrapper key={element?.id}>
        {element.storyOne.title !== undefined ? <StoryTile dataArc={element?.storyOne.arc} dataCode={element?.storyOne.code} isAvailable={element?.storyOne.isAvailable} storyTitle={element?.storyOne.title} onClick={getStoryTile} /> : null}
        {element.storyTwo.title !== undefined ? <StoryTile dataArc={element?.storyTwo.arc} dataCode={element?.storyTwo.code} isAvailable={element?.storyTwo.isAvailable} storyTitle={element?.storyTwo.title} onClick={getStoryTile} /> : null}
        {element.storyThree.title !== undefined ? <StoryTile dataArc={element?.storyThree.arc} dataCode={element?.storyThree.code} isAvailable={element?.storyThree.isAvailable} storyTitle={element?.storyThree.title} onClick={getStoryTile} /> : null}
      </StoryTilesWrapper>
    );
  });

  return (
    <ComponentContainer>
    {renderStoryTiles}
    </ComponentContainer>
  );
};

export default ListStoryTiles;