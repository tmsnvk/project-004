import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import ListEventParagraphs from "./ListEventParagraphs";
import ListEventChoices from "./ListEventChoices";
import ListEventAchievement from "./ListEventAchievement";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 4;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    grid-column-start: 2;
    grid-column-end: 5;
  }
`;

const GameMainPage = ({ storyId, firstEventId }) => {
  const history = useHistory();

  const [nextPathId, setNextPathId] = useState(firstEventId);
  const [nextPathParagraphs, setNextPathParagraphs] = useState({ one: undefined, two: undefined, three: undefined, four: undefined });
  const [nextPathOptions, setNextPathOptions] = useState([[undefined], [undefined], [undefined]]);
  const [nextPathAchievement, setNextPathAchievement] = useState({ id: undefined, title: undefined, stateCode: undefined, timestampCode: undefined });

  const [showAchievementPanel, setShowAchievementPanel] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const id = localStorage.getItem("auth-id");
        await axios.put("/adventure/savedgameid-set", { id, savedId: nextPathId, storyId });

        const { data } = await axios.get("/adventure/nextevent", { params: { _id: storyId, nextPathId: nextPathId }});

        setNextPathParagraphs({ one: data.paragraphs[0]?.text, two: data.paragraphs[1]?.text, three: data.paragraphs[2]?.text, four: data.paragraphs[3]?.text });
        setNextPathOptions([[data.options[0]?.text, data.options[0]?.nextEventId, data.options[0]?.visible], [data.options[1]?.text, data.options[1]?.nextEventId, data.options[1]?.visible], [data.options[2]?.text, data.options[2]?.nextEventId, data.options[2]?.visible]]);
        setNextPathAchievement({ id: data.achievement?.id, title: data.achievement?.title, stateCode: data.achievement?.stateCode, timestampCode: data.achievement?.timestampCode });

      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [nextPathId, storyId]);

  useEffect(() => {
    const triggerAchievement = async (nextPathId, nextPathAchievement) => {
      if (nextPathId !== nextPathAchievement?.id) return;

      if (nextPathId === nextPathAchievement?.id) {
        try {
          const id = localStorage.getItem("auth-id");
          const response = await axios.put("/achievement/trigger", { id, stateCode: nextPathAchievement.stateCode, timestampCode: nextPathAchievement.timestampCode });
          if (!response.data.message) setShowAchievementPanel(true);
        } catch (error) {
          console.log(error);
        }
      }
    };

    triggerAchievement(nextPathId, nextPathAchievement);
    return () => setShowAchievementPanel(false);
  }, [nextPathId, nextPathAchievement]);

  useEffect(() => {
    const triggerGameOver = async (nextPathId) => {
      if ((nextPathId) === "GAMEOVER") {
        const id = localStorage.getItem("auth-id");
        await axios.put("/adventure/savedgameid-set", { id, savedId: "ID0001", storyId });
        await axios.put("/achievement/counter-death", { id });
        history.push("/page/adventures/result/lose");
        history.go();
      } 
    };

    triggerGameOver(nextPathId);
  }, [history, nextPathId, storyId]);

  return (
    <ContainerComponent>
      <ListEventParagraphs nextPathParagraphs={nextPathParagraphs} />
      <ListEventChoices nextPathOptions={nextPathOptions} setNextPathId={setNextPathId} />
      <ListEventAchievement nextPathAchievement={nextPathAchievement} showAchievementPanel={showAchievementPanel} />
    </ContainerComponent>
  );
};

export default GameMainPage;