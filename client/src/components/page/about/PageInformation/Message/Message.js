import React from "react";
import { MessageText } from "components/shared/general";
import { NavigationLink } from "components/shared/navigation";

const Message = () => {
  return (
    <>
      <MessageText padding="2.5rem 0 0 0">
        Feel free to reach out with any issue or question!
      </MessageText>
      <MessageText padding="2.5rem 0 0 0">
        By sending us your message you agree to our <NavigationLink to="/page/terms">Terms & Conditions</NavigationLink> and <NavigationLink to="/page/terms">Privacy Policy</NavigationLink>.
      </MessageText>
    </>
  );
};

export default Message;