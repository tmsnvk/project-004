import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Paragraph = styled.p`
  padding: 1rem 0 1rem 0;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bolder;

  &::first-letter {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }
`;

const ListEventParagraphs = ({ nextPathParagraphs }) => {
  return (
    <ComponentContainer>
      <Paragraph>
        {nextPathParagraphs.one}
      </Paragraph>
      <Paragraph>
        {nextPathParagraphs.two}
      </Paragraph>
      <Paragraph>
        {nextPathParagraphs.three}
      </Paragraph>
    </ComponentContainer>
  );
};

export default ListEventParagraphs;