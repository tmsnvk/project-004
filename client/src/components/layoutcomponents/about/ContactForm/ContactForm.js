import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { LoadingSpinner } from "components/commoncomponents/general";
import { CharacterCounter, ErrorMessage, ErrorMessageWrapper, Form, FormWrapper, Input, InputHelperWrapper, Submit, Label, Textarea } from "components/commoncomponents/form-related";

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

const ContactForm = () => {
  const { setUserData } = useContext(UserContext);
  const { errors, formState, handleSubmit, register, trigger } = useForm();
  const history = useHistory();

  const [isInputNameInFocus, setIsInputNameInFocus] = useState(false);
  const [isInputEmailInFocus, setIsInputEmailInFocus] = useState(false);
  const [isInputMessageInFocus, setIsInputMessageInFocus] = useState(false);

  const [usernameCharacterCounter, setUsernameCharacterCounter] = useState(0);
  const [textCharacterCounter, setTextCharacterCounter] = useState(0);

  const [formData, setFormData] = useState({ userName: undefined, email: undefined, message: undefined });
  const [responseError, setResponseError] = useState(undefined);

  const onSubmit = (data) => setFormData({ userName: data.contactName, email: data.contactEmail, message: data.contactTextarea });

  useEffect(() => {
    if (formData.userName === undefined || formData.email === undefined || formData.message === undefined) return;

    const handleFormSubmission = async () => {
      try {
        await axios.post("/contact/form-msg-to-evrallas", formData);
        await axios.post("/contact/form-msg-from-evrallas", formData);
        history.push("/page/success");
        history.go();
      } catch (error) {
        return setResponseError(error.response.data.message);
      }
    };

    handleFormSubmission();
    return () => setFormData({ userName: undefined, email: undefined, message: undefined });
  }, [formData, setUserData, history]);

  const focusInputName = () => setIsInputNameInFocus(true);
  const blurInputName = (event) => event.target.value === "" ? setIsInputNameInFocus(false) : null;

  const focusInputEmail = () => setIsInputEmailInFocus(true);
  const blurInputEmail = (event) => event.target.value === "" ? setIsInputEmailInFocus(false) : null;

  const focusInputMessage = () => setIsInputMessageInFocus(true);
  const blurInputMessage = (event) => event.target.value === "" ? setIsInputMessageInFocus(false) : null;

  const getUsernameChanges = (event) => {
    setUsernameCharacterCounter(event.target.value.length);
    trigger("contactName");
  };

  const getTextChanges = (event) => {
    setTextCharacterCounter(event.target.value.length);
    trigger("contactTextarea");
  };

  return (
    <ContainerComponent>
      <Form method="POST" action="/contact/form-msg-to-evrallas" id="contact" onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>
          <Label htmlFor="contactName" isInputInFocus={isInputNameInFocus}>Name *</Label>
          <Input 
            type="text"
            id="contactName"
            name="contactName"
            autoComplete="off"
            maxLength="20"
            onFocus={focusInputName}
            onBlur={blurInputName}
            onChange={getUsernameChanges}
            ref={register({
              required: {
                value: true,
                message: "NAME is required. Use only letters or numbers and maximum 20 characters."
              },
              pattern: {
                value: /^[A-Za-z0-9 ]+$/i,
                message: "Use only letters or numbers."
              },
              maxLength: {
                value: 20,
                message: "NAME must be maximum 20 characters long."
              }
            })}
          />
          <InputHelperWrapper>
            <CharacterCounter characterCounter={usernameCharacterCounter} characterlength="20" />
          </InputHelperWrapper>
          {errors.contactName && <ErrorMessageWrapper>{errors.contactName.message}</ErrorMessageWrapper>}
          <Label htmlFor="contactEmail" isInputInFocus={isInputEmailInFocus}>Email *</Label>
          <Input 
            type="email"
            id="contactEmail"
            name="contactEmail"
            autoComplete="off"
            onFocus={focusInputEmail}
            onBlur={blurInputEmail}
            onChange={getTextChanges}
            ref={register({
              required: {
                value: true,
                message: "EMAIL is required."
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Provide a valid EMAIL."
              }
            })}
          />
          {errors.contactEmail && <ErrorMessageWrapper>{errors.contactEmail.message}</ErrorMessageWrapper>}
          <Label htmlFor="contactTextarea" isInputInFocus={isInputMessageInFocus}>Message *</Label>
          <Textarea
            id="contactTextarea"
            name="contactTextarea"
            autoComplete="off"
            maxLength="500"
            rows="15"
            onFocus={focusInputMessage}
            onBlur={blurInputMessage}
            onChange={getTextChanges}
            ref={register({
              required: {
                value: true,
                message: "MESSAGE is required."
              }
            })}
          />
          <InputHelperWrapper>
            <CharacterCounter characterCounter={textCharacterCounter} characterlength="500" />
          </InputHelperWrapper>
          {errors.contactTextarea && <ErrorMessageWrapper>{errors.contactTextarea.message}</ErrorMessageWrapper>}
        </FormWrapper>
        {formState.isSubmitting ? <LoadingSpinner message={"One of our librarians is registering your request in our Archives, please wait."} /> : <Submit type="submit" value="submit" />}
        {responseError ? <ErrorMessage>{responseError}</ErrorMessage> : null}
      </Form>
    </ContainerComponent>
  );
};

export default ContactForm;