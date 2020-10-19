import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { LoadingSpinner } from "components/commoncomponents/general";
import { CharacterCounter, ErrorMessage, ErrorMessageInputField, Form, Input, InputSubmit, Label, TogglePassword } from "components/commoncomponents/form-related";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
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

const FormRegister = () => {
  const { setUserData } = useContext(UserContext);

  const [activeNameFormField, setActiveNameFormField] = useState(false);
  const [activePasswordFormField, setActivePasswordFormField] = useState(false);
  const [activePasswordCheckFormField, setActivePasswordCheckFormField] = useState(false);

  const [usernameCharacterCounter, setUsernameCharacterCounter] = useState(0);
  const [passwordCharacterCounter, setPasswordCharacterCounter] = useState(0);

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const [formData, setFormData] = useState({ userName: undefined, password: undefined, passwordCheck: undefined });
  const [loginError, setLoginError] = useState(undefined);

  const { errors, handleSubmit, register, watch } = useForm();
  const history = useHistory();

  const onSubmit = (data) => setFormData({ userName: data.registerUserName, password: data.registerPassword, passwordCheck: data.registerPasswordCheck });

  useEffect(() => {
    if (formData.userName === undefined || formData.password === undefined || formData.passwordCheck === undefined) return;

    const handleRegister = async () => {
      try {
        await axios.post("/user/register", formData);
        setLoadingSpinner(true)
        const response = await axios.post("/user/login", formData);
        setTimeout(() => setLoadingSpinner(false), 1000000);
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
  }, [formData, setUserData, setLoadingSpinner, history]);

  const activateNameFormField = () => setActiveNameFormField(true);
  const disableNameFocus = (event) => event.target.value === "" ? setActiveNameFormField(false) : null;

  const activatePasswordFormField = () => setActivePasswordFormField(true);
  const disablePasswordFocus = (event) => event.target.value === "" ? setActivePasswordFormField(false) : null;

  const activatePasswordCheckFormField = () => setActivePasswordCheckFormField(true);
  const disablePasswordCheckFocus = (event) => event.target.value === "" ? setActivePasswordCheckFormField(false) : null;

  const togglePassword = () => setIsPasswordHidden(!isPasswordHidden);

  const getUsernameCharacterNumber = (event) => setUsernameCharacterCounter(event.target.value.length);
  const getPasswordCharacterNumber = (event) => setPasswordCharacterCounter(event.target.value.length);

  return (
    <ContainerComponent>
      <Form method="POST" action="/user/register" id="user-register" onSubmit={handleSubmit(onSubmit)}>
        <WrapperForm>
          <Label htmlFor="registerUserName" activeFormField={activeNameFormField}>Username *</Label>
          <Input 
            type="text"
            id="registerUserName"
            name="registerUserName"
            autoComplete="off"
            onFocus={activateNameFormField}
            onBlur={disableNameFocus}
            onChange={getUsernameCharacterNumber}
            ref={register({
              required: {
                value: true,
                message: "USERNAME is required. Use only letters or numbers."
              },
              pattern: {
                value: /^[A-Za-z0-9 ]+$/i,
                message: "USERNAME is required. Use only letters or numbers."
              },
              minLength: {
                value: 5,
                message: "USERNAME must be minimum 5 characters long."
              },
              maxLength: {
                value: 20,
                message: "USERNAME must be maximum 20 characters long."
              }
            })}
          />
          <WrapperInputTools>
            <CharacterCounter characterCounter={usernameCharacterCounter} />
          </WrapperInputTools>
          {errors.registerUserName && <ErrorMessageInputField>{errors.registerUserName.message}</ErrorMessageInputField>}
          <Label htmlFor="registerPassword" activeFormField={activePasswordFormField}>Password *</Label>
          <Input 
            type={isPasswordHidden ? "password" : "text"}
            id="registerPassword"
            name="registerPassword"
            autoComplete="off"
            onFocus={activatePasswordFormField}
            onBlur={disablePasswordFocus}
            onChange={getPasswordCharacterNumber}
            ref={register({
              required: {
                value: true,
                message: "PASSWORD is required."
              },
              minLength: {
                value: 6,
                message: "PASSWORD must be minimum 6 characters long."
              },
              maxLength: {
                value: 20,
                message: "PASSWORD must be maximum 20 characters long."
              }
            })}
          />
          <WrapperInputTools>
            <TogglePassword togglePassword={togglePassword} isPasswordHidden={isPasswordHidden} />
            <CharacterCounter characterCounter={passwordCharacterCounter} />
          </WrapperInputTools>
          {errors.registerPassword && <ErrorMessageInputField>{errors.registerPassword.message}</ErrorMessageInputField>}
          <Label htmlFor="registerPasswordCheck" activeFormField={activePasswordCheckFormField}>Confirm Password *</Label>
          <Input 
            type={isPasswordHidden ? "password" : "text"}
            id="registerPasswordCheck"
            name="registerPasswordCheck"
            autoComplete="off"
            onFocus={activatePasswordCheckFormField}
            onBlur={disablePasswordCheckFocus}
            ref={register({
              required: {
                value: true,
                message: "PASSWORD verification is required."
              },
              validate: (value) => { return value === watch("registerPassword") || "The provided PASSWORDS do not match."}
            })}
          />
          {errors.registerPasswordCheck && <ErrorMessageInputField>{errors.registerPasswordCheck.message}</ErrorMessageInputField>}
        </WrapperForm>
        {loginError === undefined && loadingSpinner === true ? <LoadingSpinner message={"Our librarians are registering your request on our Archives, please wait."} /> : <InputSubmit type="submit" value="register" />}
        {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
        </Form>
    </ContainerComponent>
  );
};

export default FormRegister;