import React from "react";
import styled from "styled-components";
import { AchievementList, TopText } from "components/layoutcomponents/account";

const ContainerLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5rem;  
  width: 90%;
  margin: 5rem auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    /* margin: 5rem 0 0 5rem; */
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    /* width: 70%; */
    margin: 10rem auto;
  }
`;

const Account = () => {
  return (
    <ContainerLayout>
      <TopText />
      <AchievementList />
    </ContainerLayout>
  );
};

export default Account;