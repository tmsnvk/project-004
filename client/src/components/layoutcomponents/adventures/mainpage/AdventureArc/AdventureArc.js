import React from "react";
import styled from "styled-components";

const AdventureArc = styled.button`
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: bold;
  padding: 0 0 2rem 0;
  margin: 2.5rem 0 0 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.large};
    margin: 5rem 0 0 0;
  }
`;

export default AdventureArc;