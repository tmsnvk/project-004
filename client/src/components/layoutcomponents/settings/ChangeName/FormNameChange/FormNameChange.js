import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { LoadingSpinner } from "components/commoncomponents/general";
import { CharacterCounter, ErrorMessage, ErrorMessageWrapper, Form, FormWrapper, Input, InputHelperWrapper, Submit, Label } from "components/commoncomponents/form-related";

const FormNameChange = () => {
  const { errors, formState, handleSubmit, register, trigger } = useForm();
  const history = useHistory();

  const [isInputNameInFocus, setIsInputNameInFocus] = useState(false);

  const [usernameCharacterCounter, setUsernameCharacterCounter] = useState(0);

  const [formData, setFormData] = useState({ changedName: undefined });
  const [responseError, setResponseError] = useState(undefined);

  const onSubmit = (data) => setFormData({ changedName: data.changeUsername });

  useEffect(() => {
    if (formData.changedName === undefined) return;

    const handleNameChange = async () => {
      const id = localStorage.getItem("auth-id");

      try {
        await axios.put("/user/change-name", { id, formData });
        history.push("/page/success");
        history.go();
      } catch (error) {
        return setResponseError(error.response.data.message);
      }
    };

    handleNameChange();
    return () => setFormData({ changedName: undefined });
  }, [formData, history]);

  const focusInputName = () => setIsInputNameInFocus(true);
  const blurInputName = (event) => event.target.value === "" ? setIsInputNameInFocus(false) : null;

  const getUsernameChanges = (event) => {
    setUsernameCharacterCounter(event.target.value.length);
    trigger("changeUsername");
  };

  return (
    <Form method="PUT" action="/user/change-name" id="user-changename" onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <Label htmlFor="changeUsername" isInputInFocus={isInputNameInFocus}>Username *</Label>
        <Input 
          type="text"
          id="changeUsername"
          name="changeUsername"
          autoComplete="off"
          maxLength="12"
          onFocus={focusInputName}
          onBlur={blurInputName}
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
        <InputHelperWrapper>
          <CharacterCounter characterCounter={usernameCharacterCounter} characterlength="12" />
        </InputHelperWrapper>
        {errors.changeUsername && <ErrorMessageWrapper>{errors.changeUsername.message}</ErrorMessageWrapper>}
        {formState.isSubmitting ? <LoadingSpinner message={"One of our librarians is registering your request in our Archives, please wait."} /> : <Submit type="submit" value="change" />}
        {responseError ? <ErrorMessage>{responseError}</ErrorMessage> : null}
      </FormWrapper>
    </Form>
  );
};

export default FormNameChange;