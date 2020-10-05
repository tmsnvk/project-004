import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import styled from "styled-components";
import { MessageText, MessageTitle } from "components/commoncomponents/general";
import { StoryPanel, AdventureButton } from "components/layoutcomponents/adventures/storypage";
// import { to_one_last_new_beginning_0101, a_city_to_burn_0102, greenskins_greenskins_everywhere_0201, how_to_lose_an_empire_0301, wild_elvish_sorcerers_0401 } from "stories";
import { to_one_last_new_beginning_0101 } from "stories";
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

  }
`;

const Span = styled.span`
  font-weight: bold;
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
  
  if (storyName.includes("to_one_last_new_beginning_0101")) {
    chosenStory = to_one_last_new_beginning_0101;
  } else if (storyName.includes("a_city_to_burn_0102")) {
    return <Redirect to={"/page/adventures/underconstruction"} />;
  } else if (storyName.includes("greenskins_greenskins_everywhere_0201")) {
    return <Redirect to={"/page/adventures/underconstruction"} />;
  } else if (storyName.includes("how_to_lose_an_empire_0301")) {
    return <Redirect to={"/page/adventures/underconstruction"} />;
  } else if (storyName.includes("wild_elvish_sorcerers_0401")) {
    return <Redirect to={"/page/adventures/underconstruction"} />;
  } else return null;

  const startStory = () => {
    setStart(true);
  };

  return (
    <ContainerLayout>
      {start === false ? 
      <>
        <MessageTitle>
          You have choosen, adventurer!
        </MessageTitle>
        <MessageText>
          Click on the start button to start your journey!
        </MessageText>
        <MessageText>
          Beware of making bad choices - <Span>Hood</Span> watches each and every step of yours!
        </MessageText>
        <StartButton onClick={startStory}>START</StartButton>
      </> :
      <StoryPanel story={chosenStory} />}
    </ContainerLayout>
  );
};

export default AdventureAction;