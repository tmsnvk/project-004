import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ContainerLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5rem;  
  width: 85%;
  margin: 5rem auto;
  letter-spacing: 0.1rem;
  font-size: ${props => props.theme.fontSize.medium};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 90%;
  }
`;

const StoryPiece = styled.div`
  font-size: ${props => props.theme.fontSize.medium};
`;

const StoryPanel = ({ story }) => {
  const achis = [{ girl: story[0].achi.achistatus, girlValue: story[0].achi.achistatusbool }, { girl: story[0].achi.achistatus, girlValue: story[0].achi.achistatusbool }];
  console.log(achis);
  const [eventId, setEventId] = useState("1");
  const [eventParagraphs, setEventParagraphs] = useState({ one: undefined, two: undefined, three: undefined })
  const [eventOptions, setEventOptions] = useState([[undefined], [undefined], [undefined]]);
  const [achievement, setAchievement] = useState({ girl: false, boy: false });
console.log(achievement);
  const history = useHistory();

  useEffect(() => {
    const getEventTexts = (eventId) => {
      const eventText = story.find(element => element.id === eventId);
      setEventParagraphs({ one: eventText.paragraphs[0]?.text, two: eventText.paragraphs[1]?.text, three: eventText.paragraphs[2]?.text });
    };

    getEventTexts(eventId);
  }, [eventId, story]);

  useEffect(() => {
    const getEventOptions = (eventId) => {
      const eventText = story.find(element => element.id === eventId);
      eventText.options.forEach((option, index, array) => {
        setEventOptions([[array[0]?.text, array[0]?.nextEventId], [array[1]?.text, array[1]?.nextEventId], [array[2]?.text, array[2]?.nextEventId]]);
      });
    };

    getEventOptions(eventId);
  }, [eventId, story]);

  useEffect(() => {
    const triggerAchievement = async (eventId) => {
      if (eventId !== "3E") {
        setAchievement({ ...achievement, boy: true })
      }
      const id = localStorage.getItem("id");
      if (eventId === "3E") {
        // setAchievement({ girl : true, boy: false });
        await axios.put("/users/achievement", { achis, id });
      }
    };

    const gameOver = (eventId) => {
      if ((eventId) === "GAMEOVER") {
        history.push("/page/adventures/results");
      }
    };

    triggerAchievement(eventId)
    gameOver(eventId);
  }, [eventId]);


  useEffect(() => {
    const setAchievement = async () => {
      if (achievement.girl === false) return null;
        
      const id = localStorage.getItem("id");

      try {
        await axios.put("/users/achievement", { achievement, id });

      } catch (error) {
          console.log(error.response.data.message);
      }
    }
    
    setAchievement()
    },[achievement]);
    
    

  const renderButton = eventOptions.map((option, index) => {
    const getNewEvent = () => setEventId(option[1]);

    return (
      <button key={index} onClick={getNewEvent}>{option[0]}</button>
    );
  });

  return (
    <ContainerLayout>
      <StoryPiece>
        {eventId}
      {eventParagraphs.one}
      </StoryPiece>
      <StoryPiece>
      {eventParagraphs.two}
      </StoryPiece>
      <StoryPiece>
      {eventParagraphs.three}
      </StoryPiece>
      {renderButton}
    </ContainerLayout>
  );
};

export default StoryPanel;