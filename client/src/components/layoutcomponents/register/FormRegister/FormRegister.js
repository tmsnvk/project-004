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
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const FormRegister = () => {
  const { setUserData } = useContext(UserContext);

  const [activeNameFormField, setActiveNameFormField] = useState(false);
  const [contentNameFormField, setContentNameFormField] = useState("");
  const [activePasswordFormField, setActivePasswordFormField] = useState(false);
  const [contentPasswordFormField, setContentPasswordFormField] = useState("");
  const [activePasswordCheckFormField, setActivePasswordCheckFormField] = useState(false);
  const [contentPasswordCheckFormField, setContentPasswordCheckFormField] = useState("");

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

  const activateNameFormField = () => setActiveNameFormField(true);
  const disableNameFocus = (event) => event.target.value === "" ? setActiveNameFormField(false) : null;

  const updateNameInputValue = (event) => {
    setContentNameFormField(event.target.value);
    activateNameFormField();
  };

  const activatePasswordFormField = () => setActivePasswordFormField(true);
  const disablePasswordFocus = (event) => event.target.value === "" ? setActivePasswordFormField(false) : null;

  const updatePasswordInputValue = (event) => {
    setContentPasswordFormField(event.target.value);
    activatePasswordFormField();
  };

  const activatePasswordCheckFormField = () => setActivePasswordCheckFormField(true);
  const disablePasswordCheckFocus = (event) => event.target.value === "" ? setActivePasswordCheckFormField(false) : null;

  const updatePasswordCheckInputValue = (event) => {
    setContentPasswordCheckFormField(event.target.value);
    activatePasswordCheckFormField();
  };

  return (
    <ContainerComponent>
      <Form method="POST" action="/user/register" id="user-register" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="registerUserName" activeFormField={activeNameFormField}>Name *</Label>
        <Input 
          type="text"
          id="registerUserName"
          name="registerUserName"
          autoComplete="off"
          onFocus={activateNameFormField}
          onBlur={disableNameFocus}
          onChange={updateNameInputValue}
          ref={register}
        />
        <Label htmlFor="registerPassword" activeFormField={activePasswordFormField}>Password *</Label>
        <Input 
          type="password"
          id="registerPassword"
          name="registerPassword"
          autoComplete="off"
          onFocus={activatePasswordFormField}
          onBlur={disablePasswordFocus}
          onChange={updatePasswordInputValue}
          ref={register}
        />
        <Label htmlFor="registerPasswordCheck" activeFormField={activePasswordCheckFormField}>Verify Password *</Label>
        <Input 
          type="password"
          id="registerPasswordCheck"
          name="registerPasswordCheck"
          autoComplete="off"
          onFocus={activatePasswordCheckFormField}
          onBlur={disablePasswordCheckFocus}
          onChange={updatePasswordCheckInputValue}
          ref={register}
        />
        <InputSubmit type="submit" value="register" />
        {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
      </Form>
    </ContainerComponent>
  );
};

export default FormRegister;