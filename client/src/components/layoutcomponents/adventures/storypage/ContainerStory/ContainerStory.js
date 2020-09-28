import React from "react";
import styled from "styled-components";
import { StoryPanel } from "components/layoutcomponents/adventures/storypage";

const ContainerLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5rem;  
  width: 85%;
  margin: 5rem auto;
  letter-spacing: 0.1rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 90%;
  }
`;

const ContainerStory = ({ story }) => {
  return (
    <ContainerLayout>
      <StoryPanel story={story} />
    </ContainerLayout>
  );
};

export default ContainerStory;