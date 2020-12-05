import React from "react";
import { MessageText, SpanBold } from "components/shared/general";

const Message = () => {
  return (
    <>
      <MessageText padding="2.5rem 0 2.5rem 0">
        Start a new journey or continue a saved one.
      </MessageText>
      <MessageText padding="2.5rem 0 2.5rem 0">
        Beware of making bad choices - <SpanBold>Hood</SpanBold> watches each and every step of yours!
      </MessageText>
    </>
  );
};

export default Message;