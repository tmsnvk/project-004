import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
  const [eventNumber, setEventNumber] = useState(1);
  const [paragraphOne, setParagraphOne] = useState();
  const [paragraphTwo, setParagraphTwo] = useState();
  const [options, setOptions] = useState([[undefined], [undefined], [undefined]]);

  useEffect(() => {
    const showTextNode = (eventNumber) => {
      const textNode = story.find(element => element.id === eventNumber);
      setParagraphOne(textNode.text_paragraphOne)
      setParagraphTwo(textNode.text_paragraphTwo)

      textNode.options.forEach((option, index, array) => {
        setOptions([[array[0].choice, array[0].nextStep], [array[1].choice, array[1].nextStep], [array[2].choice, array[2].nextStep]]);
      })
    };

    showTextNode(eventNumber);
  }, [eventNumber]);
  
  const renderButton = options.map((option, index) => {
    const handleNewPiece = () => setEventNumber(option[1]);

    return (
      <button key={index} onClick={handleNewPiece}>{option[0]}</button>
    );
  });

  return (
    <ContainerLayout>
      <StoryPiece>
      {paragraphOne}
      </StoryPiece>
      <StoryPiece>
      {paragraphTwo}
      </StoryPiece>
      {renderButton}
    </ContainerLayout>
  );
};

export default StoryPanel;