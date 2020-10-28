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

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    grid-column-start: 2;
    grid-column-end: 5;
  }
`;

const GameMainPage = ({ story }) => {
  const [eventId, setEventId] = useState("ID0001");
  const [eventParagraphs, setEventParagraphs] = useState({ one: undefined, two: undefined, three: undefined });
  const [eventOptions, setEventOptions] = useState([[undefined], [undefined], [undefined]]);
  const [eventAchievement, setEventAchievement] = useState({ code: undefined, storyCode: undefined, mongoCode: undefined, title: undefined });
  const [showAchievementPanel, setShowAchievementPanel] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getEventPara = async () => {
      try {
        const response = await axios.get("/adventure/nextevent", { params: { _id: "arcOneStoryOne_master", event: eventId }});
        console.log(response.data);

        setEventParagraphs({ one: response.data.paragraphs[0]?.text, two: response.data.paragraphs[1]?.text, three: response.data.paragraphs[2]?.text });
        setEventOptions([[response.data.options?.[0].text, response.data.options?.[0].nextEventId, response.data.options?.[0].visible], [response.data.options?.[1].text, response.data.options?.[1].nextEventId, response.data.options?.[1].visible], [response.data.options?.[2].text, response.data.options?.[2].nextEventId, response.data.options?.[2].visible]]);
        setEventAchievement({ code: response.data.achievement?.code, storyCode: response.data.achievement?.storyCode, mongoCode: response.data.achievement?.mongoCode, title: response.data.achievement?.title });

      } catch (error) {
        console.log(error);
      }
    };

    getEventPara();
  }, [eventId]);


  // useEffect(() => {
  //   const getEventParagraphs = (eventId, story) => {

  //     const eventParagraphs = story.find(element => element.id === eventId);
  //     setEventParagraphs({ one: eventParagraphs.paragraphs[0]?.text, two: eventParagraphs.paragraphs[1]?.text, three: eventParagraphs.paragraphs[2]?.text });
  //   };

  //   getEventParagraphs(eventId, story);
  //   return () => setEventParagraphs({ one: undefined, two: undefined, three: undefined });
  // }, [eventId, story]);

  // useEffect(() => {
  //   const getEventOptions = (eventId, story) => {
  //     const eventOptions = story.find(element => element.id === eventId);
  //     eventOptions.options.forEach((option, index, array) => setEventOptions([[array[0]?.text, array[0]?.nextEventId, array[0]?.visible], [array[1]?.text, array[1]?.nextEventId, array[1]?.visible], [array[2]?.text, array[2]?.nextEventId, array[2]?.visible]]));
  //   };

  //   getEventOptions(eventId, story);
  //   return () => setEventOptions([[undefined], [undefined], [undefined]]);
  // }, [eventId, story]);

  // useEffect(() => {
  //   const getEventAchievement = (eventId, story) => {
  //     const eventAchievement = story.find(element => element.id === eventId);
  //     setEventAchievement({ code: eventAchievement.achievement?.code, storyCode: eventAchievement.achievement?.storyCode, mongoCode: eventAchievement.achievement?.mongoCode, title: eventAchievement.achievement?.title });
  //   };

  //   getEventAchievement(eventId, story);
  //   return () => setEventAchievement({ code: undefined, mongoCode: undefined, title: undefined });
  // }, [eventId, story]);

  useEffect(() => {
    const triggerAchievement = async (eventId, eventAchievement) => {
      if (eventId !== eventAchievement?.code) return;

      if (eventId === eventAchievement?.code) {
        try {
          const id = localStorage.getItem("auth-id");
          const response = await axios.put("/achievement/trigger", { id, storyCode: eventAchievement.storyCode, code: eventAchievement.code });
          if (!response.data.message) setShowAchievementPanel(true);
        } catch (error) {
          console.log(error);
        }
      }
    };

    triggerAchievement(eventId, eventAchievement);
    return () => setShowAchievementPanel(false);
  }, [eventId, eventAchievement]);

  useEffect(() => {
    const triggerGameOver = async (eventId) => {
      if ((eventId) === "GAMEOVER") {
        const id = localStorage.getItem("auth-id");
        await axios.put("/achievement/counter-death", { id });
        history.push("/page/adventures/results");
        history.go();
      } 
    };

    triggerGameOver(eventId);
  }, [eventId, history]);

  return (
    <ContainerComponent>
      <ListEventParagraphs eventParagraphs={eventParagraphs} />
      <ListEventChoices eventOptions={eventOptions} setEventId={setEventId} />
      <ListEventAchievement eventAchievement={eventAchievement} showAchievementPanel={showAchievementPanel} />
    </ContainerComponent>
  );
};

export default GameMainPage;