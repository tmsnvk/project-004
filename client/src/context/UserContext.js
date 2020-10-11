import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({ token: undefined, user: undefined, id: undefined });
  const [gameData, setGameData] = useState({ death: undefined });

  return (
    <UserContext.Provider value={{ userData, setUserData, gameData, setGameData }}>
      {children}
    </UserContext.Provider>
  );
};