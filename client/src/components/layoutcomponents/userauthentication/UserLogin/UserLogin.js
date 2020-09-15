import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import UserContext from "context/UserContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
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

const InputErrorMessage = styled.div`
  color: ${props => props.theme.fontColor.warning};
  font-size: ${props => props.theme.fontSize.default};
  padding: 1rem 0 0 0;
`;

const UserLogin = () => {
  const { handleSubmit } = useForm();
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(undefined);

  const { setUserData } = useContext(UserContext);

  const history = useHistory();

  const updateLoginName = (event) => setLoginName(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const loginUser = { loginName, password };
      const loginRes = await axios.post("/users/login", loginUser );
      
      setUserData({ token: loginRes.data.token, user: loginRes.data.user });
      
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/useraccount");
    } catch (error) {
      error.response.data.message && setLoginError(error.response.data.message);
    }
  };

  return (
    <ContainerComponent>
      <ContainerForm method="POST" action="/users/login" id="user-login" onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="loginUserName">Name</FormLabel>
        <FormInput 
          type="text"
          id="loginUserName"
          name="loginUserName"
          placeholder="* Your Name"
          autoComplete="off"
          onChange={updateLoginName} 
        />
        <FormLabel htmlFor="loginUserPassword">Password</FormLabel>
        <FormInput 
          type="password"
          id="loginUserPassword"
          name="loginUserPassword"
          placeholder="* Your Password"
          autoComplete="off"
          onChange={updatePassword}
          />
        <FormInputSubmit type="submit" value="Log in" />
        {loginError ? <InputErrorMessage>{loginError}</InputErrorMessage> : null}
      </ContainerForm>
    </ContainerComponent>
  );
};

export default UserLogin;