import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TileButton } from "components/commoncomponents/adventure-related";
import { IconYellow } from "components/commoncomponents/styled-icons";
import { adventuresMetaData } from "utilities";
import DisplayedStories from "./DisplayedStories";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  margin: 5rem auto 0;
  width: fit-content;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-start: 1;
    grid-column-end: 4;
    margin: 5rem 0 0 0;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const Arc = styled(TileButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ isHighlighted, theme: { backgroundColor } }) => isHighlighted ? backgroundColor.mainDark : backgroundColor.secondary};
  background-color: ${({ isHighlighted, theme: { backgroundColor } }) => isHighlighted ? backgroundColor.secondary : backgroundColor.mainDark};

  ${IconYellow} {
    color: ${({ isHighlighted, theme: { backgroundColor } }) => isHighlighted ? backgroundColor.mainDark : backgroundColor.secondary};
  }

  &:hover {
    background-color: ${props => props.theme.backgroundColor.secondary};
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  &:hover ${IconYellow} {
    color: ${props => props.theme.fontColor.secondaryDark};
  }
`;

const StoryTilesContainer = () => {
  const [displayArcTitles, setDisplayArcTitles] = useState(1);
  const [storyTitlesData, setStoryTitlesData] = useState([undefined]);

  useEffect(() => {
    setStoryTitlesData([adventuresMetaData[displayArcTitles]]);

  }, [displayArcTitles]);

  const handleArcChoice = (index) => setDisplayArcTitles(index);

  const renderArcTitles = adventuresMetaData.map(({ id, arcIcon, arcTitle }, index) => {
    const isHighlighted = index === displayArcTitles ? true : false;

    return (
      <Arc key={id} isHighlighted={isHighlighted} data-id={id} onClick={() => handleArcChoice(index)}>
        <IconYellow icon={arcIcon}></IconYellow>{arcTitle}
      </Arc>
    );
  });

  return (
    <>
      <ComponentContainer>
        {renderArcTitles}
      </ComponentContainer>
      <DisplayedStories storyTitlesData={storyTitlesData} />
    </>
  );
};

export default StoryTilesContainer;