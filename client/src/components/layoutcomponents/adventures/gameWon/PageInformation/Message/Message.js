import React from "react";
import { MessageText, SpanBold } from "components/commoncomponents/general";
import { NavigationLink } from "components/commoncomponents/navigation-related";

const Message = () => {
  return (
    <>
      <MessageText padding="2.5rem 0 0 0">
        You won. It seems <SpanBold>Hood</SpanBold> has finally caught up with you.
      </MessageText>
      <MessageText padding="2.5rem 0 0 0">
        There is always a next time, though - click <NavigationLink to="/page/adventures">here</NavigationLink> to restart the story and try to avoid <SpanBold>Hood</SpanBold> this time. Or click <NavigationLink to="/page/achievements">here</NavigationLink> and see which achievements you have unlocked through this and earlier runs.
      </MessageText>
    </>
  );
};

export default Message;