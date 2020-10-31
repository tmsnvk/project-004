import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({ token: undefined, user: undefined, id: undefined, createdAt: undefined });
  const [gameData, setGameData] = useState({ gameStart: undefined, gameFinish: undefined, gameDeath: undefined });
  const [userColorTheme, setUserColorTheme] = useState("darkYellow");

  return (
    <UserContext.Provider value={{ gameData, setGameData, userColorTheme, setUserColorTheme, userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};