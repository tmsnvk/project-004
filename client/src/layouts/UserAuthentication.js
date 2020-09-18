import React, { useContext } from "react";
import UserContext from "context/UserContext";
import styled from "styled-components";
import { UserLogin, IntroText, IntroRegister, IntroAccount } from "components/layoutcomponents/userauthentication";

const ContainerLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5rem;  
  font-size: ${props => props.theme.fontSize.small};
  text-align: center;
  width: 85%;
  margin: 10rem auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
    font-size: ${props => props.theme.fontSize.medium};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 70%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 50%;
  }
`;

const UserAuthentication = () => {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <ContainerLayout>
      <IntroText />
      {!userData.user ? <><IntroRegister /><UserLogin /></> : <IntroAccount />}
    </ContainerLayout>
  );
};

export default UserAuthentication;