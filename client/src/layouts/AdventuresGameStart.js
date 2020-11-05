import React, { useEffect, useState } from "react";
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
  const [isGameSaved, setIsGameSaved] = useState(false);

  let chosenStoryId;

  useEffect(() => {
    const isGameSaved = async () => {
      const response = await axios.get("/adventure/savedgameid-get", { params: { chosenStoryId: chosenStoryId }});
      if (response.data !== "ID0001") setIsGameSaved(true);
    };

    isGameSaved();
    return () => setIsGameSaved(false);
  }, [chosenStoryId, setIsGameSaved]);

  const startNewStory = async () => {
    await axios.put("/achievement/counter", { type: "numberOfGameStarts" });
    setFirstEventId("ID0001");
    setStart(true);
  };

  const startSavedStory = async () => {
    const response = await axios.get("/adventure/savedgameid-get", { params: { chosenStoryId: chosenStoryId }});
    setFirstEventId(response.data);
    setStart(true);
  };

  if (storyTitle.includes("tutorial01")) {
    chosenStoryId = "tutorial01"
  } else if (storyTitle.includes("tutorial02")) {
    chosenStoryId = "tutorial02"
  } else {
    return <Redirect to={"/page/adventures/underconstruction"} />;
  }

  return (
    <LayoutContainerModified>
      {start === false ? <PageInformation setStart={setStart} startNewStory={startNewStory} startSavedStory={startSavedStory} isGameSaved={isGameSaved} /> : <GameMainPage storyId={chosenStoryId} firstEventId={firstEventId} />}
    </LayoutContainerModified>
  );
};

export default AdventuresGameStart;