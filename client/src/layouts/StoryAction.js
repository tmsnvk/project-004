import React, { useState } from "react";
import styled from "styled-components";
import { Message, MessageTitle } from "components/commoncomponents/general";
import { useHistory } from "react-router-dom";
import { ContainerStory } from "components/layoutcomponents/adventures/storypage";
import componentData from "components/layoutcomponents/adventures/mainpage/componentData";
import { arcOneStoryOne, arcOneStoryTwo } from "stories";

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

const AdventureAction = () => {
  const [start, setStart] = useState(false);
  const history = useHistory();
  const storyName = history.location.pathname;

  let chosenStory;
    if (storyName.includes("arcOneStoryOne")) {
      chosenStory = arcOneStoryOne;
    } else if (storyName.includes("arcOneStoryTwo")) {
      chosenStory = arcOneStoryTwo;
    } else {
      return null;
    }

  const startStory = () => {
    setStart(true);
  }

  return (
    <ContainerLayout>
      {start === false ? 
      <>
        <Message message={componentData.gameBeginningMessage.paragraphOne} />
        <Message message={componentData.gameBeginningMessage.paragraphTwo} />
        <button onClick={startStory}>CLICK ME</button>
      </> :
        <ContainerStory story={chosenStory} />
    }
    </ContainerLayout>
  );
};

export default AdventureAction;