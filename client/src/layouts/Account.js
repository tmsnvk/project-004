import React from "react";
import styled from "styled-components";
import { MessageText, MessageTitle } from "components/commoncomponents/general";
import { AchievementList } from "components/layoutcomponents/account";

const ContainerLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5rem;  
  width: 90%;
  margin: 5rem auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
    font-size: ${props => props.theme.fontSize.medium};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 70%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 50%;
    margin: 10rem auto;
  }
`;



const Account = () => {

  return (
    <ContainerLayout>
      <MessageTitle>
        Welcome to your Account, adventurer!
      </MessageTitle>
      <MessageText>
        Below you may review what you have achieved through our adventures.
      </MessageText>
      <AchievementList />
    </ContainerLayout>
  );
};

export default Account;