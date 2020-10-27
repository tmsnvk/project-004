import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { LayoutContainer } from "components/commoncomponents/general";
import { GameMainPage, PageInformation } from "components/layoutcomponents/adventures/storyPlay";
import { tutorial, to_one_last_new_beginning_a1s1 } from "utilities/stories";

const LayoutContainerModified = styled(LayoutContainer)`
  grid-template-columns: 10% 15% 50% 15% 10%;
`;

const AdventuresGameStart = () => {
  const history = useHistory();
  const storyName = history.location.pathname;

  const [start, setStart] = useState(false);

  let chosenStory;

  if (storyName.includes("tutorial")) {
    chosenStory = tutorial;
  } else if (storyName.includes("to_one_last_new_beginning_a1s1")) {
    chosenStory = to_one_last_new_beginning_a1s1;
  } else {
    return <Redirect to={"/page/adventures/underconstruction"} />;
  }

  const startStory = async () => {
    const id = localStorage.getItem("auth-id");
    await axios.put("/achievement/counter-start", { id });
    setStart(true);
  };

  return (
    <LayoutContainerModified>
      {start === false ? <PageInformation setStart={setStart} startStory={startStory} /> : <GameMainPage story={chosenStory} />}
    </LayoutContainerModified>
  );
};

export default AdventuresGameStart;