import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TileButton } from "components/commoncomponents/adventure-related";
import { TileStoryTitles, adventuresMetaData } from "components/layoutcomponents/adventures/mainpage";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  width: fit-content;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;

const TileArcTitles = () => {
  const [displayStoryTitles, setDisplayStoryTitles] = useState(1);
  const [data, setData] = useState([undefined]);
  console.log(data);

  useEffect(() => {
    setData([adventuresMetaData[Number(displayStoryTitles)]]);
    
  }, [displayStoryTitles])

  const handleStories = (event) => setDisplayStoryTitles(event.currentTarget.dataset.id);

  const renderArcTitles = adventuresMetaData.map(({ id, arcTitle }) => {
    return (
      <TileButton key={id} data-id={id} onClick={handleStories}>
        {arcTitle}
      </TileButton>
    );
  });

  return (
    <>
      <ContainerComponent>
        {renderArcTitles}
      </ContainerComponent>
      <TileStoryTitles data={data} />
    </>
  );
};

export default TileArcTitles;