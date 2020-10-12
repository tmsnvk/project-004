import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { ContainerLayout, MessageText, MessageTitle } from "components/commoncomponents/general";
import { TileButton } from "components/commoncomponents/adventure-related";
import { GameMainPage } from "components/layoutcomponents/adventures/storypage";
// import { to_one_last_new_beginning_0101, a_city_to_burn_0102, greenskins_greenskins_everywhere_0201, how_to_lose_an_empire_0301, wild_elvish_sorcerers_0401 } from "stories";
import { to_one_last_new_beginning_0101 } from "stories";

const SpanBold = styled.span`
  font-weight: bold;
`;

const StartButton = styled(TileButton)`
  margin: 10rem auto;
  font-size: ${props => props.theme.fontSize.xLarge};
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  font-weight: bold;
`;

const GameStart = () => {
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

  const startStory = async () => {
    const id = localStorage.getItem("auth-id");
    await axios.put("/users/achievements/gamestart", { id });
    
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
          Beware of making bad choices - <SpanBold>Hood</SpanBold> watches each and every step of yours!
        </MessageText>
        <StartButton onClick={startStory}>Start</StartButton>
      </> :
      <GameMainPage story={chosenStory} />}
    </ContainerLayout>
  );
};

export default GameStart;