import React from "react";
import styled from "styled-components";
import { MessageText } from "components/shared/general";
import { IconLight } from "components/shared/styled-icons";
import { iconList } from "utilities";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  margin: 5rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ContainerIcon = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoadingSpinner = ({ loadingMessage }) => {
  return (
    <ComponentContainer>
      <ContainerIcon>
        <IconLight icon={iconList.spinner} spin></IconLight>
        <IconLight icon={iconList.peopleCarry}></IconLight>
        <IconLight icon={iconList.archive}></IconLight>
        <IconLight icon={iconList.peopleCarry}></IconLight>
        <IconLight icon={iconList.spinner} spin></IconLight>
      </ContainerIcon>
      <MessageText>{loadingMessage}</MessageText>
    </ComponentContainer>
  );
};

export default LoadingSpinner;