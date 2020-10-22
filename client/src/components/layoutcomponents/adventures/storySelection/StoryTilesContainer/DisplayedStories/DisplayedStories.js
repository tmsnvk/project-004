import React from "react";
import styled from "styled-components";
import { StoryTile } from "components/layoutcomponents/adventures/storySelection";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  flex-direction: column;
  margin: 5rem auto 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
    align-items: flex-end;
    margin: 5rem 0 0 0;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-start: 3;
    grid-column-end: 5;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    align-items: flex-start;
    grid-column-start: 3;
    grid-column-end: 5;
  }
`;

const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 35rem;
  }
`;

const DisplayedStories = ({ storyTitlesData }) => {
  const renderDisplayedStoryTiles = storyTitlesData.map((element) => {
    if (element?.id === undefined) return null;

    return (
      <ElementWrapper key={element?.id}>
        {element.storyOne.title !== undefined ? <StoryTile storyTitle={element?.storyOne.title} linkId={element?.storyOne.link} available={element?.storyOne.isAvailable} /> : null}
        {element.storyTwo.title !== undefined ? <StoryTile storyTitle={element?.storyTwo.title} linkId={element?.storyTwo.link} available={element?.storyTwo.isAvailable} /> : null}
        {element.storyThree.title !== undefined ? <StoryTile storyTitle={element?.storyThree.title} linkId={element?.storyThree.link} available={element?.storyThree.isAvailable} /> : null}
      </ElementWrapper>
    );
  });

  return (
    <ComponentContainer>
      {renderDisplayedStoryTiles}
    </ComponentContainer>
  );
};

export default DisplayedStories;