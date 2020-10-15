import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import { MessageText, SpanBold } from "components/commoncomponents/general";

const Message = () => {
  const { userData } = useContext(UserContext);

  return (
    <>
    <MessageText padding="2.5rem 0 0 0">
      Use the below settings as per your wish.
    </MessageText>
    <MessageText padding="2.5rem 0 0 0">
      Your account was created on <SpanBold>{new Date(userData.createdAt).toLocaleString("en-US", { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: true })}</SpanBold>.
    </MessageText>
    </>
  );
};

export default Message;