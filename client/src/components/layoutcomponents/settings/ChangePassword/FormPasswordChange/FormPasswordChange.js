import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { LoadingSpinner } from "components/commoncomponents/general";
import { CharacterCounter, ErrorMessage, ErrorMessageInputField, Form, Input, Submit, Label, TogglePassword } from "components/commoncomponents/form-related";

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
  const { errors, handleSubmit, register, trigger, watch } = useForm();

  const [activePasswordCurrentFormField, setActivePasswordCurrentFormField] = useState(false);
  const [activePasswordFormField, setActivePasswordFormField] = useState(false);
  const [activePasswordCheckFormField, setActivePasswordCheckFormField] = useState(false);

  const [passwordCharacterCounter, setPasswordCharacterCounter] = useState(0);

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const [formData, setFormData] = useState({ currentPassword: undefined, newPassword: undefined, newPasswordCheck: undefined });
  const [loginError, setLoginError] = useState(undefined);

  const history = useHistory();

  const onSubmit = (data) => setFormData({ currentPassword: data.currentPassword, newPassword: data.changePassword, newPasswordCheck: data.changePasswordCheck });

  useEffect(() => {
    if (formData.currentPassword === undefined || formData.newPassword === undefined || formData.newPasswordCheck === undefined) return;

    const handlePasswordChange = async () => {
      const id = localStorage.getItem("auth-id");

      try {
        setLoadingSpinner(true);
        await axios.put("/user/change-password", { id, formData });
        setTimeout(() => setLoadingSpinner(false), 1500);
        history.push("/page/success");
        history.go();
      } catch (error) {
        console.log(error);
        return setLoginError(error.response.data.message);
      }
    };

    handlePasswordChange();
  }, [formData, history]);

  const activatePasswordCurrentFormField = () => setActivePasswordCurrentFormField(true);
  const disablePasswordCurrentFocus = (event) => event.target.value === "" ? setActivePasswordCurrentFormField(false) : null;

  const activatePasswordFormField = () => setActivePasswordFormField(true);
  const disablePasswordFocus = (event) => event.target.value === "" ? setActivePasswordFormField(false) : null;

  const activatePasswordCheckFormField = () => setActivePasswordCheckFormField(true);
  const disablePasswordCheckFocus = (event) => event.target.value === "" ? setActivePasswordCheckFormField(false) : null;

  const togglePassword = () => setIsPasswordHidden(!isPasswordHidden);

  const getPasswordChanges = (event) => {
    setPasswordCharacterCounter(event.target.value.length);
    trigger("changePassword");
  };

  const getPasswordCheckChanges = () => trigger("changePasswordCheck");

  return (
    <>
      <Form method="PUT" action="/user/change-password" id="user-changepassword" onSubmit={handleSubmit(onSubmit)}>
        <WrapperForm>
          <Label htmlFor="changePassword" activeFormField={activePasswordCurrentFormField}>Password *</Label>
          <Input
            type={isPasswordHidden ? "password" : "text"}
            id="currentPassword"
            name="currentPassword"
            autoComplete="off"
            maxLength="15"
            onFocus={activatePasswordCurrentFormField}
            onBlur={disablePasswordCurrentFocus}
            ref={register}
          />
          {errors.currentPassword && <ErrorMessageInputField>{errors.currentPassword.message}</ErrorMessageInputField>}
          <Label htmlFor="changePassword" activeFormField={activePasswordFormField}>New Password *</Label>
          <Input
            type={isPasswordHidden ? "password" : "text"}
            id="changePassword"
            name="changePassword"
            autoComplete="off"
            maxLength="15"
            onFocus={activatePasswordFormField}
            onBlur={disablePasswordFocus}
            onChange={getPasswordChanges}
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
                value: 15,
                message: "PASSWORD must be maximum 15 characters long."
              }
            })}
          />
          <WrapperInputTools>
            <TogglePassword togglePassword={togglePassword} isPasswordHidden={isPasswordHidden} />
            <CharacterCounter characterCounter={passwordCharacterCounter} characterlength="15" />
          </WrapperInputTools>
          {errors.changePassword && <ErrorMessageInputField>{errors.changePassword.message}</ErrorMessageInputField>}
          <Label htmlFor="changePasswordCheck" activeFormField={activePasswordCheckFormField}>Confirm New Password *</Label>
          <Input
            type={isPasswordHidden ? "password" : "text"}
            id="changePasswordCheck"
            name="changePasswordCheck"
            autoComplete="off"
            maxLength="15"
            onFocus={activatePasswordCheckFormField}
            onBlur={disablePasswordCheckFocus}
            onChange={getPasswordCheckChanges}
            ref={register({
              required: {
                value: true,
                message: "PASSWORD verification is required."
              },
              validate: (value) => { return value === watch("changePassword") || "PASSWORD fields do not match."}
            })}
          />
          {errors.changePasswordCheck && <ErrorMessageInputField>{errors.changePasswordCheck.message}</ErrorMessageInputField>}
        </WrapperForm>
        {loginError === undefined && loadingSpinner === true ? <LoadingSpinner message={"One of our librarians is registering your request in our Archives, please wait."} /> : <Submit type="submit" value="change" />}
        {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
      </Form>
    </>
  );
};

export default FormNameChange;