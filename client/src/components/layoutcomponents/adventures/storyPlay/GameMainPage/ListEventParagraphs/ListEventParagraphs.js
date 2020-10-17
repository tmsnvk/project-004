import React from "react";
import styled from "styled-components";

const ContainerComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Paragraph = styled.p`
  padding: 1rem 0 1rem 0;
  font-family: ${props => props.theme.fontFamily.secondary};
  font-size: ${props => props.theme.fontSize.small};
  font-weight: bolder;

  &::first-letter {
    font-size: ${props => props.theme.fontSize.xxLarge};
  }
`;

const ListEventParagraphs = ({ eventParagraphs }) => {
  return (
    <ContainerComponent>
      <Paragraph>
        {eventParagraphs.one}
      </Paragraph>
      <Paragraph>
        {eventParagraphs.two}
      </Paragraph>
      <Paragraph>
        {eventParagraphs.three}
      </Paragraph>
    </ContainerComponent>
  );
};

export default ListEventParagraphs;