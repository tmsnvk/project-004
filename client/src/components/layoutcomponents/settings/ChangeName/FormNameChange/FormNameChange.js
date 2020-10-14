import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { ErrorMessage, Form, Input, InputSubmit, Label } from "components/commoncomponents/authform-related";

const ContainerComponent = styled.div`
`;

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
        console.log(error);
        return setLoginError(error.response.data.message);
      }
    };

    handleNameChange();
  }, [formData, history]);

  return (
    <ContainerComponent>
        <Form method="PUT" action="/user/change-name" id="user-changename" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="changeLoginName">Name</Label>
        <Input 
          type="text"
          id="changeLoginName"
          name="changeLoginName"
          placeholder="* Your New Name"
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