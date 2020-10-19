import React from "react";
import { MessageText } from "components/commoncomponents/general";
import { NavigationLink } from "components/commoncomponents/navigation-related";

const Message = () => {
  return (
    <>
      <MessageText padding="2.5rem 0 0 0">
        Create your account below & start enjoying our stories right away.
      </MessageText>
      <MessageText padding="2.5rem 0 0 0">
        Registering at Evrallas will never require to enter your email or any other sensitive data & using the website will never cost you anything.
      </MessageText>
      <MessageText padding="2.5rem 0 0 0">
        Upon registering you will automatically be logged in to your user account.
      </MessageText>
      <MessageText padding="2.5rem 0 0 0">
        By creating an account you agree to our <NavigationLink to="/page/terms">Terms and Conditions</NavigationLink> and <NavigationLink to="/page/terms">Privacy Policy</NavigationLink>.
      </MessageText>
    </>
  );
};

export default Message;