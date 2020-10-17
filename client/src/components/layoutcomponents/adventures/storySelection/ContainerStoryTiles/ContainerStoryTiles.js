import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TileButton } from "components/commoncomponents/adventure-related";
import { IconYellow } from "components/commoncomponents/styled-icons";
import { adventuresMetaData } from "utilities";
import DisplayedStories from "./DisplayedStories";

const ContainerComponent = styled.div`
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

const ArcButton = styled(TileButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ highlight, theme: { backgroundColor } }) => highlight ? backgroundColor.mainDark : backgroundColor.secondary};
  background-color: ${({ highlight, theme: { backgroundColor } }) => highlight ? backgroundColor.secondary : backgroundColor.mainDark};

  ${IconYellow} {
    color: ${({ highlight, theme: { backgroundColor } }) => highlight ? backgroundColor.mainDark : backgroundColor.secondary};
  }

  &:hover {
    background-color: ${props => props.theme.backgroundColor.secondary};
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  &:hover ${IconYellow} {
    color: ${props => props.theme.fontColor.secondaryDark};
  }
`;

const ContainerStoryTiles = () => {
  const [displayArcTitles, setDisplayArcTitles] = useState(1);
  const [storyTitlesData, setStoryTitlesData] = useState([undefined]);

  useEffect(() => {
    setStoryTitlesData([adventuresMetaData[displayArcTitles]]);

  }, [displayArcTitles]);

  const handleArcChoice = (index) => setDisplayArcTitles(index);

  const renderArcTitles = adventuresMetaData.map(({ id, arcIcon, arcTitle }, index) => {
    const isActive = index === displayArcTitles ? true : false;

    return (
      <ArcButton key={id} highlight={isActive} data-id={id} onClick={() => handleArcChoice(index)}>
        <IconYellow icon={arcIcon}></IconYellow>{arcTitle}
      </ArcButton>
    );
  });

  return (
    <>
      <ContainerComponent>
        {renderArcTitles}
      </ContainerComponent>
      <DisplayedStories storyTitlesData={storyTitlesData} />
    </>
  );
};

export default ContainerStoryTiles;