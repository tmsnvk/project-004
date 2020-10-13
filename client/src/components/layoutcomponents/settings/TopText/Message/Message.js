import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "context/UserContext";
import { MessageText } from "components/commoncomponents/general";

const SpanBold = styled.span`
  font-weight: bold;
`;

const Message = () => {
  const { userData } = useContext(UserContext);

  return (
    <>
    <MessageText padding="2.5rem 0 0 0">
      Use the below settings as per your wish.
    </MessageText>
    <MessageText padding="5rem 0 0 0">
      Your account was created on <SpanBold>{new Date(userData.createdAt).toLocaleString("en-US", { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: true })}</SpanBold>.
    </MessageText>
    </>
  );
};

export default Message;