import React from "react";
import styled from "styled-components";
import { IconLight } from "components/commoncomponents/styled-icons";
import { iconList } from "utilities";

const PasswordIcon = styled(IconLight)`
  align-self: flex-end;
  margin: 1rem 1rem 0 0;
  cursor: pointer;
`;

const TogglePassword = ({ isPasswordHidden, togglePassword }) => {
  return (
    isPasswordHidden ? <PasswordIcon icon={iconList.passwordUnlock} onClick={togglePassword}></PasswordIcon> : <PasswordIcon icon={iconList.passwordLock} onClick={togglePassword}></PasswordIcon>
  );
};

export default TogglePassword;