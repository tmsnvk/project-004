import React from "react";
import styled from "styled-components";
import { ContainerLayoutWithMQ } from "components/commoncomponents/general";
import { ChangeName, ChangePassword, TopText } from "components/layoutcomponents/settings";

const Settings = () => {
  return (
    <ContainerLayoutWithMQ>
      <TopText />
      <ChangeName />
      <ChangePassword />
    </ContainerLayoutWithMQ>
  );
};

export default Settings;