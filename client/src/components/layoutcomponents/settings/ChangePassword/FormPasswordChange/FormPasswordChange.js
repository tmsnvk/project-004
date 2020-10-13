import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { ErrorMessage, Form, Input, InputSubmit, Label } from "components/commoncomponents/authform-related";

const ContainerComponent = styled.div`

`;

const FormNameChange = () => {
  const [formData, setFormData] = useState({ password: undefined, passwordCheck: undefined });
  const [loginError, setLoginError] = useState(undefined);
  const { handleSubmit, register } = useForm();
  const history = useHistory();

  const onSubmit = (data) => setFormData({ password: data.changePassword, passwordCheck: data.changePasswordCheck });

  useEffect(() => {
    if (formData.password === undefined || formData.passwordCheck === undefined) return;

    const handlePasswordChange = async () => {
      const id = localStorage.getItem("auth-id");

      try {
        const response = await axios.put("/users/changepassword", { id, formData });
        console.log(response.data);
        // history.go();
      } catch (error) {
        console.log(error);
        return setLoginError(error.response.data.message);
      }
    };

    handlePasswordChange();
  }, [formData]);

  return (
    <ContainerComponent>
        <Form method="PUT" action="/users/changepassword" id="user-password" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="changePassword">Password</Label>
        <Input 
          type="password"
          id="changePassword"
          name="changePassword"
          placeholder="* New Password"
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
    </ContainerComponent>
  );
};

export default FormNameChange;