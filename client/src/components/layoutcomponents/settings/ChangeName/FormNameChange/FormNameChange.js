import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ErrorMessage, Form, Input, InputSubmit, Label } from "components/commoncomponents/form-related";

const FormNameChange = () => {
  const [formData, setFormData] = useState({ changedName: undefined });
  const [loginError, setLoginError] = useState(undefined);

  const { handleSubmit, register } = useForm();
  const history = useHistory();

  const onSubmit = (data) => setFormData({ changedName: data.changeLoginName });

  useEffect(() => {
    if (formData.changedName === undefined) return;

    const handleNameChange = async () => {
      const id = localStorage.getItem("auth-id");

      try {
        await axios.put("/user/change-name", { id, formData });
        history.push("/page/success");
        history.go();
      } catch (error) {
        return setLoginError(error.response.data.message);
      }
    };

    handleNameChange();
  }, [formData, history]);

  return (
    <>
      <Form method="PUT" action="/user/change-name" id="user-changename" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="changeUserName">Name</Label>
        <Input 
          type="text"
          id="changeUserName"
          name="changeUserName"
          placeholder="* Enter New Username"
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