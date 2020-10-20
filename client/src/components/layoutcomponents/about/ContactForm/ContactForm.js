import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { LoadingSpinner } from "components/commoncomponents/general";
import { CharacterCounter, ErrorMessage, ErrorMessageInputField, Form, Input, InputSubmit, Label } from "components/commoncomponents/form-related";

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

const Textarea = styled.textarea`
  align-self: center;
  width: 25rem;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  font-family: inherit;
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.fontColor.main};
  font-weight: bold;
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  padding: 5rem 0.5rem 0 2rem;
  border-radius: 0.5rem;
  cursor: text;
  line-height: 1.5;

  &:hover {
    border: 0.3rem ${props => props.theme.backgroundColor.secondary} solid;
  }

  &:focus {
    outline: none;
  }
`;

const ContactForm = () => {
  const { setUserData } = useContext(UserContext);
  const { errors, handleSubmit, register, trigger } = useForm();

  const [activeNameFormField, setActiveNameFormField] = useState(false);
  const [activePasswordFormField, setActivePasswordFormField] = useState(false);
  const [activePasswordCheckFormField, setActivePasswordCheckFormField] = useState(false);

  const [usernameCharacterCounter, setUsernameCharacterCounter] = useState(0);
  const [textCharacterCounter, setTextCharacterCounter] = useState(0);
  
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const [formData, setFormData] = useState({ userName: undefined, email: undefined, message: undefined });
  const [loginError, setLoginError] = useState(undefined);

  const history = useHistory();

  const onSubmit = (data) => setFormData({ userName: data.contactUserName, email: data.contactEmail, message: data.contactTextarea });

  useEffect(() => {
    if (formData.userName === undefined || formData.email === undefined || formData.message === undefined) return;

    const handleFormSubmission = async () => {
      try {
        // setLoadingSpinner(true);
        const response = await axios.post("/contact/form-msg-to-evrallas", formData);
        await axios.post("/contact/form-msg-from-evrallas", formData);
        // const response = await axios.post("/user/login", formData);
        // setTimeout(() => setLoadingSpinner(false), 1500);
        // setUserData({ token: response.data.token, user: response.data.user.userName, id: response.data.user.id });

        // localStorage.setItem("auth-token", response.data.token);
        // localStorage.setItem("auth-name", response.data.user.userName);
        // localStorage.setItem("auth-id", response.data.user.id);
        // history.push("/page/home");
        // history.go();
      } catch (error) {
        console.log(error);
        return setLoginError(error.response.data.message);
      }
    };

    handleFormSubmission();
    // return () => setFormData({ userName: undefined, email: undefined, message: undefined });
  }, [formData, setUserData, setLoadingSpinner, history]);
  
  const activateNameFormField = () => setActiveNameFormField(true);
  const disableNameFocus = (event) => event.target.value === "" ? setActiveNameFormField(false) : null;

  const activatePasswordFormField = () => setActivePasswordFormField(true);
  const disablePasswordFocus = (event) => event.target.value === "" ? setActivePasswordFormField(false) : null;

  const activatePasswordCheckFormField = () => setActivePasswordCheckFormField(true);
  const disablePasswordCheckFocus = (event) => event.target.value === "" ? setActivePasswordCheckFormField(false) : null;

  const getUsernameChanges = (event) => {
    setUsernameCharacterCounter(event.target.value.length);
    trigger("contactUserName");
  };

  const getTextChanges = (event) => {
    setTextCharacterCounter(event.target.value.length);
    trigger("contactTextarea");
  };

  return (
    <ContainerComponent>
      <Form method="POST" action="/contact/form-msg-to-evrallas" id="contact" onSubmit={handleSubmit(onSubmit)}>
        <WrapperForm>
          <Label htmlFor="contact" activeFormField={activeNameFormField}>Username *</Label>
          <Input 
            type="text"
            id="contactUserName"
            name="contactUserName"
            autoComplete="off"
            maxLength="12"
            onFocus={activateNameFormField}
            onBlur={disableNameFocus}
            onChange={getUsernameChanges}
            ref={register({
              required: {
                value: true,
                message: "USERNAME is required. Use only letters or numbers between 5 and 12 characters."
              },
              pattern: {
                value: /^[A-Za-z0-9 ]+$/i,
                message: "Use only letters or numbers."
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
          <WrapperInputTools>
            <CharacterCounter characterCounter={usernameCharacterCounter} characterlength="12" />
          </WrapperInputTools>
          {errors.contactUserName && <ErrorMessageInputField>{errors.contactUserName.message}</ErrorMessageInputField>}
          <Label htmlFor="contactEmail" activeFormField={activePasswordFormField}>Email *</Label>
          <Input 
            type="email"
            id="contactEmail"
            name="contactEmail"
            autoComplete="off"
            onFocus={activatePasswordFormField}
            onBlur={disablePasswordFocus}
            onChange={getTextChanges}
            ref={register({
              required: {
                value: true,
                message: "PASSWORD is required."
              },
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Provide a valid EMAIL."
              }
            })}
          />
          {errors.contactEmail && <ErrorMessageInputField>{errors.contactEmail.message}</ErrorMessageInputField>}
          <Label htmlFor="contactTextarea" activeFormField={activePasswordCheckFormField}>Message *</Label>
          <Textarea
            id="contactTextarea"
            name="contactTextarea"
            autoComplete="off"
            maxLength="500"
            rows="20"
            onFocus={activatePasswordCheckFormField}
            onBlur={disablePasswordCheckFocus}
            onChange={getTextChanges}
            ref={register({
              required: {
                value: true,
                message: "MESSAGE is required."
              }
            })}
          />
          <WrapperInputTools>
            <CharacterCounter characterCounter={textCharacterCounter} characterlength="500" />
          </WrapperInputTools>
          {errors.contactTextarea && <ErrorMessageInputField>{errors.contactTextarea.message}</ErrorMessageInputField>}
        </WrapperForm>
        {loginError === undefined && loadingSpinner === true ? <LoadingSpinner message={"One of our librarians is registering your request in our Archives, please wait."} /> : <InputSubmit type="submit" value="submit" />}
        {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
      </Form>
    </ContainerComponent>
  );
};

export default ContactForm;