import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  font-size: ${props => props.theme.fontSize.xLarge};
  font-weight: bold;
  padding: 0 0 2rem 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
  
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.xxLarge};
  }
`;

const AdventureArc = ({ arcTitle }) => {
  return (
  <ComponentContainer>
    {arcTitle}
  </ComponentContainer>
  );
};

export default AdventureArc;