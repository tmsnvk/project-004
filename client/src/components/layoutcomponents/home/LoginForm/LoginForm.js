import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { ErrorMessage, Form, Input, InputSubmit, Label } from "components/commoncomponents/authform-related";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
`;

const LoginForm = () => {
  const { setUserData } = useContext(UserContext);
  
  const [formData, setFormData] = useState({ loginName: undefined, password: undefined });
  const [loginError, setLoginError] = useState(undefined);

  const { handleSubmit, register } = useForm();
  const history = useHistory();

  const onSubmit = (data) =>  setFormData({ loginName: data.loginUserName, password: data.loginUserPassword });

  useEffect(() => {
    if (formData.loginName === undefined || formData.password === undefined) return;

    const handleLogin = async () => {
      try {
        const response = await axios.post("/users/login", formData);
        setUserData({ token: response.data.token, user: response.data.user.loginName, id: response.data.user.id });
        
        localStorage.setItem("auth-token", response.data.token);
        localStorage.setItem("auth-name", response.data.user.loginName);
        localStorage.setItem("auth-id", response.data.user.id);
      } catch (error) {
        return setLoginError(error.response.data.message);
      }
    };
    
    handleLogin();
    return () => setFormData({ loginName: undefined, password: undefined }) && setLoginError(undefined);
  }, [formData, setUserData, history]);

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
          ref={register}
        />
        <Label htmlFor="loginUserPassword">Password</Label>
        <Input 
          type="password"
          id="loginUserPassword"
          name="loginUserPassword"
          placeholder="Enter Your Password"
          autoComplete="off"
          ref={register}
        />
        <InputSubmit type="submit" value="sign in" />
        {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
      </Form>
    </ContainerComponent>
  );
};

export default LoginForm;