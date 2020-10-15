import React from "react";
import styled from "styled-components";
import { AdventureTile } from "components/layoutcomponents/adventures/mainpage";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    align-items: center;
  }
`;

const ContainerArc = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  width: 40rem;

  /* @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    flex-grow: 1;
    width: 40%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 35rem;
  } */
`;

const TileStoryTitles = ({ data }) => {

  const renderTiles = data.map((element) => {
    if (element?.id === undefined) return;

    return (
      <ContainerArc key={element?.id}>
        {element?.storyOne.title !== undefined ? <AdventureTile active={element?.storyOne.active} storyTitle={element?.storyOne.title} linkId={element?.storyOne.link} /> : null}
        {element?.storyTwo.title !== undefined ? <AdventureTile active={element?.storyTwo.active} storyTitle={element?.storyTwo.title} linkId={element?.storyTwo.link} /> : null}
        {element?.storyThree.title !== undefined ? <AdventureTile active={element?.storyThree.active} storyTitle={element?.storyThree.title} linkId={element?.storyThree.link} /> : null}
      </ContainerArc>
    );
  });

  return (
    <ContainerComponent>
      {renderTiles}
    </ContainerComponent>
  );
};

export default TileStoryTitles;