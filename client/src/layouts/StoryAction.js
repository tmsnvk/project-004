import React from "react";
import styled from "styled-components";
import { Message, MessageTitle } from "components/commoncomponents/general";
import { arcOneStoryOne, arcOneStoryTwo } from "stories"; 
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

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 90%;
  }
`;

const AdventureAction = () => {
  const history = useHistory();
  const storyName = history.location.pathname;
  let one;
      if (storyName === "/page/adventures/arcOneStoryOne") {
        one = arcOneStoryOne;
      } else if (storyName === "/page/adventures/arcOneStoryTwo") {
        one = arcOneStoryTwo;
      } else {
        return null;
      }

  return (
    <ContainerLayout>
      <Message message={"I'm an adventure"} />
      entry text + start button to pass the choosen story;
    </ContainerLayout>
  );
};

export default AdventureAction;