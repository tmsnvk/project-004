import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import UserContext from "context/UserContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage, Input, InputSubmit, Label } from "components/commoncomponents/formrelated";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
`;

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserLogin = () => {
  const { handleSubmit } = useForm();
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(undefined);

  const { setUserData } = useContext(UserContext);

  const history = useHistory();

  const updateLoginName = (event) => setLoginName(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const loginUser = { loginName, password };
      const loginRes = await axios.post("/users/login", loginUser );
      setUserData({ token: loginRes.data.token, user: loginRes.data.user });
      
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/useraccount");
    } catch (error) {
      error.response.data.message && setLoginError(error.response.data.message);
    }
  };

  return (
    <ContainerComponent>
      <ContainerForm method="POST" action="/users/login" id="user-login" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="loginUserName">Name</Label>
        <Input 
          type="text"
          id="loginUserName"
          name="loginUserName"
          placeholder="* Your Name"
          autoComplete="off"
          onChange={updateLoginName} 
        />
        <Label htmlFor="loginUserPassword">Password</Label>
        <Input 
          type="password"
          id="loginUserPassword"
          name="loginUserPassword"
          placeholder="* Your Password"
          autoComplete="off"
          onChange={updatePassword}
          />
        <InputSubmit type="submit" value="Log in" />
        {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
      </ContainerForm>
    </ContainerComponent>
  );
};

export default UserLogin;