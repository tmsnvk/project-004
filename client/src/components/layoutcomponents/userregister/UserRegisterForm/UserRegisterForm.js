import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import UserContext from "context/UserContext";
import { useHistory } from "react-router-dom";
import { ErrorMessage, Form, Input, InputSubmit, Label } from "components/commoncomponents/userauth-form-related";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const UserRegisterForm = () => {
  const { handleSubmit } = useForm();
  const [loginName, setLoginName] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [loginError, setLoginError] = useState(undefined);

  const { setUserData } = useContext(UserContext);

  const history = useHistory();

  const updateLoginName = (event) => setLoginName(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);
  const updatePasswordCheck = (event) => setPasswordCheck(event.target.value);

  const onSubmit = async () => {
    try {
      const newUser = { loginName, password, passwordCheck };
      await axios.post("/users/register", newUser);
      
      const loginRes = await axios.post("/users/login", { loginName, password });
      setUserData({ token: loginRes.data.token, user: loginRes.data.user });
      
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/page/profile");
    } catch (error) {
      return error.response.data.message && setLoginError(error.response.data.message);
    }
  };

  return (
    <ContainerComponent>
      <Form method="POST" action="/users/register" id="user-register" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="registerLoginName">Name</Label>
        <Input 
          type="text"
          id="registerLoginName"
          placeholder="* Your Account Name"
          autoComplete="off"
          onChange={updateLoginName}
        />
        <Label htmlFor="registerPassword">Password</Label>
        <Input 
          type="password"
          placeholder="* Your Password"
          id="registerPassword"
          autoComplete="off"
          onChange={updatePassword}
        />
        <Label htmlFor="registerPasswordCheck">Verify Password</Label>
        <Input 
          type="password"
          id="registerPasswordCheck"
          placeholder="* Verify Your Password"
          autoComplete="off"
          onChange={updatePasswordCheck}
        />
        <InputSubmit type="submit" value="REGISTER" />
        {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
      </Form>
    </ContainerComponent>
  );
};

export default UserRegisterForm;