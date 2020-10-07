import React from "react";
import styled from "styled-components";

const ContainerLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5rem;  
  width: 90%;
  margin: 5rem auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 65%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 40%;
    margin: 10rem auto;
  }
`;

const About = () => {
  return (
    <ContainerLayout>
      ABOUT US
    </ContainerLayout>
  );
};

export default About;