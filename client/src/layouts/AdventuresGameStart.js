import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { LayoutContainer } from "components/commoncomponents/general";
import { GameMainPage, PageInformation } from "components/layoutcomponents/adventures/storyPlay";

const LayoutContainerModified = styled(LayoutContainer)`
  grid-template-columns: 10% 15% 50% 15% 10%;
`;

const AdventuresGameStart = () => {
  const history = useHistory();
  const storyTitle = history.location.pathname;

  const [start, setStart] = useState(false);
  const [firstEventId, setFirstEventId] = useState(undefined);

  let chosenStoryId;

  if (storyTitle.includes("tutorial")) {
    chosenStoryId = "tutorial";
  } else if (storyTitle.includes("A1S1")) {
    chosenStoryId = "A1S1";
  } else {
    return <Redirect to={"/page/adventures/underconstruction"} />;
  }

  const startNewStory = async () => {
    const id = localStorage.getItem("auth-id");
    await axios.put("/achievement/counter-start", { id });
    setFirstEventId("ID0001");
    setStart(true);
  };

  const startSavedStory = async () => {
    const id = localStorage.getItem("auth-id");
    const response = await axios.get("/adventure/savedgameid-get", { params: { id: id, chosenStoryId: chosenStoryId }});
    setFirstEventId(response.data);
    setStart(true);
  };

  return (
    <LayoutContainerModified>
      {start === false ? <PageInformation setStart={setStart} startNewStory={startNewStory} startSavedStory={startSavedStory} /> : <GameMainPage storyId={chosenStoryId} firstEventId={firstEventId} />}
    </LayoutContainerModified>
  );
};

export default AdventuresGameStart;