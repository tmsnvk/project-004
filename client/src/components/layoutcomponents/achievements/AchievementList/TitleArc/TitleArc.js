import React from "react";
import styled from "styled-components";

const ContainerComponent = styled.p`
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: bold;
  padding: 0 0 2rem 0;
  text-align: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.large};
    text-align: left;
  }
`;

const TitleArc = ({ title }) => {
  return (
    <ContainerComponent>
      {title}
    </ContainerComponent>
  );
};

export default TitleArc;