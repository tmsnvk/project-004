import React from "react";
import { MessageText } from "components/shared/general";
import { NavigationLink } from "components/shared/navigation";

const Message = () => {
  return (
    <>
      <MessageText padding="2.5rem 0 0 0">
        Evrallas is a classic choose-your-own-adventure type of game in which the decisions you make directly affect the story's progress.
      </MessageText>
      <MessageText padding="2.5rem 0 0 0">
        Click <NavigationLink to="/page/register">here</NavigationLink> to register & and get to know more.
      </MessageText>
    </>
  );
};

export default Message;