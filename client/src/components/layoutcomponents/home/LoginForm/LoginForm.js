import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { LoadingSpinner } from "components/commoncomponents/general";
import { ErrorMessage, Form, FormWrapper, Input, InputHelperWrapper, Label, Submit, TogglePassword } from "components/commoncomponents/form-related";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const LoginForm = () => {
  const { setGameData, setUserColorTheme, setUserData } = useContext(UserContext);
  const { formState, handleSubmit, register } = useForm();

  const [isInputNameInFocus, setIsInputNameInFocus] = useState(false);
  const [isInputPasswordInFocus, setIsInputPasswordInFocus] = useState(false);

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [formData, setFormData] = useState({ username: undefined, password: undefined });
  const [responseError, setResponseError] = useState(undefined);

  const onSubmit = (data) =>  setFormData({ username: data.loginUsername, password: data.loginPassword });

  useEffect(() => {
    if (formData.username === undefined || formData.password === undefined) return;

    const handleLogin = async () => {
      try {
        const userResponse = await axios.post("/user/login", formData);
        setUserData({ token: userResponse.data.token, user: userResponse.data.user.username, id: userResponse.data.user.id, createdAt: userResponse.data.user.createdAt });
        setUserColorTheme(userResponse.data.user.colorTheme);

        localStorage.setItem("auth-token", userResponse.data.token);
        localStorage.setItem("auth-name", userResponse.data.user.username);
        localStorage.setItem("auth-id", userResponse.data.user.id);

        const achievementResponse = await axios.get("/achievement/store", { params: { _id: userResponse.data.user.id }});
        setGameData({ gameStart: achievementResponse.data.gameStart, gameFinish: achievementResponse.data.gameFinish, gameDeath: achievementResponse.data.gameDeath });
      } catch (error) {
        return setResponseError(error.message);
      }
    };

    handleLogin();
    return () => {
      setFormData({ username: undefined, password: undefined });
      setGameData({ gameStart: 0, gameFinish: 0, gameDeath: 0 });
      setUserColorTheme("darkYellow");
      setResponseError(undefined);
    };
  }, [formData, setGameData, setUserData, setUserColorTheme]);

  const focusInputName = () => setIsInputNameInFocus(true);
  const blurInputName = (event) => event.target.value === "" ? setIsInputNameInFocus(false) : null;

  const focusInputPassword = () => setIsInputPasswordInFocus(true);
  const blurInputPassword = (event) => event.target.value === "" ? setIsInputPasswordInFocus(false) : null;

  const togglePassword = () => setIsPasswordHidden(!isPasswordHidden);

  return (
    <ComponentContainer>
      <Form method="POST" action="/user/login" id="user-login" onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>
          <Label htmlFor="loginUsername" isInputInFocus={isInputNameInFocus}>Username *</Label>
          <Input
            type="text"
            id="loginUsername"
            name="loginUsername"
            autoComplete="off"
            maxLength="15"
            onFocus={focusInputName}
            onBlur={blurInputName}
            ref={register}
          />
          <Label htmlFor="loginPassword" isInputInFocus={isInputPasswordInFocus}>Password *</Label>
          <Input
            type={isPasswordHidden ? "password" : "text"}
            id="loginPassword"
            name="loginPassword"
            autoComplete="off"
            maxLength="20"
            onFocus={focusInputPassword}
            onBlur={blurInputPassword}
            ref={register}
          />
          <InputHelperWrapper>
            <TogglePassword togglePassword={togglePassword} isPasswordHidden={isPasswordHidden} />
          </InputHelperWrapper>
        </FormWrapper>
        {formState.isSubmitting ? <LoadingSpinner message={"One of our librarians is checking your credentials in our Archives, please wait."} /> : <Submit type="submit" value="log in" />}
        {responseError ? <ErrorMessage>{responseError}</ErrorMessage> : null}
      </Form>
    </ComponentContainer>
  );
};

export default LoginForm;