import React from "react";
import { MessageText } from "components/commoncomponents/general";

const Message = () => {
  return (
    <>
      <MessageText padding="2.5rem 0 0 0">
        You may select a story to read through. Some of them are still being written and will be available at a later time.
      </MessageText>
      <MessageText padding="2.5rem 0 0 0">
        You may come back here and start again from the beginning whenever you die.
      </MessageText>
    </>
  );
};

export default Message;