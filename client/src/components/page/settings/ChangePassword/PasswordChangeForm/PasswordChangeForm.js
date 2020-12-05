import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { LoadingSpinner } from "components/shared/general";
import { CharacterCounter, ErrorMessage, ErrorMessageWrapper, Form, FormWrapper, Input, InputHelperWrapper, Submit, Label, TogglePassword } from "components/shared/form";

const PasswordChangeForm = () => {
  const { setUserData } = useContext(UserContext);
  const { errors, formState, handleSubmit, register, trigger, watch } = useForm();
  const history = useHistory();

  const [isInputPasswordCurrentInFocus, setIsInputPasswordCurrentInFocus] = useState(false);
  const [isInputPasswordInFocus, setIsInputPasswordInFocus] = useState(false);
  const [isInputPasswordCheckInFocus, setIsInputPasswordCheckInFocus] = useState(false);
  const [passwordCharacterCounter, setPasswordCharacterCounter] = useState(0);

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [formData, setFormData] = useState({ currentPassword: undefined, newPassword: undefined, newPasswordCheck: undefined });
  const [responseError, setResponseError] = useState(undefined);

  const onSubmit = (data) => setFormData({ currentPassword: data.currentPassword, newPassword: data.changePassword, newPasswordCheck: data.changePasswordCheck });

  useEffect(() => {
    if (formData.currentPassword === undefined || formData.newPassword === undefined || formData.newPasswordCheck === undefined) return;

    const handlePasswordChange = async () => {
      try {
        await axios.put("/user/change-password", { formData });
        const response = await axios.get("/user");
        setUserData({ user: response.data.username, createdAt: response.data.createdAt });
        history.push("/page/success");
        history.go();
      } catch (error) {
        return setResponseError(error.response.data.message);
      }
    };

    handlePasswordChange();
    return () => setFormData({ currentPassword: undefined, newPassword: undefined, newPasswordCheck: undefined });
  }, [formData, history, setUserData]);

  const focusPasswordCurrent = () => setIsInputPasswordCurrentInFocus(true);
  const blurPasswordCurrent = (event) => event.target.value === "" ? setIsInputPasswordCurrentInFocus(false) : null;

  const focusPassword = () => setIsInputPasswordInFocus(true);
  const blurPassword = (event) => event.target.value === "" ? setIsInputPasswordInFocus(false) : null;

  const focusPasswordCheck = () => setIsInputPasswordCheckInFocus(true);
  const blurPasswordCheck = (event) => event.target.value === "" ? setIsInputPasswordCheckInFocus(false) : null;

  const togglePassword = () => setIsPasswordHidden(!isPasswordHidden);

  const getPasswordChanges = (event) => {
    setPasswordCharacterCounter(event.target.value.length);
    trigger("changePassword");
  };

  const getPasswordCheckChanges = () => trigger("changePasswordCheck");

  return (
    <>
      <Form method="PUT" action="/user/change-password" id="user-changepassword" onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>
          <Label htmlFor="currentPassword" isInputInFocus={isInputPasswordCurrentInFocus}>Current Password *</Label>
          <Input
            type={isPasswordHidden ? "password" : "text"}
            id="currentPassword"
            name="currentPassword"
            autoComplete="off"
            maxLength="15"
            onFocus={focusPasswordCurrent}
            onBlur={blurPasswordCurrent}
            ref={register}
          />
          {errors.currentPassword && <ErrorMessageWrapper errorMessage={errors.currentPassword.message} />}
          <Label htmlFor="changePassword" isInputInFocus={isInputPasswordInFocus}>New Password *</Label>
          <Input
            type={isPasswordHidden ? "password" : "text"}
            id="changePassword"
            name="changePassword"
            autoComplete="off"
            maxLength="15"
            onFocus={focusPassword}
            onBlur={blurPassword}
            onChange={getPasswordChanges}
            ref={register({
              required: { value: true, message: "PASSWORD is required; minimum 6, maximum 15 characters long." },
              minLength: { value: 6, message: "PASSWORD must be minimum 6 characters long." },
              maxLength: { value: 15, message: "PASSWORD must be maximum 15 characters long." }
            })}
          />
          <InputHelperWrapper>
            <TogglePassword togglePassword={togglePassword} isPasswordHidden={isPasswordHidden} />
            <CharacterCounter characterCounter={passwordCharacterCounter} characterLength="15" />
          </InputHelperWrapper>
          {errors.changePassword && <ErrorMessageWrapper errorMessage={errors.changePassword.message} />}
          <Label htmlFor="changePasswordCheck" isInputInFocus={isInputPasswordCheckInFocus}>Confirm New Password *</Label>
          <Input
            type={isPasswordHidden ? "password" : "text"}
            id="changePasswordCheck"
            name="changePasswordCheck"
            autoComplete="off"
            maxLength="15"
            onFocus={focusPasswordCheck}
            onBlur={blurPasswordCheck}
            onChange={getPasswordCheckChanges}
            ref={register({
              required: { value: true, message: "PASSWORD verification is required." },
              validate: (value) => { return value === watch("changePassword") || "PASSWORD fields do not match."}
            })}
          />
          {errors.changePasswordCheck && <ErrorMessageWrapper errorMessage={errors.changePasswordCheck.message} />}
        </FormWrapper>
        {formState.isSubmitting ? <LoadingSpinner loadingMessage={"The Tower librarians are registering your request in their Archives, please wait."} /> : <Submit type="submit" value="change" />}
        {responseError ? <ErrorMessage errorMessage={responseError} /> : null}
      </Form>
    </>
  );
};

export default PasswordChangeForm;