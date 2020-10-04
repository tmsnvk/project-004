import React from "react";
import styled from "styled-components";
import { MessageText, MessageTitle } from "components/commoncomponents/general";
import { AdventureArc, AdventureTitle, storiesMetaData } from "components/layoutcomponents/adventures/mainpage";

const ContainerLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5rem;  
  width: 90%;
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

const ContainerData = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    margin: 0 auto;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    flex-direction: row;
    width: 100%;
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
    width: 50%;
    align-items: center;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {

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
      <MessageTitle>
        Select a story, adventurer!
      </MessageTitle>
      <MessageText>
        message regarding how everything works, saving options etc.
      </MessageText>
      <ContainerData>
        {renderStoryMetaData}
      </ContainerData>
    </ContainerLayout>
  );
};

export default Adventures;