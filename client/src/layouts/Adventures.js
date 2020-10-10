import React from "react";
import styled from "styled-components";
import { ContainerLayout } from "components/commoncomponents/general";
import { AdventureArc, AdventureTile, TopText, adventuresMetaData } from "components/layoutcomponents/adventures/mainpage";

const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    margin: 0;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ContainerStoryArc = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    flex-grow: 1;
    width: 40%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 35rem;
  }
`;

const Adventures = () => {
  const renderAdventureTiles = adventuresMetaData.map(({ id, arcTitle, storyOne, storyTwo, storyThree }) => {
    return (
      <ContainerStoryArc key={id}>
        <AdventureArc arcTitle={arcTitle} />
        {storyOne.title !== undefined ? <AdventureTile active={storyOne.active} storyTitle={storyOne.title} linkId={storyOne.link} /> : null}
        {storyTwo.title !== undefined ? <AdventureTile active={storyTwo.active} storyTitle={storyTwo.title} linkId={storyTwo.link} /> : null}
        {storyThree.title !== undefined ? <AdventureTile active={storyThree.active} storyTitle={storyThree.title} linkId={storyThree.link} /> : null}
      </ContainerStoryArc>
    );
  });

  return (
    <ContainerLayout>
      <TopText />
      <ContainerButton>
        {renderAdventureTiles}
      </ContainerButton>
    </ContainerLayout>
  );
};

export default Adventures;