import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { ErrorMessage, Form, Input, InputSubmit, Label, TogglePassword } from "components/commoncomponents/form-related";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const LoginForm = () => {
  const { setUserData } = useContext(UserContext);

  const [activeNameFormField, setActiveNameFormField] = useState(false);
  const [activePasswordFormField, setActivePasswordFormField] = useState(false);

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [formData, setFormData] = useState({ userName: undefined, password: undefined });
  const [loginError, setLoginError] = useState(undefined);

  const { handleSubmit, register } = useForm();
  const history = useHistory();

  const onSubmit = (data) =>  setFormData({ userName: data.loginUserName, password: data.loginPassword });

  useEffect(() => {
    if (formData.userName === undefined || formData.password === undefined) return;

    const handleLogin = async () => {
      try {
        const response = await axios.post("/user/login", formData);
        setUserData({ token: response.data.token, user: response.data.user.userName, id: response.data.user.id });

        localStorage.setItem("auth-token", response.data.token);
        localStorage.setItem("auth-name", response.data.user.userName);
        localStorage.setItem("auth-id", response.data.user.id);
      } catch (error) {
        return setLoginError(error.response.data.message);
      }
    };

    handleLogin();
    return () => {
      setFormData({ userName: undefined, password: undefined });
      setLoginError(undefined);
    };
  }, [formData, setUserData, history]);

  const activateNameFormField = () => setActiveNameFormField(true);
  const disableNameFocus = (event) => event.target.value === "" ? setActiveNameFormField(false) : null;

  const activatePasswordFormField = () => setActivePasswordFormField(true);
  const disablePasswordFocus = (event) => event.target.value === "" ? setActivePasswordFormField(false) : null;

  const togglePassword = () => setIsPasswordHidden(!isPasswordHidden);

  return (
    <ContainerComponent>
      <Form method="POST" action="/user/login" id="user-login" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="loginUserName" activeFormField={activeNameFormField}>Username *</Label>
        <Input
          type="text"
          id="loginUserName"
          name="loginUserName"
          autoComplete="off"
          onFocus={activateNameFormField}
          onBlur={disableNameFocus}
          ref={register}
        />
        <Label htmlFor="loginPassword" activeFormField={activePasswordFormField}>Password *</Label>
        <Input
          type={isPasswordHidden ? "password" : "text"}
          id="loginPassword"
          name="loginPassword"
          autoComplete="off"
          onFocus={activatePasswordFormField}
          onBlur={disablePasswordFocus}
          ref={register}
        />
        <InputSubmit type="submit" value="log in" />
        <TogglePassword top="-15.5rem" left="20rem" togglePassword={togglePassword} isPasswordHidden={isPasswordHidden} />
        {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
      </Form>
    </ContainerComponent>
  );
};

export default LoginForm;