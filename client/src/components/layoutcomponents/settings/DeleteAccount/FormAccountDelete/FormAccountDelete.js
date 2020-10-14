import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { Form, InputSubmit } from "components/commoncomponents/authform-related";

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

    const handleAccountDelete = async () => {
      const id = localStorage.getItem("auth-id");
      const token = localStorage.getItem("auth-token");

      console.log(id);

      try {
        await axios.delete("/user/delete", { params: { id: id }, headers: {"x-auth-token": token }});
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
    
    handleAccountDelete();
    SetDeleteAccount(false);
  }, [deleteAccount, history, SetDeleteAccount]);

  return (
    <ContainerComponent>
        <Form method="DELETE" action="/user/delete" id="user-deleteaccount" onSubmit={handleSubmit(onSubmit)}>
        <DeleteSubmit type="submit" value="delete" />
      </Form>
    </ContainerComponent>
  );
};

export default FormAccountDelete;