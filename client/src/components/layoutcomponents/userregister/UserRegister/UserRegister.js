import React, { useState, useContext } from "react";
// import { useForm } from "react-hook-form";
import axios from "axios";
import UserContext from "context/UserContext";
import { useHistory } from "react-router-dom";

const UserRegister = () => {
  // const { register, handleSubmit, errors } = useForm();
  const [loginName, setLoginName] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();

  const { setUserData } = useContext(UserContext);

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const newUser = { loginName, password, passwordCheck };

    await axios.post("/users/register", newUser);

    const loginRes = await axios.post("/users/login", { loginName, password });

    setUserData({ token: loginRes.data.token, user: loginRes.data.user });

    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <label htmlFor="register-loginName">Name</label>
        <input type="text" id="register-loginName" autoComplete="off" onChange={e => setLoginName(e.target.value)} />
        <label htmlFor="register-password">Password</label>
        <input type="password" id="register-password" autoComplete="off" onChange={e => setPassword(e.target.value)} />
        <input type="password" placeholder="verify password" autoComplete="off" onChange={e => setPasswordCheck(e.target.value)} />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default UserRegister;