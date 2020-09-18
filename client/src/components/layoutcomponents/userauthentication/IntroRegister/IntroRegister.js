import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ButtonNavigation } from "components/commoncomponents";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
`;

const Message = styled.p`
  font-size: ${props => props.theme.fontSize.small};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const IntroRegister = () => {
  const history = useHistory();

  const userRegister = () => history.push("/userregister");

  return (
    <ContainerComponent>
      <Message>
        Sign in below if you are already registered. If not - <ButtonNavigation onClick={userRegister}>click here</ButtonNavigation> to register an account!
      </Message>
    </ContainerComponent>
  );
};

export default IntroRegister;