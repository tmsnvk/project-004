import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "context/UserContext";
import { useHistory } from "react-router-dom";
// import { useForm } from "react-hook-form";

const ContainerComponent = styled.button`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const UserLogout = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    setUserData({token: undefined, user: undefined });
    localStorage.setItem("auth-token", "");

    history.push("/");
  };

  return (
    <ContainerComponent onClick={logout}>
      Log out
    </ContainerComponent>
  );
};

export default UserLogout;