import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import { MessageTitle } from "components/commoncomponents/general";

const Title = () => {
  const { userData } = useContext(UserContext);

  return (
    <MessageTitle>
      {!userData.user ? <></> : `You have choosen, ${userData.user.toUpperCase()}!`}
    </MessageTitle>
  );
};

export default Title;