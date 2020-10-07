import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: bold;
  padding: 0 0 2rem 0;
  margin: 2.5rem 0 0 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.large};
    margin: 5rem 0 0 0;
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