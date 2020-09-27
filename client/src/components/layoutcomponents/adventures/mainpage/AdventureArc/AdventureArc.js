import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  margin: 5rem 0 0 0;
  padding: 1rem 2rem 1rem 2rem;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  color: ${props => props.theme.fontColor.main};
  font-size: ${props => props.theme.fontSize.small};
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  border-radius: 0.5rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
    font-size: ${props => props.theme.fontSize.large};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 40rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 30rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    width: 40rem;
    font-size: ${props => props.theme.fontSize.xLarge};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 50rem;
    font-size: ${props => props.theme.fontSize.xLarge};
  }
`;

const AdventureArc = ({ title }) => {
  return (
  <ComponentContainer>
    {title}
  </ComponentContainer>
  );
};

export default AdventureArc;