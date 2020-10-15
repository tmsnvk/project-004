import React from "react";
import styled from "styled-components";
import { AdventureArc, AdventureTile, adventuresMetaData } from "components/layoutcomponents/adventures/mainpage";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ContainerArc = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin: 5rem 0 0 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    flex-grow: 1;
    width: 40%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 35rem;
  }
`;

const ButtonsAdventure = () => {
  const renderAdventureTiles = adventuresMetaData.map(({ id, arcTitle, storyOne, storyTwo, storyThree }) => {
    return (
      <ContainerArc key={id}>
        <AdventureArc arcTitle={arcTitle} />
        {storyOne.title !== undefined ? <AdventureTile active={storyOne.active} storyTitle={storyOne.title} linkId={storyOne.link} /> : null}
        {storyTwo.title !== undefined ? <AdventureTile active={storyTwo.active} storyTitle={storyTwo.title} linkId={storyTwo.link} /> : null}
        {storyThree.title !== undefined ? <AdventureTile active={storyThree.active} storyTitle={storyThree.title} linkId={storyThree.link} /> : null}
      </ContainerArc>
    );
  });

  return (
    <ContainerComponent>
      {renderAdventureTiles}
    </ContainerComponent>
  );
};

export default ButtonsAdventure;