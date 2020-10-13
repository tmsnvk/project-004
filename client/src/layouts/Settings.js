import React from "react";
import styled from "styled-components";
import { ContainerLayoutWithMQ } from "components/commoncomponents/general";
import { ChangeName, ChangePassword, DeleteAccount, TopText } from "components/layoutcomponents/settings";

const Settings = () => {
  return (
    <ContainerLayoutWithMQ>
      <TopText />
      <ChangeName />
      <ChangePassword />
      <DeleteAccount />
    </ContainerLayoutWithMQ>
  );
};

export default Settings;