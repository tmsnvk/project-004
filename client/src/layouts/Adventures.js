import React from "react";
import styled from "styled-components";
import { Message, MessageTitle } from "components/commoncomponents/general";
import { AdventureArc, AdventureTitle, componentData, storyTitleData } from "components/layoutcomponents/adventures/mainpage";

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
  const renderStoryTitleData = storyTitleData.map(({ id, arcTitle, storyOneTitle, storyOneLink, storyTwoTitle, storyTwoLink, storyThreeTitle, storyThreeLink }) => {
    return (
      <ContainerStoryArc key={id}>
        <AdventureArc title={arcTitle} />
        {storyOneTitle !== undefined ? <AdventureTitle title={storyOneTitle} linkId={storyOneLink} /> : null}
        {storyTwoTitle !== undefined ? <AdventureTitle title={storyTwoTitle} linkId={storyTwoLink} /> : null}
        {storyThreeTitle !== undefined ? <AdventureTitle title={storyThreeTitle} linkId={storyThreeLink} /> : null}
      </ContainerStoryArc>
    );
  });

  return (
    <ContainerLayout>
      <MessageTitle title={componentData.messageTitle} />
      <Message message={componentData.message.paragraphOne} />
      <ContainerData>
        {renderStoryTitleData}
      </ContainerData>
    </ContainerLayout>
  );
};

export default Adventures;