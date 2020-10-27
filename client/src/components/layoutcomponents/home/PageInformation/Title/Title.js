import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import { MessageTitle } from "components/commoncomponents/general";

const Title = () => {
  const { userData } = useContext(UserContext);

  return (
    <MessageTitle>
      {userData.user ? `Welcome at Evrallas, ${userData.user.toUpperCase()}!` : "Welcome at Evrallas, adventurer!"}
    </MessageTitle>
  );
};

export default Title;