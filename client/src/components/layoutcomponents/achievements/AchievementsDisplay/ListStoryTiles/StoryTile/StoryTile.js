import React from "react";
import styled from "styled-components";
import { TileButton } from "components/commoncomponents/adventure-related";
import { IconYellow } from "components/commoncomponents/styled-icons";
import { iconList } from "utilities";

const ContainerComponent = styled(TileButton)`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  align-items: center;

  &:hover {
    background-color: ${({ available, theme: { backgroundColor } }) => available === "true" ? backgroundColor.secondary : backgroundColor.warning};
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  &:hover ${IconYellow} {
    color: ${props => props.theme.fontColor.secondaryDark};
  }
`;

const StoryTile = ({ storyTitle, dataArc, dataCode, onClick, available }) => {
  return (
  <ContainerComponent data-arc={dataArc} data-code={dataCode} onClick={onClick} available={available}>
    <IconYellow icon={iconList.trophy}></IconYellow>
    {storyTitle}
  </ContainerComponent>
  );
};

export default StoryTile;