import React from "react";
import styled from "styled-components";
import { TileButton } from "components/commoncomponents/adventure-related";
import { IconYellow } from "components/commoncomponents/styled-icons";
import { adventuresMetaData } from "utilities";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
  width: fit-content;
  margin: 5rem auto 0;
  display: flex;
  flex-direction: column;

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

const ArcTile = styled(TileButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ isHighlighted, theme: { backgroundColor } }) => isHighlighted ? backgroundColor.secondary : backgroundColor.mainDark};
  color: ${({ isHighlighted, theme: { fontColor } }) => isHighlighted ? fontColor.secondaryDark : fontColor.main};

  ${IconYellow} {
    color: ${({ isHighlighted, theme: { fontColor } }) => isHighlighted ? fontColor.secondaryDark : fontColor.main};
  }

  &:hover {
    background-color: ${props => props.theme.backgroundColor.secondary};
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  &:hover ${IconYellow} {
    color: ${props => props.theme.fontColor.secondaryDark};
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