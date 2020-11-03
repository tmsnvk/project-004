import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import { MessageTitle } from "components/commoncomponents/general";

const Title = () => {
  const { userData } = useContext(UserContext);

  return (
    <MessageTitle>
      {userData.user ? `Bad news, ${userData.user.toUpperCase()}!` : "Bad news, adventurer!"}
    </MessageTitle>
  );
};

export default Title;