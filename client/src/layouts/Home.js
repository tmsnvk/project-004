import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import { ContainerLayoutWithMQ } from "components/commoncomponents/general";
import { AccountText, LoginForm, RegisterText, TopText } from "components/layoutcomponents/home";

const Home = () => {
  const { userData } = useContext(UserContext);

  return (
    <ContainerLayoutWithMQ>
      <TopText />
      {!userData.user ? <><RegisterText /><LoginForm /></> : <AccountText />}
    </ContainerLayoutWithMQ>
  );
};

export default Home;