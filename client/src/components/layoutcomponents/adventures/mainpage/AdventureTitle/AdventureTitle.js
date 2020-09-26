import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComponentContainer = styled(Link)`
  font-size: ${props => props.theme.fontSize.small};
  font-weight: inherit;
  text-align: left;
  margin: 1rem 0 0 5rem;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  color: ${props => props.theme.fontColor.main};
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  padding: 1rem 2rem 1rem 5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.backgroundColor.secondary};
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
    font-size: ${props => props.theme.fontSize.medium};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 35rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 25rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    width: 35rem;
  }
`;

const AdventureTitle = ({ title, linkId }) => {
  return (
  <ComponentContainer to={`/page/adventures/${linkId}`}>
    {title}
  </ComponentContainer>
  );
};

export default AdventureTitle;