import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Form, InputSubmit } from "components/commoncomponents/form-related";

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

      try {
        await axios.delete("/user/delete", { params: { id: id }, headers: {"x-auth-token": token }});
        localStorage.setItem("auth-token", "");
        localStorage.setItem("auth-name", "");
        localStorage.setItem("auth-id", "");
        history.push("/page/home");
        history.go();
      } catch (error) {
        return error.response.data.message;
      }
    };

    handleAccountDelete();
    SetDeleteAccount(false);
  }, [deleteAccount, history, SetDeleteAccount]);

  return (
    <>
      <Form method="DELETE" action="/user/delete" id="user-deleteaccount" onSubmit={handleSubmit(onSubmit)}>
        <InputSubmit type="submit" value="delete" backgroundColor={props => props.theme.backgroundColor.warning} />
      </Form>
    </>
  );
};

export default FormAccountDelete;