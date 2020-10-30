import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ArcTile } from "components/commoncomponents/tile-related";
import { IconYellow } from "components/commoncomponents/styled-icons";
import DisplayedStories from "./DisplayedStories";
import { adventuresMetaData } from "utilities";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  margin: 5rem auto 0;
  width: fit-content;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-start: 1;
    grid-column-end: 3;
    margin: 5rem 0 0 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const AdventureTilesContainer = () => {
  const [displayArcTitles, setDisplayArcTitles] = useState(1);
  const [storyTitlesData, setStoryTitlesData] = useState([undefined]);

  useEffect(() => {
    setStoryTitlesData([adventuresMetaData[displayArcTitles]]);

  }, [displayArcTitles]);

  const handleArcChoice = (index) => setDisplayArcTitles(index);

  const renderArcTiles = adventuresMetaData.map(({ id, arcIcon, arcTitle }, index) => {
    const isHighlighted = index === displayArcTitles ? true : false;

    return (
      <ArcTile key={id} isHighlighted={isHighlighted} data-id={id} onClick={() => handleArcChoice(index)}>
        <IconYellow icon={arcIcon}></IconYellow>{arcTitle}
      </ArcTile>
    );
  });

  return (
    <>
      <ComponentContainer>
        {renderArcTiles}
      </ComponentContainer>
      <DisplayedStories storyTitlesData={storyTitlesData} />
    </>
  );
};

export default AdventureTilesContainer;