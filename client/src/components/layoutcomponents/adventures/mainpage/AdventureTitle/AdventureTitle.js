import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComponentContainer = styled(Link)`
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: inherit;
  margin: 1rem 0 0 5rem;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  color: ${props => props.theme.fontColor.main};
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${({ active, theme: { backgroundColor } }) => active === "true" ? backgroundColor.secondary : backgroundColor.warning};
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 35rem;
    padding: 1rem 2rem 1rem 5rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 25rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    width: 35rem;
    font-size: ${props => props.theme.fontSize.large};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 45rem;
  }
`;

const AdventureTitle = ({ storyTitle, linkId, active }) => {
  return (
  <ComponentContainer to={`/page/adventures/${linkId}`} active={active}>
    {storyTitle}
  </ComponentContainer>
  );
};

export default AdventureTitle;