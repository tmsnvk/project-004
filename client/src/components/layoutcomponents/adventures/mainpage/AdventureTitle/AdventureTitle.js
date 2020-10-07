import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AdventureButton } from "components/layoutcomponents/adventures/storypage";
import { IconYellow } from "components/commoncomponents/styled-icons";
import iconList from "utilities/iconList";

const ComponentContainer = styled(AdventureButton)`
  width: 20rem;
  padding: 2rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: row;
  font-size: ${props => props.theme.fontSize.small};
  font-weight: bold;
  align-items: center;

  &:hover {
    background-color: ${({ active, theme: { backgroundColor } }) => active === "true" ? backgroundColor.secondary : backgroundColor.warning};
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  &:hover ${IconYellow} {
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
    width: 25rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 30rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 25rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 30rem;
  }
`;

const AdventureTitle = ({ storyTitle, linkId, active }) => {
  return (
  <ComponentContainer as={Link} to={`/page/adventures/${linkId}`} active={active}>
    <IconYellow icon={iconList.sign}></IconYellow>{storyTitle}
  </ComponentContainer>
  );
};

export default AdventureTitle;