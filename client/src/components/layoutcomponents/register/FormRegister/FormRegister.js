import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { ErrorMessage, Form, Input, InputSubmit, Label } from "components/commoncomponents/form-related";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const FormRegister = () => {
  const { setUserData } = useContext(UserContext);

  const [formData, setFormData] = useState({ userName: undefined, password: undefined, passwordCheck: undefined });
  const [loginError, setLoginError] = useState(undefined);

  const { handleSubmit, register } = useForm();
  const history = useHistory();

  const onSubmit = (data) => setFormData({ userName: data.registerUserName, password: data.registerPassword, passwordCheck: data.registerPasswordCheck });

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
    return () => setFormData({ userName: undefined, password: undefined, passwordCheck: undefined });
  }, [formData, setUserData, history]);

  return (
    <ContainerComponent>
      <Form method="POST" action="/user/register" id="user-register" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="registerUserName">Name</Label>
        <Input 
          type="text"
          id="registerUserName"
          name="registerUserName"
          placeholder="* Enter Usename"
          autoComplete="off"
          ref={register}
        />
        <Label htmlFor="registerPassword">Password</Label>
        <Input 
          type="password"
          id="registerPassword"
          name="registerPassword"
          placeholder="* Enter Password"
          autoComplete="off"
          ref={register}
        />
        <Label htmlFor="registerPasswordCheck">Verify Password</Label>
        <Input 
          type="password"
          id="registerPasswordCheck"
          name="registerPasswordCheck"
          placeholder="* Verify Password"
          autoComplete="off"
          ref={register}
        />
        <InputSubmit type="submit" value="register" />
        {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
      </Form>
    </ContainerComponent>
  );
};

export default FormRegister;