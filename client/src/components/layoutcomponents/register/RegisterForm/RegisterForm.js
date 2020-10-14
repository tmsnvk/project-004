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
  grid-row-start: 2;
  grid-row-end: 3;
`;

const RegisterForm = () => {
  const [formData, setFormData] = useState({ userName: undefined, password: undefined, passwordCheck: undefined });
  const [loginError, setLoginError] = useState(undefined);

  const { handleSubmit, register } = useForm();
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const onSubmit = (data) => setFormData({ userName: data.registerLoginName, password: data.registerPassword, passwordCheck: data.registerPasswordCheck });

  useEffect(() => {
    if (formData.userName === undefined || formData.password === undefined || formData.passwordCheck === undefined) return;

    const handleRegister = async () => {
      try {
        await axios.post("/user/register", formData);

        const response = await axios.post("/user/login", formData);
        setUserData({ token: response.data.token, user: response.data.user.userName, id: response.data.user.id });

        localStorage.setItem("auth-token", response.data.token);
        localStorage.setItem("auth-name", response.data.user.userName);
        localStorage.setItem("auth-id", response.data.user.id);
        history.push("/page/home");
        history.go();
      } catch (error) {
        console.log(error);
        return setLoginError(error.response.data.message);
      }
    };

    handleRegister();
  }, [formData, setUserData, history]);

  return (
    <ContainerComponent>
      <Form method="POST" action="/user/register" id="user-register" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="registerLoginName">Name</Label>
        <Input 
          type="text"
          id="registerLoginName"
          name="registerLoginName"
          placeholder="* Your Account Name"
          autoComplete="off"
          ref={register}
        />
        <Label htmlFor="registerPassword">Password</Label>
        <Input 
          type="password"
          id="registerPassword"
          name="registerPassword"
          placeholder="* Your Password"
          autoComplete="off"
          ref={register}
        />
        <Label htmlFor="registerPasswordCheck">Verify Password</Label>
        <Input 
          type="password"
          id="registerPasswordCheck"
          name="registerPasswordCheck"
          placeholder="* Verify Your Password"
          autoComplete="off"
          ref={register}
        />
        <InputSubmit type="submit" value="register" />
        {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
      </Form>
    </ContainerComponent>
  );
};

export default RegisterForm;