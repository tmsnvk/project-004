import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { LoadingSpinner } from "components/commoncomponents/general";
import { CharacterCounter, ErrorMessage, ErrorMessageInputField, Form, FormWrapper, Input, InputHelperWrapper, Submit, Label, TogglePassword } from "components/commoncomponents/form-related";

const ComponentContainer = styled.div`
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

const RegisterForm = () => {
  const { setUserData } = useContext(UserContext);
  const { errors, formState, handleSubmit, register, trigger, watch } = useForm();
  const history = useHistory();

  const [isInputNameInFocus, setIsInputNameInFocus] = useState(false);
  const [isInputPasswordInFocus, setIsInputPasswordInFocus] = useState(false);
  const [isInputPasswordCheckInFocus, setIsInputPasswordCheckInFocus] = useState(false);

  const [usernameCharacterCounter, setUsernameCharacterCounter] = useState(0);
  const [passwordCharacterCounter, setPasswordCharacterCounter] = useState(0);

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [formData, setFormData] = useState({ username: undefined, password: undefined, passwordCheck: undefined });
  const [responseError, setResponseError] = useState(undefined);

  const onSubmit = (data) => setFormData({ username: data.registerUsername, password: data.registerPassword, passwordCheck: data.registerPasswordCheck });

  useEffect(() => {
    if (formData.username === undefined || formData.password === undefined || formData.passwordCheck === undefined) return;

    const handleRegister = async () => {
      try {
        await axios.post("/user/register", formData);
        const response = await axios.post("/user/login", formData);
        setUserData({ token: response.data.token, user: response.data.user.username, id: response.data.user.id });

        localStorage.setItem("auth-token", response.data.token);
        localStorage.setItem("auth-name", response.data.user.username);
        localStorage.setItem("auth-id", response.data.user.id);
        history.push("/page/home");
        history.go();
      } catch (error) {
        return setResponseError(error.response.data.message);
      }
    };

    handleRegister();
    return () => {
      setFormData({ username: undefined, password: undefined, passwordCheck: undefined });
      setResponseError(undefined);
    } 
  }, [formData, history, setUserData]);

  const focusInputName = () => setIsInputNameInFocus(true);
  const blurInputName = (event) => event.target.value === "" ? setIsInputNameInFocus(false) : null;

  const focusInputPassword = () => setIsInputPasswordInFocus(true);
  const blurInputPassword = (event) => event.target.value === "" ? setIsInputPasswordInFocus(false) : null;

  const focusInputPasswordCheck = () => setIsInputPasswordCheckInFocus(true);
  const blurInputPasswordCheck = (event) => event.target.value === "" ? setIsInputPasswordCheckInFocus(false) : null;

  const togglePassword = () => setIsPasswordHidden(!isPasswordHidden);

  const getUsernameChanges = (event) => {
    setUsernameCharacterCounter(event.target.value.length);
    trigger("registerUsername");
  };

  const getPasswordChanges = (event) => {
    setPasswordCharacterCounter(event.target.value.length);
    trigger("registerPassword");
  };

  const getPasswordCheckChanges = () => trigger("registerPasswordCheck");

  return (
    <ComponentContainer>
      <Form method="POST" action="/user/register" id="user-register" onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>
          <Label htmlFor="registerUsername" isInputInFocus={isInputNameInFocus}>Username *</Label>
          <Input 
            type="text"
            id="registerUsername"
            name="registerUsername"
            autoComplete="off"
            maxLength="12"
            onFocus={focusInputName}
            onBlur={blurInputName}
            onChange={getUsernameChanges}
            ref={register({
              required: {
                value: true,
                message: "USERNAME is required - use only letters and numbers; minimum 5, maximum 12 characters long."
              },
              pattern: {
                value: /^[A-Za-z0-9 ]+$/i,
                message: "Use only letters and numbers."
              },
              minLength: {
                value: 5,
                message: "USERNAME must be minimum 5 characters long."
              },
              maxLength: {
                value: 12,
                message: "USERNAME must be maximum 12 characters long."
              }
            })}
          />
          <InputHelperWrapper>
            <CharacterCounter characterCounter={usernameCharacterCounter} characterlength="12" />
          </InputHelperWrapper>
          {errors.registerUsername && <ErrorMessageInputField>{errors.registerUsername.message}</ErrorMessageInputField>}
          <Label htmlFor="registerPassword" isInputInFocus={isInputPasswordInFocus}>Password *</Label>
          <Input 
            type={isPasswordHidden ? "password" : "text"}
            id="registerPassword"
            name="registerPassword"
            autoComplete="off"
            maxLength="15"
            onFocus={focusInputPassword}
            onBlur={blurInputPassword}
            onChange={getPasswordChanges}
            ref={register({
              required: {
                value: true,
                message: "PASSWORD is required; minimum 6, maximum 15 characters long."
              },
              minLength: {
                value: 6,
                message: "PASSWORD must be minimum 6 characters long."
              },
              maxLength: {
                value: 15,
                message: "PASSWORD must be maximum 15 characters long."
              }
            })}
          />
          <InputHelperWrapper>
            <TogglePassword togglePassword={togglePassword} isPasswordHidden={isPasswordHidden} />
            <CharacterCounter characterCounter={passwordCharacterCounter} characterlength="15" />
          </InputHelperWrapper>
          {errors.registerPassword && <ErrorMessageInputField>{errors.registerPassword.message}</ErrorMessageInputField>}
          <Label htmlFor="registerPasswordCheck" isInputInFocus={isInputPasswordCheckInFocus}>Confirm Password *</Label>
          <Input 
            type={isPasswordHidden ? "password" : "text"}
            id="registerPasswordCheck"
            name="registerPasswordCheck"
            autoComplete="off"
            maxLength="15"
            onFocus={focusInputPasswordCheck}
            onBlur={blurInputPasswordCheck}
            onChange={getPasswordCheckChanges}
            ref={register({
              required: {
                value: true,
                message: "PASSWORD verification is required; enter the same password twice."
              },
              validate: (value) => { return value === watch("registerPassword") || "PASSWORD inputs must match."}
            })}
          />
          {errors.registerPasswordCheck && <ErrorMessageInputField>{errors.registerPasswordCheck.message}</ErrorMessageInputField>}
        </FormWrapper>
        {formState.isSubmitting ? <LoadingSpinner message={"One of our librarians is registering your credentials in our Archives, please wait."} /> : <Submit type="submit" value="register" />}
        {responseError ? <ErrorMessage>{responseError}</ErrorMessage> : null}
      </Form>
    </ComponentContainer>
  );
};

export default RegisterForm;