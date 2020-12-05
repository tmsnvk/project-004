import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TileButton } from "components/shared/tile-related";
import { IconLight } from "components/shared/styled-icons";
import { iconList } from "utilities";

const ComponentContainer = styled(TileButton)`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  align-items: center;

  &:hover {
    background-color: ${({ available }) => available === "true" ? ({ theme }) => theme.main : ({ theme }) => theme.warning};
    color: ${({ theme }) => theme.secondaryDark};
  }

  &:hover ${IconLight} {
    color: ${({ theme }) => theme.secondaryDark};
  }
`;

const StoryTile = ({ storyTitle, linkId, isAvailable }) => {
  return (
  <ComponentContainer as={Link} to={`/page/adventures/${linkId}`} available={isAvailable}>
    <IconLight icon={iconList.sign}></IconLight>
    {storyTitle}
  </ComponentContainer>
  );
};

export default StoryTile;