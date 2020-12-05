import React from "react";
import { MessageText } from "components/shared/general";
import { NavigationLink } from "components/shared/navigation";

const Message = () => {
  return (
    <>
      <MessageText padding="2.5rem 0 0 0">
        Thanks for your interest, however, current story is still in development. Hopefully, it will be released soon.
      </MessageText>
      <MessageText padding="2rem 0 0 0">
        Click <NavigationLink to="/page/adventures" replace>here</NavigationLink> to choose another adventure.
      </MessageText>
    </>
  );
};

export default Message;