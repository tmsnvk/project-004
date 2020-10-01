import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Message, MessageTitle } from "components/commoncomponents/general";
import { StoryPanel, AdventureButton } from "components/layoutcomponents/adventures/storypage";
import componentData from "components/layoutcomponents/adventures/mainpage/componentData";
import { aoso_to_one_last_new_beginning, arcOneStoryTwo } from "stories";

const ContainerLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5rem;  
  width: 85%;
  margin: 5rem auto;
  font-size: ${props => props.theme.fontSize.medium};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const StartButton = styled(AdventureButton)`
  margin: 2.5rem auto;
  font-size: ${props => props.theme.fontSize.large};
  letter-spacing: 0.2rem;
`;

const AdventureAction = () => {
  const [start, setStart] = useState(false);
  const history = useHistory();
  const storyName = history.location.pathname;

  let chosenStory;
    if (storyName.includes("aoso_to_one_last_new_beginning")) {
      chosenStory = aoso_to_one_last_new_beginning;
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
        <MessageTitle title={componentData.gameBeginningMessage.paragraphOne} />
        <Message message={componentData.gameBeginningMessage.paragraphTwo} />
        <StartButton onClick={startStory}>START</StartButton>
      </> :
        <StoryPanel story={chosenStory} />
    }
    </ContainerLayout>
  );
};

export default AdventureAction;