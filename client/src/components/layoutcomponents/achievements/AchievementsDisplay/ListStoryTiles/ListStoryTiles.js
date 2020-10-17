import React from "react";
import styled from "styled-components";
import StoryTile from "./StoryTile";

const ContainerStoryTiles = styled.div`
  display: grid;
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
    align-items: center;
    margin: 5rem 0 0 0;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    align-items: flex-start;
  }
`;

const ContainerStoryTile = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  width: fit-content;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 35rem;
  }
`;

const ListStoryTiles = ({ displayStoryTiles, chooseStoryTile }) => {
  const renderDisplayedStoryTiles = displayStoryTiles.map((element) => {
    if (element?.id === undefined) return null;

    return (
      <ContainerStoryTile key={element?.id}>
        {element.storyOne.title !== undefined ? <StoryTile dataArc={element?.storyOne.arc} dataCode={element?.storyOne.code} available={element?.storyOne.available} storyTitle={element?.storyOne.title} onClick={chooseStoryTile} /> : null}
        {element.storyTwo.title !== undefined ? <StoryTile dataArc={element?.storyTwo.arc} dataCode={element?.storyTwo.code} available={element?.storyTwo.available} storyTitle={element?.storyTwo.title} onClick={chooseStoryTile} /> : null}
        {element.storyThree.title !== undefined ? <StoryTile dataArc={element?.storyThree.arc} dataCode={element?.storyThree.code} available={element?.storyThree.available} storyTitle={element?.storyThree.title} onClick={chooseStoryTile} /> : null}
      </ContainerStoryTile>
    );
  });

  return (
    <ContainerStoryTiles>
    {renderDisplayedStoryTiles}
    </ContainerStoryTiles>
  );
};

export default ListStoryTiles;