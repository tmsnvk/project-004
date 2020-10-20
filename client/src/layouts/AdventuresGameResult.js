import React from "react";
// import { useHistory } from "react-router-dom";
import styled from "styled-components";

const LayoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5rem;  
  font-size: ${props => props.theme.fontSize.large};
  text-align: center;
  width: 90%;
  margin: 10rem auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {

  }
`;

const GameResults = () => {
  return (
    <LayoutContainer>
      <div>DED</div>
    </LayoutContainer>
  );
};

export default GameResults;