import React from "react";
import styled from "styled-components";
import { TileButton } from "components/commoncomponents/tile-related";

const ContainerComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0 0 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    flex-direction: row;
  }
`;

const PathButton = styled(TileButton)`
  visibility: ${props => props.visible ? "visible" : "hidden"};
  font-weight: bold;

  &:first-child {
    margin: 5rem 0 1rem 0;
  }

  &:hover {
    background-color: ${props => props.theme.backgroundColor.secondary};
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    margin: 5rem 1rem 0 1rem;
    width: 30%;

    &:first-child {
      margin: 5rem 1rem 0 1rem;
    }
  }
`;

const ListEventChoices = ({ nextPathOptions, setNextPathId }) => {
  const renderButton = nextPathOptions.map((option, index) => {
    const getNextPath = () => setNextPathId(option[1]);

    return (
      <PathButton key={index} visible={option[2]} onClick={getNextPath}>{option[0]}</PathButton>
    );
  });

  return (
    <ContainerComponent>
      {renderButton}
    </ContainerComponent>
  );
};

export default ListEventChoices;