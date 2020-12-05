import React from "react";
import { MessageText } from "components/shared/general";
import { NavigationLink } from "components/shared/navigation";

const Message = () => {
  return (
    <>
      <MessageText padding="2.5rem 0 0 0">
        You finished the adventure. Congratulations!
      </MessageText>
      <MessageText padding="2.5rem 0 0 0">
        Click <NavigationLink to="/page/adventures">here</NavigationLink> to start another or click <NavigationLink to="/page/achievements">here</NavigationLink> and see which achievements you have unlocked through this and earlier adventures.
      </MessageText>
    </>
  );
};

export default Message;