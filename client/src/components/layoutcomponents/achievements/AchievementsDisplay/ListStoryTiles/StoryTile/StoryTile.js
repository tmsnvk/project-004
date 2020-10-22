import React from "react";
import styled from "styled-components";
import { TileButton } from "components/commoncomponents/adventure-related";
import { IconYellow } from "components/commoncomponents/styled-icons";
import { iconList } from "utilities";

const ComponentContainer = styled(TileButton)`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  align-items: center;

  &:hover {
    background-color: ${({ isAvailable, theme: { backgroundColor } }) => isAvailable === "true" ? backgroundColor.secondary : backgroundColor.warning};
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  &:hover ${IconYellow} {
    color: ${props => props.theme.fontColor.secondaryDark};
  }
`;

const StoryTile = ({ storyTitle, dataArc, dataCode, onClick, isAvailable }) => {
  return (
  <ComponentContainer data-arc={dataArc} data-code={dataCode} onClick={onClick} isAvailable={isAvailable}>
    <IconYellow icon={iconList.trophy}></IconYellow>
    {storyTitle}
  </ComponentContainer>
  );
};

export default StoryTile;