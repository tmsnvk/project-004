import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Message, MessageTitle } from "components/commoncomponents/general";
import { componentData } from "components/layoutcomponents/adventures";

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

const Adventures = () => {
  return (
    <ContainerLayout>
      <MessageTitle title={componentData.messageTitle} />
      <Message message={componentData.message.paragraphOne} />
    </ContainerLayout>
  );
};

export default Adventures;