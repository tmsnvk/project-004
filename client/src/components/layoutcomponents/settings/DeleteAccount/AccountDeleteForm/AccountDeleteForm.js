import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Form, Submit } from "components/commoncomponents/form-related";

const AccountDeleteForm = () => {  
  const { setUserData } = useContext(UserContext);
  const { handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => handleAccountDelete();

  const handleAccountDelete = async () => {
    try {
      await axios.delete("/user/delete");
      setUserData({ user: undefined, createdAt: undefined });
      history.push("/page/home");
      history.go();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form method="DELETE" action="/user/delete" id="user-deleteaccount" onSubmit={handleSubmit(onSubmit)}>
      <Submit type="submit" value="delete" backgroundColor="warning" />
    </Form>
  );
};

export default AccountDeleteForm;