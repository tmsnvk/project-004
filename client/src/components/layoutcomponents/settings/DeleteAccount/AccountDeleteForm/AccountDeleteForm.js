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

  const [deleteAccount, setDeleteAccount] = useState(false);

  const onSubmit = (data) => setDeleteAccount(true);

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
        setUserData({ token: undefined, user: undefined, id: undefined, createdAt: undefined });
        history.push("/page/home");
      } catch (error) {
        console.log(error);
      }
    };

    handleAccountDelete();
    return () => setDeleteAccount(false);
  }, [deleteAccount, history, setDeleteAccount, setUserData]);

  return (
    <Form method="DELETE" action="/user/delete" id="user-deleteaccount" onSubmit={handleSubmit(onSubmit)}>
      <Submit type="submit" value="delete" backgroundColor="warning" />
    </Form>
  );
};

export default AccountDeleteForm;