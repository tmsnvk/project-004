import React from "react";
import styled from "styled-components";
import { AdventureArc, AdventureTitle, TopText, storiesMetaData } from "components/layoutcomponents/adventures/mainpage";

const ContainerLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5rem;  
  width: 90%;
  margin: 5rem auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    margin: 10rem auto;
  }
`;

const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;


  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    margin: 0;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {

  }
`;

const ContainerStoryArc = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    flex-grow: 1;
    width: 50%;
    align-items: center;
    /* min-width: 20%; */
    /* max-width: 50%; */

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 42.5rem;
  }
`;

const Adventures = () => {
  const renderStoryMetaData = storiesMetaData.map(({ id, arcTitle, storyOne, storyTwo, storyThree }) => {
    return (
      <ContainerStoryArc key={id}>
        <AdventureArc arcTitle={arcTitle} />
        {storyOne.title !== undefined ? <AdventureTitle active={storyOne.active} storyTitle={storyOne.title} linkId={storyOne.link} /> : null}
        {storyTwo.title !== undefined ? <AdventureTitle active={storyTwo.active} storyTitle={storyTwo.title} linkId={storyTwo.link} /> : null}
        {storyThree.title !== undefined ? <AdventureTitle active={storyThree.active} storyTitle={storyThree.title} linkId={storyThree.link} /> : null}
      </ContainerStoryArc>
    );
  });

  return (
    <ContainerLayout>
      <TopText />
      <ContainerData>
        {renderStoryMetaData}
      </ContainerData>
    </ContainerLayout>
  );
};

export default Adventures;