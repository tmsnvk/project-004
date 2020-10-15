import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ErrorMessage, Form, Input, InputSubmit, Label } from "components/commoncomponents/form-related";

const FormNameChange = () => {
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

  return (
    <>
      <Form method="PUT" action="/user/change-password" id="user-changepassword" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="changePassword">Current Password</Label>
        <Input 
          type="password"
          id="currentPassword"
          name="currentPassword"
          placeholder="* Enter Current Password"
          autoComplete="off"
          ref={register}
        />
        <Label htmlFor="changePassword">Password</Label>
        <Input 
          type="password"
          id="changePassword"
          name="changePassword"
          placeholder="* Enter New Password"
          autoComplete="off"
          ref={register}
        />
        <Label htmlFor="changePasswordCheck">Verify Password</Label>
        <Input 
          type="password"
          id="changePasswordCheck"
          name="changePasswordCheck"
          placeholder="* Verify New Password"
          autoComplete="off"
          ref={register}
        />
        <InputSubmit type="submit" value="change" />
        {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
      </Form>
    </>
  );
};

export default FormNameChange;