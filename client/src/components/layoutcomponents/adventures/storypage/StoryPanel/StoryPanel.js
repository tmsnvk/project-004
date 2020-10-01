import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { AdventureButton } from "components/layoutcomponents/adventures/storypage";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    margin: 10rem auto;
    width: 80%;
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

const NextEventButton = styled(AdventureButton)`
  visibility: ${props => props.visible ? "visible" : "hidden"};
  font-size: ${props => props.theme.fontSize.medium};
  
  &:first-child {
    margin: 5rem 0 1rem 0;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    line-height: 1.75;
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

const StoryPanel = ({ story }) => {
  const [eventId, setEventId] = useState("AOSO1");
  const [eventParagraphs, setEventParagraphs] = useState({ one: undefined, two: undefined, three: undefined });
  const [eventOptions, setEventOptions] = useState([[undefined], [undefined], [undefined]]);
  const [eventAchievement, setEventAchievement] = useState({ code: undefined, mongoCode: undefined, title: undefined });
  const [showAchievementPanel, setShowAchievementPanel] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    const getEventTexts = (eventId) => {
      const eventTexts = story.find(element => element.id === eventId);
      setEventParagraphs({ one: eventTexts.paragraphs[0]?.text, two: eventTexts.paragraphs[1]?.text, three: eventTexts.paragraphs[2]?.text });
    };

    getEventTexts(eventId);
  }, [eventId, story]);

  useEffect(() => {
    const getEventOptions = (eventId) => {
      const eventOptions = story.find(element => element.id === eventId);
      eventOptions.options.forEach((option, index, array) => setEventOptions([[array[0]?.text, array[0]?.nextEventId, array[0]?.visible], [array[1]?.text, array[1]?.nextEventId, array[1]?.visible], [array[2]?.text, array[2]?.nextEventId, array[2]?.visible]]));
    };

    getEventOptions(eventId);
  }, [eventId, story]);

  useEffect(() => {
    const getAchievement = (eventId) => {
      const eventAchievements = story.find(element => element.id === eventId);
      setEventAchievement({ code: eventAchievements.achievement?.code, mongoCode: eventAchievements.achievement?.mongoCode, title: eventAchievements.achievement?.title });
    };

    getAchievement(eventId)
  }, [eventId, story]);

  useEffect(() => {
    const triggerAchievement = async (eventId, eventAchievement) => {
      if (eventId === eventAchievement?.code) {
        try {
          const id = localStorage.getItem("id");
          const response = await axios.get("/users/achievements/aoso", {params: { _id: id }});
          if (response.data.keepPunching) return;
          setShowAchievementPanel(true);
          await axios.put("/users/achievement", { id, text: eventAchievement.code });
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

export default StoryPanel;