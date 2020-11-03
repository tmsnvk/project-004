import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import ListEventParagraphs from "./ListEventParagraphs";
import ListEventChoices from "./ListEventChoices";
import ListEventAchievement from "./ListEventAchievement";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 4;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    grid-column-start: 2;
    grid-column-end: 4;
  }
`;

const GameMainPage = ({ storyId, firstEventId }) => {
  const { setGameData } = useContext(UserContext);
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
        console.log(data);

        setNextPathParagraphs({ one: data.paragraphs[0]?.text, two: data.paragraphs[1]?.text, three: data.paragraphs[2]?.text, four: data.paragraphs[3]?.text });
        setNextPathOptions([[data.options[0]?.text, data.options[0]?.nextEventId, data.options[0]?.visible], [data.options[1]?.text, data.options[1]?.nextEventId, data.options[1]?.visible], [data.options[2]?.text, data.options[2]?.nextEventId, data.options[2]?.visible]]);
        setNextPathAchievement({ id: data.achievement?.id, title: data.achievement?.title, stateCode: data.achievement?.stateCode, timestampCode: data.achievement?.timestampCode });

      } catch (error) {
        console.log(error);
      }
    };

    getData();
    return () => {
      setNextPathParagraphs({ one: undefined, two: undefined, three: undefined, four: undefined });
      setNextPathOptions([[undefined], [undefined], [undefined]]);
      setNextPathAchievement({ id: undefined, title: undefined, stateCode: undefined, timestampCode: undefined });
    }
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
    const triggerGameWin = async (nextPathId) => {
      if ((nextPathId) === "GAMEWON") {
        const id = localStorage.getItem("auth-id");
        await axios.put("/adventure/savedgameid-set", { id, savedId: "ID0001", storyId });
        await axios.put("/achievement/counter-finish", { id });
        const response = await axios.get("/achievement/store", { params: { _id: id }});
        setGameData({ gameStart: response.data.gameStart, gameFinish: response.data.gameFinish, gameDeath: response.data.gameDeath });

        history.push("/page/adventures/result/win");
      } 
    };

    triggerGameWin(nextPathId);
  }, [history, nextPathId, setGameData, storyId]);

  useEffect(() => {
    const triggerGameOver = async (nextPathId) => {
      if ((nextPathId) === "GAMEOVER") {
        const id = localStorage.getItem("auth-id");
        await axios.put("/adventure/savedgameid-set", { id, savedId: "ID0001", storyId });
        await axios.put("/achievement/counter-death", { id });
        const response = await axios.get("/achievement/store", { params: { _id: id }});
        setGameData({ gameStart: response.data.gameStart, gameFinish: response.data.gameFinish, gameDeath: response.data.gameDeath });

        history.push("/page/adventures/result/lose");
      } 
    };

    triggerGameOver(nextPathId);
  }, [history, nextPathId, setGameData, storyId]);

  return (
    <ComponentContainer>
      <ListEventParagraphs nextPathParagraphs={nextPathParagraphs} />
      <ListEventChoices nextPathOptions={nextPathOptions} setNextPathId={setNextPathId} />
      <ListEventAchievement nextPathAchievement={nextPathAchievement} showAchievementPanel={showAchievementPanel} />
    </ComponentContainer>
  );
};

export default GameMainPage;