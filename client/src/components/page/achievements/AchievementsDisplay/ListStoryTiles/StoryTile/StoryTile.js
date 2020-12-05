import React from "react";
import styled from "styled-components";
import { TileButton } from "components/shared/tile-related";
import { IconLight } from "components/shared/styled-icons";
import { iconList } from "utilities";

const ComponentContainer = styled(TileButton)`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  &:hover {
    background-color: ${({ isAvailable }) => isAvailable === "true" ? ({ theme }) => theme.main : ({ theme }) => theme.warning};
    color: ${({ theme }) => theme.secondaryDark};
  }

  &:hover ${IconLight} {
    color: ${({ theme }) => theme.secondaryDark};
  }
`;

const StoryTile = ({ storyTitle, dataArc, dataCode, onClick, isAvailable }) => {
  return (
  <ComponentContainer data-arc={dataArc} data-code={dataCode} onClick={onClick} isAvailable={isAvailable}>
    <IconLight icon={iconList.trophy}></IconLight>
    {storyTitle}
  </ComponentContainer>
  );
};

export default StoryTile;