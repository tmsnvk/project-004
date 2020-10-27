import React from "react";
import { MessageText } from "components/commoncomponents/general";
import { NavigationLink } from "components/commoncomponents/navigation-related";

const Message = () => {
  return (
    <>
      <MessageText padding="2.5rem 0 0 0">
        Feel free to reach out with any issue or question!
      </MessageText>
      <MessageText padding="2.5rem 0 0 0">
        By creating an account you agree to our <NavigationLink to="/page/terms">Terms and Conditions</NavigationLink> and <NavigationLink to="/page/terms">Privacy Policy</NavigationLink>.
      </MessageText>
    </>
  );
};

export default Message;