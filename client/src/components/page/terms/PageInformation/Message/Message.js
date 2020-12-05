import React from "react";
import styled from "styled-components";
import { HorizontalLine, MessageText, SpanBold } from "components/shared/general";
import { NavigationLink } from "components/shared/navigation";

const TextContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 2.5rem 0 2.5rem 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const Message = () => {
  return (
    <>
      <TextContainer>
        <SpanBold>TERMS</SpanBold>
        <MessageText>
          1.0
        </MessageText>
        <MessageText>
          1.1
        </MessageText>
      </TextContainer>
      <TextContainer >
        <SpanBold>CONDITIONS</SpanBold>
        <MessageText>
          1.1
        </MessageText>
        <MessageText>
          1.2
        </MessageText>
      </TextContainer>
      <TextContainer>
        <SpanBold>PRIVACY POLICY</SpanBold>
        <MessageText>
          1.1
        </MessageText>
        <MessageText>
          1.2
        </MessageText>
      </TextContainer>
      <HorizontalLine width="25%" margin="5rem auto 2.5rem auto" />
      <MessageText>
        If you have any concern, please contact us <NavigationLink to="/page/about">here</NavigationLink> and we will get back to you as soon as possible.
      </MessageText>
    </>
  );
};

export default Message;