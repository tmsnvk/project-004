import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { LayoutContainer } from "components/commoncomponents/general";
import { GameMainPage, PageTopText } from "components/layoutcomponents/adventures/storyPlay";
import { tutorial, to_one_last_new_beginning_a1s1 } from "utilities/stories";

const LayoutContainerModified = styled(LayoutContainer)`
  grid-template-columns: 10% 15% 50% 15% 10%;
`;

const AdventuresGameStart = () => {
  const [start, setStart] = useState(false);

  const history = useHistory();
  const storyName = history.location.pathname;
  
  let chosenStory;

  if (storyName.includes("tutorial")) {
    chosenStory = tutorial;
  } else if (storyName.includes("to_one_last_new_beginning_a1s1")) {
    chosenStory = to_one_last_new_beginning_a1s1;
  } else if (storyName.includes("a_city_to_burn_a1s2")) {
    return <Redirect to={"/page/adventures/underconstruction"} />;
  } else if (storyName.includes("greenskins_greenskins_everywhere_a2s1")) {
    return <Redirect to={"/page/adventures/underconstruction"} />;
  } else if (storyName.includes("how_to_lose_an_empire_a3s1")) {
    return <Redirect to={"/page/adventures/underconstruction"} />;
  } else if (storyName.includes("wild_elvish_sorcerers_a4s1")) {
    return <Redirect to={"/page/adventures/underconstruction"} />;
  } else return null;

  const startStory = async () => {
    const id = localStorage.getItem("auth-id");
    await axios.put("/achievement/counter-start", { id });
    setStart(true);
  };

  return (
    <LayoutContainerModified>
      {start === false ? <PageTopText setStart={setStart} startStory={startStory} /> : <GameMainPage story={chosenStory} />}
    </LayoutContainerModified>
  );
};

export default AdventuresGameStart;