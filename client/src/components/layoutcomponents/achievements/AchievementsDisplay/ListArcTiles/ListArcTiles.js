import React from "react";
import styled from "styled-components";
import { ArcTile } from "components/commoncomponents/tile-related";
import { IconYellow } from "components/commoncomponents/styled-icons";
import { adventuresMetaData } from "utilities";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 5rem auto 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-start: 1;
    grid-column-end: 3;
    margin: 5rem 0 0 0;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const ListArcTiles = ({ displayArcTiles, getArcTile }) => {
  const renderArcTiles = adventuresMetaData.map(({ id, arcIcon, arcTitle }, index) => {
    const isHighlighted = index === displayArcTiles ? true : false;

    return (
      <ArcTile key={id} isHighlighted={isHighlighted} data-id={id} onClick={() => getArcTile(index)}>
        <IconYellow icon={arcIcon}></IconYellow>{arcTitle}
      </ArcTile>
    );
  });

  return (
    <ComponentContainer>
      {renderArcTiles}
    </ComponentContainer>
  );
};

export default ListArcTiles;