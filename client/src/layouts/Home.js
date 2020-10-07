import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import styled from "styled-components";
import { AccountText, LoginForm, RegisterText, TopText } from "components/layoutcomponents/home";

const ContainerLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5rem;  
  width: 90%;
  margin: 5rem auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 65%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 40%;
    margin: 10rem auto;
  }
`;

const Home = () => {
  const { userData } = useContext(UserContext);

  return (
    <ContainerLayout>
      <TopText />
      {!userData.user ? <><RegisterText /><LoginForm /></> : <AccountText />}
    </ContainerLayout>
  );
};

export default Home;