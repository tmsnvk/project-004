import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({ token: undefined, user: undefined, id: undefined });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};