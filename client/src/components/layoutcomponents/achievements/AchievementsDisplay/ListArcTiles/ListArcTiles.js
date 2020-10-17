import React from "react";
import styled from "styled-components";
import { IconYellow } from "components/commoncomponents/styled-icons";
import { adventuresMetaData } from "utilities";
import { TileButton } from "components/commoncomponents/adventure-related";

const ContainerArcTiles = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  flex-direction: column;
  margin: 5rem auto 0;
  width: fit-content;

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

const ArcTileButton = styled(TileButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ highlight, theme: { backgroundColor } }) => highlight ? backgroundColor.secondary : backgroundColor.mainDark};
  color: ${({ highlight, theme: { backgroundColor } }) => highlight ? backgroundColor.mainDark : backgroundColor.secondary};

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

const ListArcTiles = ({ displayArcTiles, chooseArcTile }) => {
  const renderArcTitles = adventuresMetaData.map(({ id, arcIcon, arcTitle }, index) => {
    const isActive = index === displayArcTiles ? true : false;

    return (
      <ArcTileButton key={id} highlight={isActive} data-id={id} onClick={() => chooseArcTile(index)}>
        <IconYellow icon={arcIcon}></IconYellow>{arcTitle}
      </ArcTileButton>
    );
  });

  return (
    <ContainerArcTiles>
      {renderArcTitles}
    </ContainerArcTiles>
  );
};

export default ListArcTiles;