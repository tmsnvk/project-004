import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { LoadingSpinner } from "components/commoncomponents/general";
import { CharacterCounter, ErrorMessage, ErrorMessageInputField, Form, Input, InputSubmit, Label } from "components/commoncomponents/form-related";

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

const FormNameChange = () => {
  const { errors, handleSubmit, register, trigger } = useForm();

  const [activeNameFormField, setActiveNameFormField] = useState(false);
  const [usernameCharacterCounter, setUsernameCharacterCounter] = useState(0);

  const [formData, setFormData] = useState({ changedName: undefined });
  const [loginError, setLoginError] = useState(undefined);

  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const history = useHistory();

  const onSubmit = (data) => setFormData({ changedName: data.changeLoginName });

  useEffect(() => {
    if (formData.changedName === undefined) return;

    const handleNameChange = async () => {
      const id = localStorage.getItem("auth-id");

      try {
        setLoadingSpinner(true);
        await axios.put("/user/change-name", { id, formData });
        setTimeout(() => setLoadingSpinner(false), 1500);
        history.push("/page/success");
        history.go();
      } catch (error) {
        return setLoginError(error.response.data.message);
      }
    };

    handleNameChange();
  }, [formData, history]);

  const activateNameFormField = () => setActiveNameFormField(true);
  const disableNameFocus = (event) => event.target.value === "" ? setActiveNameFormField(false) : null;
  const getUsernameChanges = (event) => {
    setUsernameCharacterCounter(event.target.value.length);
    trigger("changeUserName");
  };

  return (
    <Form method="PUT" action="/user/change-name" id="user-changename" onSubmit={handleSubmit(onSubmit)}>
      <WrapperForm>
        <Label htmlFor="changeUserName" activeFormField={activeNameFormField}>Username *</Label>
        <Input 
          type="text"
          id="changeUserName"
          name="changeUserName"
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
        {errors.changeUserName && <ErrorMessageInputField>{errors.changeUserName.message}</ErrorMessageInputField>}
        {loginError === undefined && loadingSpinner === true ? <LoadingSpinner message={"One of our librarians is registering your request in our Archives, please wait."} /> : <InputSubmit type="submit" value="change" />}
        {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
      </WrapperForm>
    </Form>
  );
};

export default FormNameChange;