import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "context/UserContext";
import axios from "axios";
import styled from "styled-components";
import { LoadingSpinner } from "components/shared/general";
import { CharacterCounter, ErrorMessage, ErrorMessageWrapper, Form, FormWrapper, Input, InputHelperWrapper, Submit, Label, Textarea } from "components/shared/form";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
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

  const [formData, setFormData] = useState({ username: undefined, email: undefined, message: undefined });
  const [responseError, setResponseError] = useState({ message: undefined });

  const onSubmit = (data) => setFormData({ username: data.contactName, email: data.contactEmail, message: data.contactTextarea });

  useEffect(() => {
    if (formData.username === undefined || formData.email === undefined || formData.message === undefined) return;

    const handleFormSubmission = async () => {
      try {
        await axios.post("/contact/form-msg-from-evrallas", formData);
        history.push("/page/success");
      } catch (error) {
        return setResponseError(error.response.data.message);
      }
    };

    handleFormSubmission();
    return () => {
      setFormData({ username: undefined, email: undefined, message: undefined });
      setResponseError({ message: undefined });
    } 
  }, [formData, history, setUserData]);

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
    <ComponentContainer>
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
              required: { value: true, message: "NAME is required. Use only letters and maximum 20 characters." },
              pattern: { value: /^[A-Za-z0-9 ]+$/i, message: "Use only letters and numbers." },
              maxLength: { value: 20, message: "NAME must be maximum 20 characters long." }
            })}
          />
          <InputHelperWrapper>
            <CharacterCounter characterCounter={usernameCharacterCounter} characterLength="20" />
          </InputHelperWrapper>
          {errors.contactName && <ErrorMessageWrapper errorMessage={errors.contactName.message} />}
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
              required: { value: true, message: "EMAIL is required." },
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i, message: "Provide a valid EMAIL." }
            })}
          />
          {errors.contactEmail && <ErrorMessageWrapper errorMessage={errors.contactEmail.message} />}
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
              required: { value: true, message: "MESSAGE is required." }
            })}
          />
          <InputHelperWrapper>
            <CharacterCounter characterCounter={textCharacterCounter} characterLength="500" />
          </InputHelperWrapper>
          {errors.contactTextarea && <ErrorMessageWrapper errorMessage={errors.contactTextarea.message} />}
        </FormWrapper>
        {formState.isSubmitting ? <LoadingSpinner loadingMessage={"One of our librarians is registering your request in our Archives, please wait."} /> : <Submit type="submit" value="submit" />}
        {responseError.message !== undefined ? <ErrorMessage errorMessage={responseError.message} /> : null}
      </Form>
    </ComponentContainer>
  );
};

export default ContactForm;