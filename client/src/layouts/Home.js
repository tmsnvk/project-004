import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import { LayoutContainer } from "components/commoncomponents/general";
import { FormLogin, LoggedInText, LoggedOutText, PageTopText } from "components/layoutcomponents/home";

const Home = () => {
  const { userData } = useContext(UserContext);

  return (
    <LayoutContainer>
      <PageTopText />
      {!userData.user ? <><LoggedOutText /><FormLogin /></> : <LoggedInText />}
    </LayoutContainer>
  );
};

export default Home;