import React from "react";
import styled from "styled-components";
import { IconYellow } from "components/commoncomponents/styled-icons";
import { iconList } from "utilities";

const PasswordIcon = styled(IconYellow)`
  position: relative;
  top: ${props => props.top || null};
  left: ${props => props.left || null};
`;

const TogglePassword = ({ top, left, isPasswordHidden, togglePassword }) => {
  return (
    isPasswordHidden ? <PasswordIcon top={top} left={left} icon={iconList.passwordUnlock} onClick={togglePassword}></PasswordIcon> : <PasswordIcon top={top} left={left} icon={iconList.passwordLock} onClick={togglePassword}></PasswordIcon>
  );
};

export default TogglePassword;