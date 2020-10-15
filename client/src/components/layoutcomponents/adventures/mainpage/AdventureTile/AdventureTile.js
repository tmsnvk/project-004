import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TileButton } from "components/commoncomponents/adventure-related";
import { IconYellow } from "components/commoncomponents/styled-icons";
import iconList from "utilities/iconList";

const ContainerComponent = styled(TileButton)`
  width: 30rem;
  display: flex;
  flex-direction: row;
  font-weight: bold;
  align-items: center;

  &:hover {
    background-color: ${({ active, theme: { backgroundColor } }) => active === "true" ? backgroundColor.secondary : backgroundColor.warning};
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  &:hover ${IconYellow} {
    color: ${props => props.theme.fontColor.secondaryDark};
  }
`;

const AdventureTile = ({ storyTitle, linkId, active }) => {
  return (
  <ContainerComponent as={Link} to={`/page/adventures/${linkId}`} active={active}>
    <IconYellow icon={iconList.sign}></IconYellow>{storyTitle}
  </ContainerComponent>
  );
};

export default AdventureTile;