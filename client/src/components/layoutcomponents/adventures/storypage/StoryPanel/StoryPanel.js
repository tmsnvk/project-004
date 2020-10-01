import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AdventureButton } from "components/layoutcomponents/adventures/storypage";

const ComponentLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    /* width: 90%; */
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    width: 75%;
    margin: 0 auto;
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
    width: 35%;
    

    &:first-child {
        margin: 5rem 1rem 0 1rem;
      }
  }
`;

const StoryPanel = ({ story }) => {
  const [eventId, setEventId] = useState("AOSO1");
  const [eventParagraphs, setEventParagraphs] = useState({ one: undefined, two: undefined, three: undefined });
  const [eventOptions, setEventOptions] = useState([[undefined], [undefined], [undefined]]);
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
        setEventOptions([[array[0]?.text, array[0]?.nextEventId, array[0]?.visible], [array[1]?.text, array[1]?.nextEventId, array[1]?.visible], [array[2]?.text, array[2]?.nextEventId, array[2]?.visible]]);
      });
    };

    getEventOptions(eventId);
  }, [eventId, story]);


  useEffect(() => {
    const triggerAchievement = async (eventId) => {
        const id = localStorage.getItem("id");

        if (eventId === "AOSO8G") {
        await axios.put("/users/achievement", { id, text: "AOSO8G" } );
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

  const renderButton = eventOptions.map((option, index) => {
    const getNewEvent = () => setEventId(option[1]);

    return (
      <NextEventButton key={index} visible={option[2]} onClick={getNewEvent}>{option[0]}</NextEventButton>
    );
  });

  return (
    <ComponentLayout>
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
    </ComponentLayout>
  );
};

export default StoryPanel;