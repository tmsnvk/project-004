import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AdventureButton } from "components/layoutcomponents/adventures/storypage";

const ComponentContainer = styled(AdventureButton)`
  width: 20rem;
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: bold;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: ${({ active, theme: { backgroundColor } }) => active === "true" ? backgroundColor.secondary : backgroundColor.warning};
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
    /* margin: 2.5rem 2.5rem 0 0; */

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 25rem;
    /* flex-grow: 1; */
    /* min-width: 20%; */
    font-size: ${props => props.theme.fontSize.large};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 30rem;
  }
`;

const AdventureTitle = ({ storyTitle, linkId, active }) => {
  return (
  <ComponentContainer as={Link} to={`/page/adventures/${linkId}`} active={active}>
    {storyTitle}
  </ComponentContainer>
  );
};

export default AdventureTitle;