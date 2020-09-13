import React, { useState, useContext } from "react";
import styled from "styled-components";
// import { useForm } from "react-hook-form";
import axios from "axios";
import UserContext from "context/UserContext";
import { useHistory } from "react-router-dom";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormLabel = styled.label`

`;

const FormInput = styled.input`
  width: 15rem;
  height: 2.5rem;
  color: ${props => props.theme.fontColor.secondary};
  font-weight: bold;
  background-color: ${props => props.theme.backgroundColor.mainLight};

  &:hover {
    background-color: ${props => props.theme.backgroundColor.secondary};
  }
  
  &:focus {
    outline: none;
  }
`;

const FormInputSubmit = styled.input`
  background-color: ${props => props.theme.backgroundColor.secondary};
  color: ${props => props.theme.fontColor.secondary};
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: bold;
  text-align: center;
  width: 20rem;
  height: 5rem;
  margin: 2rem 0 0 0;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.backgroundColor.mainDark};
  }
  
  &:focus {
    outline: none;
  }
`;

const FormLogin = () => {
  // const { register, handleSubmit, errors } = useForm();
  const [loginName, setLoginName] = useState();
  const [password, setPassword] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const loginUser = { loginName, password };
    
    const loginRes = await axios.post("/users/login", loginUser );

    setUserData({ token: loginRes.data.token, user: loginRes.data.user });

    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/");
  };

  return (
    <ContainerComponent>
      <ContainerForm onSubmit={submit}>
        <FormLabel htmlFor="login-loginName">Name</FormLabel>
        <FormInput type="text" id="login-loginName" autoComplete="off" onChange={e => setLoginName(e.target.value)} />
        <FormLabel htmlFor="login-password">Password</FormLabel>
        <FormInput type="password" id="login-password" autoComplete="off" onChange={e => setPassword(e.target.value)} />
        <FormInputSubmit type="submit" value="Log in" />
      </ContainerForm>
    </ContainerComponent>
  );
};

export default FormLogin;