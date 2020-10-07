import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import { MessageTitle } from "components/commoncomponents/general";

const Title = () => {
  const { userData } = useContext(UserContext);

  return (
    <MessageTitle>
      {!userData.user ? "Welcome at Evrallas, adventurer!" : `Welcome at Evrallas, ${userData.user.loginName}!`}
    </MessageTitle>
  );
};

export default Title;