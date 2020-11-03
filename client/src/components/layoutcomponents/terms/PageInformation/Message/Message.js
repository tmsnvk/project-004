import React from "react";
import { HorizontalLine, MessageText, SpanBold } from "components/commoncomponents/general";
import { NavigationLink } from "components/commoncomponents/navigation-related";

const Message = () => {
  return (
    <>
      <MessageText padding="2.5rem 0 2.5rem 0">
        <SpanBold>TERMS</SpanBold>
        <MessageText>
          1.0
        </MessageText>
        <MessageText>
          1.1
        </MessageText>
      </MessageText>
      <MessageText padding="2.5rem 0 2.5rem 0">
        <SpanBold>CONDITIONS</SpanBold>
        <MessageText>
          1.1
        </MessageText>
        <MessageText>
          1.2
        </MessageText>
      </MessageText>
      <MessageText padding="2.5rem 0 2.5rem 0">
        <SpanBold>PRIVACY POLICY</SpanBold>
        <MessageText>
          1.1
        </MessageText>
        <MessageText>
          1.2
        </MessageText>
      </MessageText>
      <HorizontalLine width="25%" margin="5rem auto 2.5rem auto" />
      <MessageText>
        If you have any concern, please contact us <NavigationLink to="/page/home">here</NavigationLink> and we will get back to you as soon as possible.
      </MessageText>
    </>
  );
};

export default Message;