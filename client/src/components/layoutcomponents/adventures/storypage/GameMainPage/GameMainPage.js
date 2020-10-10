import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { Tile } from "components/commoncomponents/adventure-related";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.fontSize.small};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.medium};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    margin: 0 auto;
    width: 75%;
  }
`;

const StoryPiece = styled.div`
  padding: 1.5rem 0 1.5rem 0;
`;

const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 80%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 100%;
    flex-direction: row;
}
`;

const NextEventButton = styled(Tile)`
  visibility: ${props => props.visible ? "visible" : "hidden"};
  font-size: ${props => props.theme.fontSize.small};
  line-height: 1.75;

  &:first-child {
    margin: 5rem 0 1rem 0;
  }

  &:hover {
    background-color: ${props => props.theme.backgroundColor.secondary};
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    margin: 5rem 1rem 0 1rem;
    width: 30%;

    &:first-child {
      margin: 5rem 1rem 0 1rem;
    }
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const AchievementUnlocked = styled.div`
  animation: 0.5s ${fadeIn} ease-out;
  width: fit-content;
  margin: 10rem 0 0 0;
  background-color: ${props => props.theme.backgroundColor.secondary};
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.fontColor.secondaryDark};
  font-weight: bold;
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  padding: 2rem 2rem 2rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const GameMainPage = ({ story }) => {
  const [eventId, setEventId] = useState("AOSO1");
  const [eventParagraphs, setEventParagraphs] = useState({ one: undefined, two: undefined, three: undefined });
  const [eventOptions, setEventOptions] = useState([[undefined], [undefined], [undefined]]);
  const [eventAchievement, setEventAchievement] = useState({ code: undefined, storyCode: undefined, mongoCode: undefined, title: undefined });
  const [showAchievementPanel, setShowAchievementPanel] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getEventTexts = (eventId, story) => {
      const eventParagraphs = story.find(element => element.id === eventId);
      setEventParagraphs({ one: eventParagraphs.paragraphs[0]?.text, two: eventParagraphs.paragraphs[1]?.text, three: eventParagraphs.paragraphs[2]?.text });
    };
    
    getEventTexts(eventId, story);
    return () => setEventParagraphs({ one: undefined, two: undefined, three: undefined });
  }, [eventId, story]);

  useEffect(() => {
    const getEventOptions = (eventId, story) => {
      const eventOptions = story.find(element => element.id === eventId);
      eventOptions.options.forEach((option, index, array) => setEventOptions([[array[0]?.text, array[0]?.nextEventId, array[0]?.visible], [array[1]?.text, array[1]?.nextEventId, array[1]?.visible], [array[2]?.text, array[2]?.nextEventId, array[2]?.visible]]));
    };

    getEventOptions(eventId, story);
    return () => setEventOptions([[undefined], [undefined], [undefined]]);
  }, [eventId, story]);

  useEffect(() => {
    const getAchievement = (eventId, story) => {
      const eventAchievement = story.find(element => element.id === eventId);
      setEventAchievement({ code: eventAchievement.achievement?.code, storyCode: eventAchievement.achievement?.storyCode, mongoCode: eventAchievement.achievement?.mongoCode, title: eventAchievement.achievement?.title });
    };

    getAchievement(eventId, story);
    return () => setEventAchievement({ code: undefined, mongoCode: undefined, title: undefined });
  }, [eventId, story]);

  useEffect(() => {
    const triggerAchievement = async (eventId, eventAchievement) => {
      if (eventId !== eventAchievement?.code) return;

      if (eventId === eventAchievement?.code) {
        try {
          const id = localStorage.getItem("auth-id");
          const response = await axios.put("/users/achievement", { id, storyCode: eventAchievement.storyCode, code: eventAchievement.code });
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
    const triggerGameOver = (eventId) => {
      if ((eventId) === "GAMEOVER") history.push("/page/adventures/results");
    };

    triggerGameOver(eventId);
  }, [eventId, history]);

  const renderButton = eventOptions.map((option, index) => {
    const getNewEvent = () => setEventId(option[1]);

    return (
      <NextEventButton key={index} visible={option[2]} onClick={getNewEvent}>{option[0]}</NextEventButton>
    );
  });

  return (
    <ComponentContainer>
      <StoryPiece>
        {eventId} <br></br>
        {eventParagraphs.one}
      </StoryPiece>
      <StoryPiece>
        {eventParagraphs.two}
      </StoryPiece>
      <StoryPiece>
        {eventParagraphs.three}
      </StoryPiece>
      <ContainerButton>
        {renderButton}
      </ContainerButton>
      {showAchievementPanel ? <AchievementUnlocked>Achievement Unlocked: {eventAchievement.title}</AchievementUnlocked> : null}
    </ComponentContainer>
  );
};

export default GameMainPage;