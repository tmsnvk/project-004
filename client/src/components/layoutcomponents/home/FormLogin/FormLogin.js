import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { LoadingSpinner } from "components/commoncomponents/general";
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

const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 25rem;
`;

const WrapperInputTools = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const LoginForm = () => {
  const { setUserData } = useContext(UserContext);
  const { handleSubmit, register } = useForm();

  const [activeNameFormField, setActiveNameFormField] = useState(false);
  const [activePasswordFormField, setActivePasswordFormField] = useState(false);

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const [formData, setFormData] = useState({ userName: undefined, password: undefined });
  const [loginError, setLoginError] = useState(undefined);

  const history = useHistory();

  const onSubmit = (data) =>  setFormData({ userName: data.loginUserName, password: data.loginPassword });

  useEffect(() => {
    if (formData.userName === undefined || formData.password === undefined) return;

    const handleLogin = async () => {
      try {
        setLoadingSpinner(true);
        const response = await axios.post("/user/login", formData);
        setLoadingSpinner(false);
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
  }, [formData, setUserData, setLoadingSpinner, history]);

  const activateNameFormField = () => setActiveNameFormField(true);
  const disableNameFocus = (event) => event.target.value === "" ? setActiveNameFormField(false) : null;

  const activatePasswordFormField = () => setActivePasswordFormField(true);
  const disablePasswordFocus = (event) => event.target.value === "" ? setActivePasswordFormField(false) : null;

  const togglePassword = () => setIsPasswordHidden(!isPasswordHidden);

  return (
    <ContainerComponent>
      <Form method="POST" action="/user/login" id="user-login" onSubmit={handleSubmit(onSubmit)}>
        <WrapperForm>
          <Label htmlFor="loginUserName" activeFormField={activeNameFormField}>Username *</Label>
          <Input
            type="text"
            id="loginUserName"
            name="loginUserName"
            autoComplete="off"
            maxLength="15"
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
            maxLength="20"
            onFocus={activatePasswordFormField}
            onBlur={disablePasswordFocus}
            ref={register}
          />
          <WrapperInputTools>
            <TogglePassword togglePassword={togglePassword} isPasswordHidden={isPasswordHidden} />
          </WrapperInputTools>
        </WrapperForm>
        {loginError === undefined && loadingSpinner === true ? <LoadingSpinner message={"One of our librarians is checking your login credentials in our Archives, please wait."} /> : <InputSubmit type="submit" value="log in" />}
        {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
      </Form>
    </ContainerComponent>
  );
};

export default LoginForm;