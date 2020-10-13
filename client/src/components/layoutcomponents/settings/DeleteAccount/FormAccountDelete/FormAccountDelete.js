import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { ErrorMessage, Form, Input, InputSubmit, Label } from "components/commoncomponents/authform-related";

const ContainerComponent = styled.div`

`;

const DeleteSubmit = styled(InputSubmit)`
  &:hover {
    background-color: ${props => props.theme.backgroundColor.warning};
  }
`;

const FormAccountDelete = () => {
  const [deleteAccount, SetDeleteAccount] = useState(false);
  const { handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => SetDeleteAccount(true);

  useEffect(() => {
    if (!deleteAccount) return;

    const handlePasswordChange = async () => {
      const id = localStorage.getItem("auth-id");

      try {
        const response = await axios.put("/users/deleteaccount", { id });
        localStorage.setItem("auth-token", "");
        localStorage.setItem("auth-name", "");
        localStorage.setItem("auth-id", "");
        history.push("/page/home");
        history.go();
      } catch (error) {
        console.log(error);
        return error.response.data.message;
      }
    };
    
    handlePasswordChange();
    SetDeleteAccount(false);
  }, [deleteAccount, SetDeleteAccount]);

  return (
    <ContainerComponent>
        <Form method="PUT" action="/users/deleteaccount" id="user-deleteaccount" onSubmit={handleSubmit(onSubmit)}>
        <DeleteSubmit type="submit" value="delete" />
      </Form>
    </ContainerComponent>
  );
};

export default FormAccountDelete;