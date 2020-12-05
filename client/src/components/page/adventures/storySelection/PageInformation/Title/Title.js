import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import { MessageTitle } from "components/shared/general";

const Title = () => {
  const { userData } = useContext(UserContext);

  return (
    <MessageTitle>
      {userData.user ? `Select a story, ${userData.user.toUpperCase()}!` : <></>}
    </MessageTitle>
  );
};

export default Title;