import React from "react";
import styled from "styled-components";
import FormAccountDelete from "./FormAccountDelete";
import { MessageText, MessageTitle } from "components/commoncomponents/general";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
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

const DeleteAccount = () => {

  return (
    <ContainerComponent>
      <WrapperRename>
        <Title>
          Delete your account
        </Title>
        <Message>
          We are sorry to see you gone. Please understand that by clicking on the delete button you permanently delete your account with all of its information. After clicking on the button you will be redirected to our home page.
        </Message>
      </WrapperRename>
      <FormAccountDelete />
    </ContainerComponent>
  );
};

export default DeleteAccount;