import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import { LayoutContainer } from "components/commoncomponents/general";
import { LoggedInText, LoggedOutText, LoginForm, PageInformation } from "components/layoutcomponents/home";

const Home = () => {
  const { userData } = useContext(UserContext);

  return (
    <LayoutContainer>
      <PageInformation />
      {userData.user ? <LoggedInText /> : <><LoggedOutText /><LoginForm /></>}
    </LayoutContainer>
  );
};

export default Home;