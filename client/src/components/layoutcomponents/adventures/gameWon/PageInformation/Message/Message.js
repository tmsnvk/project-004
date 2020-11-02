import React from "react";
import { MessageText, SpanBold } from "components/commoncomponents/general";
import { NavigationLink } from "components/commoncomponents/navigation-related";

const Message = () => {
  return (
    <>
      <MessageText padding="2.5rem 0 0 0">
        You managed to finish your adventure. Congratulations!
      </MessageText>
      <MessageText padding="2.5rem 0 0 0">
        Click <NavigationLink to="/page/adventures">here</NavigationLink> to start another adventure or click <NavigationLink to="/page/achievements">here</NavigationLink> and see which achievements you have unlocked through this and earlier adventures.
      </MessageText>
    </>
  );
};

export default Message;