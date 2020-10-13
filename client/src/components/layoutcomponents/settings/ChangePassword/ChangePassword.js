import React from "react";
import styled from "styled-components";
import FormPasswordChange from "./FormPasswordChange";
import { MessageText, MessageTitle } from "components/commoncomponents/general";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
`;

const WrapperRename = styled.div`
  margin: 5rem 0 0 0;
`;

const Title = styled(MessageTitle)`
  font-size: ${props => props.theme.fontSize.small};
  font-weight: bold;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const Message = styled(MessageText)`
  font-size: ${props => props.theme.fontSize.small};
`;

const ChangeName = () => {

  return (
    <ContainerComponent>
      <WrapperRename>
        <Title>
          Change your password
        </Title>
        <Message>
          Please enter your new password in the box below. You may change your password as often as you would like to.
        </Message>
      </WrapperRename>
      <FormPasswordChange />
    </ContainerComponent>
  );
};

export default ChangeName;