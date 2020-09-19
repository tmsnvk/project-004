import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import UserContext from "context/UserContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage, Form, Input, InputSubmit, Label } from "components/commoncomponents/userauth-form-related";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
`;

const UserLoginForm = () => {
  const { handleSubmit } = useForm();
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(undefined);
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const updateLoginName = (event) => setLoginName(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);

  const onSubmit = async () => {
    try {
      const loginUser = { loginName, password };
      const loginRes = await axios.post("/users/login", loginUser );
      setUserData({ token: loginRes.data.token, user: loginRes.data.user });
      
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/useraccount");
    } catch (error) {
      return error.response.data.message && setLoginError(error.response.data.message);
    }
  };

  return (
    <ContainerComponent>
      <Form method="POST" action="/users/login" id="user-login" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="loginUserName">Name</Label>
        <Input 
          type="text"
          id="loginUserName"
          name="loginUserName"
          placeholder="Enter Your Name"
          autoComplete="off"
          onChange={updateLoginName} 
        />
        <Label htmlFor="loginUserPassword">Password</Label>
        <Input 
          type="password"
          id="loginUserPassword"
          name="loginUserPassword"
          placeholder="Enter Your Password"
          autoComplete="off"
          onChange={updatePassword}
          />
        <InputSubmit type="submit" value="Log in" />
        {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
      </Form>
    </ContainerComponent>
  );
};

export default UserLoginForm;