import React from "react";
import { MessageText } from "components/commoncomponents/general";
import { NavigationLink } from "components/commoncomponents/navigation-related";

const Message = () => {
  return (
    <>
      <MessageText padding="2.5rem 0 2.5rem 0">
        Your data was successfully updated.
      </MessageText>
      <MessageText padding="2.5rem 0 2.5rem 0">
        Click <NavigationLink to="/page/home">here</NavigationLink> to return to the home page.
      </MessageText>
    </>
  );
};

export default Message;