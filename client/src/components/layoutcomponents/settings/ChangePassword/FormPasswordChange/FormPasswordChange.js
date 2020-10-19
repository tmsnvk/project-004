import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ErrorMessage, Form, Input, InputSubmit, Label, TogglePassword } from "components/commoncomponents/form-related";

const FormNameChange = () => {
  const [activePasswordCurrentFormField, setActivePasswordCurrentFormField] = useState(false);
  const [activePasswordFormField, setActivePasswordFormField] = useState(false);
  const [activePasswordCheckFormField, setActivePasswordCheckFormField] = useState(false);

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [formData, setFormData] = useState({ currentPassword: undefined, newPassword: undefined, newPasswordCheck: undefined });
  const [loginError, setLoginError] = useState(undefined);

  const { handleSubmit, register } = useForm();
  const history = useHistory();

  const onSubmit = (data) => setFormData({ currentPassword: data.currentPassword, newPassword: data.changePassword, newPasswordCheck: data.changePasswordCheck });

  useEffect(() => {
    if (formData.currentPassword === undefined || formData.newPassword === undefined || formData.newPasswordCheck === undefined) return;

    const handlePasswordChange = async () => {
      const id = localStorage.getItem("auth-id");

      try {
        await axios.put("/user/change-password", { id, formData });
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

  return (
    <>
      <Form method="PUT" action="/user/change-password" id="user-changepassword" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="changePassword" activeFormField={activePasswordCurrentFormField}>Password *</Label>
        <Input
          type={isPasswordHidden ? "password" : "text"}
          id="currentPassword"
          name="currentPassword"
          autoComplete="off"
          onFocus={activatePasswordCurrentFormField}
          onBlur={disablePasswordCurrentFocus}
          ref={register}
        />
        <Label htmlFor="changePassword" activeFormField={activePasswordFormField}>New Password *</Label>
        <Input
          type={isPasswordHidden ? "password" : "text"}
          id="changePassword"
          name="changePassword"
          autoComplete="off"
          onFocus={activatePasswordFormField}
          onBlur={disablePasswordFocus}
          ref={register}
        />
        <Label htmlFor="changePasswordCheck" activeFormField={activePasswordCheckFormField}>Confirm New Password *</Label>
        <Input
          type={isPasswordHidden ? "password" : "text"}
          id="changePasswordCheck"
          name="changePasswordCheck"
          autoComplete="off"
          onFocus={activatePasswordCheckFormField}
          onBlur={disablePasswordCheckFocus}
          ref={register}
        />
        <InputSubmit type="submit" value="change" />
        <TogglePassword top="-31.5rem" left="9.5rem" togglePassword={togglePassword} isPasswordHidden={isPasswordHidden} />
        {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
      </Form>
    </>
  );
};

export default FormNameChange;