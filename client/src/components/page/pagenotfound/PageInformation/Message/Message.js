import React from "react";
import { MessageText } from "components/shared/general";
import { NavigationLink } from "components/shared/navigation";

const Message = () => {
  return (
    <>
      <MessageText padding="2.5rem 0 2.5rem 0">
        The page you are looking for does not exist.
      </MessageText>
      <MessageText padding="2.5rem 0 2.5rem 0">
        Click <NavigationLink to="/page/home">here</NavigationLink> to return to the home page.
      </MessageText>
    </>
  );
};

export default Message;